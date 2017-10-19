module.exports = {
	js:{
		files: [{
				expand: true,
				cwd: "src/js/",
				src: "**",
				dest: "build/js"
			}
		]
	},

	fonts:{
		files: [{
				expand: true,
				cwd: "src/fonts/",
				src: "*",
				dest: "build/fonts"
			}
		]
	}
};
