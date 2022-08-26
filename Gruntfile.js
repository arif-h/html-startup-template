module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		*/
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'css/style.css': 'sass/style.scss'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed',
		      sourcemap: 'none',
		    },
		    files: {
		      'css/style-min.css': 'sass/style.scss'
		    }
		  }
		},

		/**
	  	 * autoprefixer
	  	*/
	  	autoprefixer:{
	  		options:{
	  			browsers:[
	  				'Chrome >= 35', 
	  				'Firefox >= 31', 
	  				'Edge >= 12',
      				'Explorer >= 9',
      				'iOS >= 8',
      				'Safari >= 8',
      				'Android 2.3',
      				'Android >= 4',
      				'Opera >= 12'
	  			]
	  		},
	  		//prefix all files
	  		multiple_files:{
	  			expand: true,
	  			flatten: true,
	  			src:'css/*.css',
	  			dest:'css/'
	  		}
	  	},

	  	/**
	  	 * Watch
	  	*/
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}