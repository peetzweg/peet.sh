exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/web3-vscode-extension",
    toPath: "https://marketplace.visualstudio.com/items?itemName=peetzweg.crypto-address-lens&ssr=false#overview",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/web3-cli",
    toPath: "https://github.com/peetzweg/notar#readme",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/ABImate",
    toPath: "https://github.com/peetzweg/abimate#readme",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/client-work",
    toPath: "https://peetzweg.notion.site/peetzweg/504f7a0b831841f7b71c50bbe8b6f368",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/software",
    toPath: "https://peetzweg.notion.site/e006cc11b7fb4c0d880d986a30e65e0e",
    isPermanent: false,
  });
  createRedirect({
    fromPath: "/product/input/terms-of-service",
    toPath: "https://peetzweg.notion.site/8b490e6ef2324ba1ad8d122ddd971838",
    isPermanent: false,
  });
  createRedirect({
    fromPath: "/product/input/privacy-policy",
    toPath: "https://peetzweg.notion.site/54d02ca9dcc84d39bcfbd1eed867b904",
    isPermanent: false,
  });
};
