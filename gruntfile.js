module.exports = function(grunt) {
	
	grunt.initConfig({		
		
		pug: {
			
			dist: {
				options: {
					pretty: true
				},			

				files: [{
					expand: true,
					cwd: 'src/pug',
					src: '*.pug',
					dest: 'dev/',
					ext: '.html'
				}]
			}
		},

		sass: {

			dist: {
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: 'dev/css',
					ext: '.css'
				}]
			}			
		},		

		browserSync: {

			bsFiles: {
				src: ["dev/index.html", "dev/css/all.css"]
			},

			options: {
				watchTask: true,
				server: './dev'
			}
		},

		imagemin:{			
			dynamic: {

				files: [{
					expand: true,
					cwd: "src/images",
					src: ["*.{png,jpg,gif,svg}"],
					dest: "dev/images"
				}]
			}			
		},

		watch: {					

			src: {
				files: "src/pug/*.pug",
				tasks: ["pug"]
			},
			
			css:{
				files: "src/scss/*.scss",
				tasks: ["sass"]
			}			
		}
	});


	grunt.loadNpmTasks("grunt-contrib-pug");
	grunt.loadNpmTasks("grunt-contrib-sass");	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.loadNpmTasks("grunt-contrib-imagemin");

	grunt.registerTask("default", ["pug", "sass", "browserSync", "watch"]);
};