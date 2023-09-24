module.exports = (api) => {
  api.cash.using(() => {
    process.env.NODE_ENV;
  });

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [],
  };
};
