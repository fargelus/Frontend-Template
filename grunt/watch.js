module.exports = {
	src: {
			files: "src/pug/*.pug",
			tasks: ["newer:pug:dist", "pug:main"]
	},

	css:{
		files: "src/scss/*.scss",
		tasks: ["newer:sass", "newer:postcss"]
	},

	images: {
		files: "src/images/*.{png,jpg,svg,gif}",
		tasks: ["newer:imagemin"]
	},

	scripts: {
		files: "src/js/*.js",
		tasks: ["newer:copy:js"]
	},

	fonts: {
		files: "src/fonts/*",
		tasks: ["newer:copy:fonts"]
	}
};
