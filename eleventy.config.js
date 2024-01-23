const Image = require("@11ty/eleventy-img");

const imageShortcodeCallback =
  async function(src, alt = '') {
		const metadata = await Image(src, {
			widths: [400, 800, 'auto'],
			formats: ['jpeg'],
      outputDir: 'dist/img',
		});

    const srcset =
      metadata.jpeg.map(data => data.srcset).join(', ');

		const lowsrc = metadata.jpeg[0];
		const originalsrc = metadata.jpeg[metadata.jpeg.length - 1];

    return `
      <img
        src="${lowsrc.url}"
        srcset="${srcset}"
        width="${originalsrc.width}"
        height="${originalsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async"
      >
    `;
	};

module.exports = (eleventyConfig) => {
	eleventyConfig.addShortcode('image', imageShortcodeCallback);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
