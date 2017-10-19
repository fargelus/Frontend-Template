module.exports = {
	options:{
		map: true, // inline sourcemaps

		processors: [
			require('autoprefixer')({browsers: 'last 2 versions'}),
			require('cssnano')() // minify the result
      	]
	},

    dist: {
      src: 'build/css/*.css'
    }
}
