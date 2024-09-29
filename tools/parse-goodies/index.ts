import { readFileSync, writeFileSync, existsSync } from 'fs';
import * as cheerio from 'cheerio';

interface LinkInfo {
  url: string;
  title: string;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogSiteName: string | null;
  twitterCard: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  favicon: string | null;
  keywords: string | null;
  author: string | null;
  publishedTime: string | null;
  modifiedTime: string | null;
}

function makeAbsoluteUrl(
  baseUrl: string,
  relativePath: string | null,
): string | null {
  if (!relativePath) return null;
  try {
    return new URL(relativePath, baseUrl).href;
  } catch (error) {
    console.error(`Error creating absolute URL for ${relativePath}:`, error);
    return null;
  }
}

async function fetchPageInfo(url: string): Promise<LinkInfo> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const getMetaContent = (name: string): string | null =>
      $(`meta[name="${name}"], meta[property="${name}"]`).attr('content') ||
      null;

    const baseUrl = new URL(url).origin;
    const faviconHref = $('link[rel="icon"], link[rel="shortcut icon"]').attr(
      'href',
    );
    const favicon = makeAbsoluteUrl(baseUrl, faviconHref);

    const ogImage = makeAbsoluteUrl(baseUrl, getMetaContent('og:image'));
    const twitterImage = makeAbsoluteUrl(
      baseUrl,
      getMetaContent('twitter:image'),
    );

    return {
      url,
      title: $('title').text() || $('h1').first().text() || url,
      description: getMetaContent('description'),
      ogTitle: getMetaContent('og:title'),
      ogDescription: getMetaContent('og:description'),
      ogImage,
      ogSiteName: getMetaContent('og:site_name'),
      twitterCard: getMetaContent('twitter:card'),
      twitterTitle: getMetaContent('twitter:title'),
      twitterDescription: getMetaContent('twitter:description'),
      twitterImage,
      favicon,
      keywords: getMetaContent('keywords'),
      author: getMetaContent('author'),
      publishedTime: getMetaContent('article:published_time'),
      modifiedTime: getMetaContent('article:modified_time'),
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return {
      url,
      title: url,
      description: null,
      ogTitle: null,
      ogDescription: null,
      ogImage: null,
      ogSiteName: null,
      twitterCard: null,
      twitterTitle: null,
      twitterDescription: null,
      twitterImage: null,
      favicon: null,
      keywords: null,
      author: null,
      publishedTime: null,
      modifiedTime: null,
    };
  }
}

async function processMarkdownLinks(
  filePath: string,
  existingData: LinkInfo[] = [],
): Promise<LinkInfo[]> {
  const markdown = readFileSync(filePath, 'utf-8');
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links: LinkInfo[] = [...existingData];
  const existingUrls = new Set(existingData.map((link) => link.url));

  const matches = markdown.matchAll(linkRegex);
  for (const match of matches) {
    const [, , url] = match;
    if (!existingUrls.has(url)) {
      const info = await fetchPageInfo(url);
      links.push(info);
      console.log(`Processed: ${url}`);
    } else {
      console.log(`Skipped (already exists): ${url}`);
    }
  }

  return links;
}

async function main() {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3] || 'output.json';

  if (!inputFile) {
    console.error(
      'Please provide an input Markdown file as the first argument.',
    );
    process.exit(1);
  }

  let existingData: LinkInfo[] = [];
  if (existsSync(outputFile)) {
    console.log(`Loading existing data from ${outputFile}...`);
    const fileContent = readFileSync(outputFile, 'utf-8');
    existingData = JSON.parse(fileContent);
  }

  console.log(`Processing Markdown links from ${inputFile}...`);
  const linkInfos = await processMarkdownLinks(inputFile, existingData);

  console.log(`Writing results to ${outputFile}...`);
  writeFileSync(outputFile, JSON.stringify(linkInfos, null, 2));

  console.log(`Done! Results written to ${outputFile}`);
}

main().catch(console.error);
