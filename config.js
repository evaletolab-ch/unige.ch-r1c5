var path = require('path');

exports.config = {
	// See docs at https://github.com/brunch/brunch/blob/master/docs/config.md
	npm:{
		enabled:false
	},
	modules: {
		definition: false,
		wrapper: false
	},

	paths: {
		"public": 'public',
		"watched": ['app', 'vendor']
	},

	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': [
					/^vendor/,

					// external libs
					'bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/lodash/dist/lodash.js',
					'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',

					// angular
					'bower_components/angular/angular.js',
					'bower_components/angular-sanitize/angular-sanitize.js'
				],
				'test/scenarios.js': /^test(\/|\\)e2e/
			},
			order: {
				before: [
					// jquery
					'bower_components/jquery/jquery.js',

					// angular
					'bower_components/angular/angular.js',

					// bootstrap
					'bower_components/bootstrap/dist/js/bootstrap.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^app/
			}
		},
    templates: {
      joinTo: {
				'js/app.js': /^app/
			}
    }	
	},

	plugins: {
		autoprefixer: {
			browsers: [
				"last 2 version",
				"> 1%", // browsers with > 1% usage
				"ie >= 9"
			],
			cascade: false
		},
    angular_templates:{
      module: 'app.templates',
      path_transform: function(path){ return path.replace('app/', '/')}
		},
    html2js: {
      options:{
        base: 'app/assets',
        htmlmin: {
          removeComments: true
				}
			}
		}
	},

	server: {
		port: 8100
	},

	conventions: {
		assets: /app(\\|\/)assets(\\|\/)/
	},

	sourceMaps: true
};
