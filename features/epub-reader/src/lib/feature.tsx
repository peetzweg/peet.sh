import ePub from 'epubjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Reader } from './Reader.tsx';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

type Section = ReturnType<ePub.Book['spine']['get']>;

export function EpubReader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [book, setBook] = useState<ePub.Book | undefined>(undefined);
  const [section, setSection] = useState<Section | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);
  const [html, setHTML] = useState<string | undefined>(undefined);
  const [chapters, setChapters] = useState<string[] | undefined>(undefined);

  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target && e.target.files && e.target.files.length === 0) return;
      const file = e.target.files![0];
      console.log({ file });
      const buffer = await file.arrayBuffer();

      const book = ePub(buffer);

      console.log(book);
      await book.opened;

      // const rendition = book.renderTo("area", { width: 600, height: 400 });
      // rendition.display();
      console.log(book);
      setBook(book);
    },
    [],
  );

  const selectSection = useCallback(
    (href: string) => async () => {
      if (!book) return null;
      const section = book.spine.get(href);
      const chapter = await book.load(section.href);
      console.log({ href, section: section.href });
      if (!(chapter instanceof Document) || !chapter.body?.textContent) {
        console.info('Odd Chapter', href, chapter);
        return '';
      }
      setSection(section);
      setContent(chapter.body.textContent.trim());
      setHTML(chapter.body.innerHTML);
    },
    [book],
  );

  useEffect(() => {
    if (book && book.isOpen) {
      const sectionPromises: Promise<string>[] = [];

      book.spine.each((section: Section) => {
        const sectionPromise = (async () => {
          const chapter = await book.load(section.href);
          if (!(chapter instanceof Document) || !chapter.body?.textContent) {
            console.info('Odd Chapter', section.href, chapter);
            return '';
          }
          const text = chapter.body.innerHTML;
          console.log({ text });
          // console.log("loading", section.href, text.length);
          return text;
        })();

        sectionPromises.push(sectionPromise);
      });

      Promise.all(sectionPromises).then((content) => {
        const filtered = content.filter((text) => text);
        setChapters(filtered);
      });
    }
  }, [book]);
  console.log({ chapters, book });

  return (
    <div className="flex flex-col pt-10 items-center w-screen min-h-screen ">
      <input
        type="file"
        ref={inputRef}
        onChange={onChange}
        className="hidden"
      />
      <motion.div
        layout
        className="rounded-full px-4 py-2 bg-black flex flex-row gap-4 cursor-pointer z-50 select-none"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 20,
          mass: 1,
          when: 'afterChildren',
        }}
      >
        <AnimatePresence mode="wait">
          <LayoutGroup>
            {book && (
              <motion.div
                onClick={() => inputRef.current?.click()}
                key={book.packaging.metadata.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >{`${book.packaging.metadata.title} - ${book.packaging.metadata.creator}`}</motion.div>
            )}
            {book && (
              <div
                onClick={() => {
                  setBook(undefined);
                  setContent(undefined);
                }}
              >
                ×
              </div>
            )}

            {!book && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="select-epub-file"
                onClick={() => inputRef.current?.click()}
              >
                ↳ Select ePub File...
              </motion.div>
            )}
          </LayoutGroup>
        </AnimatePresence>
      </motion.div>

      {book && (
        <motion.div
          className="flex flex-col w-1/3 p-4 absolute bg-slate-900 top-20 left-0"
          whileHover={{ x: 0 }}
          transition={{
            duration: 0.2,
            type: 'tween',
            stiffness: 400,
            damping: 20,
          }}
          initial={{ x: '-90%' }}
        >
          <div className="top-2 right-4 absolute">→</div>
          {book.navigation.toc.map((t) => {
            return (
              <motion.div
                key={t.label}
                className="hover:opacity-100 opacity-45 cursor-pointer"
                style={{ opacity: section?.href === t.href ? 1 : undefined }}
                onClick={selectSection(t.href)}
              >{`${section?.href === t.href ? '→ ' : ''}${t.label}`}</motion.div>
            );
          })}
        </motion.div>
      )}

      {content && <Reader text={content} />}

      {/* {html && <div dangerouslySetInnerHTML={{ __html: html }}></div>} */}

      {/* <h1>All Content</h1>
      {chapters &&
        chapters.length > 0 &&
        chapters.map((chapter, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: chapter }}></div>
        ))} */}
    </div>
  );
}
