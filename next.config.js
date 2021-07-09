module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  env: {
    listId: e3a68b9ac3,
    apiKey: af3dbd5c89b7198f7ed1b0a662424d92 - us6,
  },
};
