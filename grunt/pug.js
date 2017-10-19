module.exports = {
	options: {
		pretty: true
	},

	dist: {
		files: [{
			expand: true,
			cwd: 'src/pug',
			src: '*.pug',
			dest: 'build/',
			ext: '.html'
		}]
	},

	main: {
		files: [{
			expand: true,
			cwd: 'src/pug',
			src: 'index.pug',
			dest: 'build/',
			ext: '.html'
		}]
	}
};
