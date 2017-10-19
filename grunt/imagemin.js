module.exports = {
	dynamic: {

		files: [{
			expand: true,
			cwd: "src/images",
			src: ["*.{png,jpg,gif,svg}"],
			dest: "build/images"
		}]
	}
};
