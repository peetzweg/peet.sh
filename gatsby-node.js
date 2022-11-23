exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/web3-vscode-extension",
    toPath: "https://github.com/peetzweg/vscode-crypto-address-lens#readme",
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
    toPath: "https://peetzweg.notion.site/peetzweg/Client-Work-504f7a0b831841f7b71c50bbe8b6f368",
    isPermanent: true,
  });
};
