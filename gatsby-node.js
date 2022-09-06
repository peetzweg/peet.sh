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
};
