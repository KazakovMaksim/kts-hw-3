module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const plugins = [
    process.env.NODE_ENV === 'development' && 'react-refresh',
  ].filter(Boolean);

  const presets = ['@babel/preset-env', '@babel/preset-react'];

  return {
    presets,
    plugins,
  };
};
