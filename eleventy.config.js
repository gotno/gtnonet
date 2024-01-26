const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
