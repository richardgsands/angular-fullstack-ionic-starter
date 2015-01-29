// Generated on 2015-01-08 using generator-angular-fullstack-ionic 2.0.13
'use strict';

module.exports = function (grunt) {
  var localConfig;
  try {
    localConfig = require('./server/config/local.env');
  } catch(e) {
    localConfig = {};
  }

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    express: 'grunt-express-server',
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    protractor: 'grunt-protractor-runner',
    buildcontrol: 'grunt-build-control'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    yeoman: {
      // RGS: Removed client and created keys for each part of the front end
      // RGS: Removed ability client path to override in bower.json (as in angular-fullstack) as it would be insanely difficult to support a flexibile relationship between different bits of the frontend!
      clientBower:  'client/bower_components',
      clientCommon: 'client/common',
      clientWebapp: 'client/webapp',
      clientIonic:  'client/ionic',

      bowerFromWebappIndexHtml: '../',
      bowerFromIonicIndexHtml: '../',
      
      dist: 'dist'
      // TODO: Add distIonic (ionic www folder...)
    },
    express: {
      options: {
        port: process.env.PORT || 9000
        // TODO: Need a port for (a) webapp and server, (b) ionic www folder (development only) - maybe 9001
      },
      dev: {
        options: {
          script: 'server/app.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: 'dist/server/app.js'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      },
      // TODO: Ionic (development only)
      ionic: {
         url: 'http://localhost:<%= express.options.port %>/ionic'
      }
    },
    watch: {
      injectJS: {
        // TODO: include common
        files: [
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.js',
          '!<%= yeoman.clientWebapp %>/{app,components}/**/*.spec.js',
          '!<%= yeoman.clientWebapp %>/{app,components}/**/*.mock.js',
          '!<%= yeoman.clientWebapp %>/app/app.js'],
        tasks: ['injector:scripts']
      },
      // TODO: add injectJsIonic
      injectCss: {
        // TODO: include common
        files: [
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.css'
        ],
        tasks: ['injector:css']
      },
      // TODO: injectCssCommon
      // TODO: injectCssIonic
      mochaTest: {
        files: ['server/**/*.spec.js'],
        tasks: ['env:test', 'mochaTest']
      },
      jsTest: {
        files: [
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.spec.js',
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.mock.js'
        ],
        tasks: ['newer:jshint:all', 'karma']
      },
      // TODO: TESTING add jsTestCommon, jsTestIonic
      injectSass: {
        files: [
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['injector:sass']
      },
      injectSassCommon: {
        files: [
          '<%= yeoman.clientCommon %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['injector:sassCommon']
      },
      // TODO: injectSassIonic
      sass: {
        // TODO: include common
        files: [
          '<%= yeoman.clientWebapp %>/{app,components,scss}/**/*.{scss,sass}'],
        tasks: ['sass:webapp', 'autoprefixer']
      },
      sassCommon: {
        // TODO: include common
        files: [
          '<%= yeoman.clientCommon %>/{,components,scss}/**/*.{scss,sass}'],
        tasks: ['sass:common', 'autoprefixer']
      },
      sassIonic: {
        // TODO: include common
        files: [
          '<%= yeoman.clientIonic %>/{,components,scss}/**/*.{scss,sass}'],
        tasks: ['sass:ionic', 'copy:ionicCommonFromTmp']
      },
      jade: {
        // TODO: include common
        files: [
          '<%= yeoman.clientWebapp %>/{app,components}/*',
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.jade'],
        tasks: ['jade']
      },
      htmlIonic: {
        files:['<%= yeoman.clientIonic %>/www/**/*'],
        tasks:['copy:ionicWwwFromClient']
      },
      // TODO: Set up jadeIonic
      // TODO: Do we actually want to watch gruntfile - why?
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        // TODO: Include common, ionic
        files: [
          '.tmp/common.css',
          '{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.css',
          '{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.html',
          '{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.js',
          '!{.tmp,<%= yeoman.clientWebapp %>}{app,components}/**/*.spec.js',
          '!{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.mock.js',
          '<%= yeoman.clientWebapp %>/assets/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
          'dist-ionic/www/**/*'
        ],
        options: {
          livereload: true
        }
      },
      express: {
        files: [
          'server/**/*.{js,json}'
        ],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        // TODO: TESTING: Include common, ionic
        jshintrc: '<%= yeoman.clientWebapp %>/.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
          jshintrc: 'server/.jshintrc'
        },
        src: [
          'server/**/*.js',
          '!server/**/*.spec.js'
        ]
      },
      serverTest: {
        options: {
          jshintrc: 'server/.jshintrc-spec'
        },
        src: ['server/**/*.spec.js']
      },
      all: [
        // TODO: TESTING: Include common, ionic
        '<%= yeoman.clientWebapp %>/{app,components}/**/*.js',
        '!<%= yeoman.clientWebapp %>/{app,components}/**/*.spec.js',
        '!<%= yeoman.clientWebapp %>/{app,components}/**/*.mock.js'
      ],
      test: {
        // TODO: TESTING: Include common, ionic
        src: [
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.spec.js',
          '<%= yeoman.clientWebapp %>/{app,components}/**/*.mock.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/.openshift',
            '!<%= yeoman.dist %>/Procfile'
          ]
        }]
      },
      server: [
        '.tmp',
        'dist-ionic/www'
      ]
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '{,*/}*.css',
          dest: '.tmp/'
        }]
      }
    },

    // Debugging with node inspector
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    // Use nodemon to run server in debug mode with an initial breakpoint
    nodemon: {
      debug: {
        script: 'server/app.js',
        options: {
          nodeArgs: ['--debug-brk'],
          env: {
            PORT: process.env.PORT || 9000
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:8080/debug?port=5858');
              }, 500);
            });
          }
        }
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      target: {
        src: '<%= yeoman.clientWebapp %>/index.html',
        ignorePath: ['<%= yeoman.bowerFromWebappIndexHtml %>'],
        exclude: [/bootstrap-sass-official/, /bootstrap.js/, '/json3/', '/es5-shim/', /bootstrap.css/, /font-awesome.css/ ]
      }
    },
    // TODO: wiredepIonic

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/public/{,*/}*.js',
            '<%= yeoman.dist %>/public/{,*/}*.css',
            '<%= yeoman.dist %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/assets/fonts/*'
          ]
        }
      }
    },
    // No need for revIonic

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= yeoman.clientWebapp %>/index.html'],
      options: {
        dest: '<%= yeoman.dist %>/public'
      }
    },
    // No need for useminPrepareIonic

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/public/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/public/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/public/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>/public',
          '<%= yeoman.dist %>/public/assets/images'
        ],
        // This is so we update image references in our ng-templates
        patterns: {
          js: [
            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      }
    },
    // No need for useminIonic

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        // Include common
        files: [{
          expand: true,
          cwd: '<%= yeoman.clientWebapp %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/public/assets/images'
        }]
      }
    },
    // No need for imageminIonic

    svgmin: {
      dist: {
        // Include common
        files: [{
          expand: true,
          cwd: '<%= yeoman.clientWebapp %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/public/assets/images'
        }]
      }
    },
    // No need for svgminIonic

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat',
          src: '*/**.js',
          dest: '.tmp/concat'
        }]
      }
    },
    // No need for ngAnnotateIonic (as we are not minifying Ionic files for now...)

    // Package all the html partials into a single javascript payload
    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module: 'starterApp',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        usemin: 'app/app.js'
      },
      // TODO: Include common here (i.e. in cwd) - required for build task to work properly
      main: {
        cwd: '<%= yeoman.clientDesktop %>',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/templates.js'
      },
      tmp: {
        cwd: '.tmp',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/tmp-templates.js'
      }
    },
    // TODO (Future): Do ngtemplates (grunt-angular-templates) for Ionic as well

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/public/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        // TODO: Include common here (i.e. in cwd)
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.clientDesktop %>',
          dest: '<%= yeoman.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'assets/images/{,*/}*.{webp}',
            'assets/fonts/**/*',
            'index.html'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/public/assets/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= yeoman.dist %>',
          src: [
            'package.json',
            'server/**/*'
          ]
        }]
      },
      // TODO: Include common here
      // TODO: Not sure if styles target is used anywhere?
      styles: {
        expand: true,
        cwd: '<%= yeoman.clientDesktop %>',
        dest: '.tmp/',
        src: ['{app,components}/**/*.css']
      },
      // Ionic
      ionicCommonFromTmp: {
        cwd: '.tmp',
        src: 'common.css',
        dest: 'dist-ionic/www/css',
        expand: true
      },
      ionicWwwFromClient: {
        cwd: '<%= yeoman.clientIonic %>/www',
        src: '**/*',
        dest: 'dist-ionic/www',
        expand: true
      }
    },

    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        connectCommits: false,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      heroku: {
        options: {
          remote: 'heroku',
          branch: 'master'
        }
      },
      openshift: {
        options: {
          remote: 'openshift',
          branch: 'master'
        }
      }
    },
    // No ionic stuff here

    // Run some tasks in parallel to speed up the build process
    // TODO: Add the relevant ionic tasks in here aswell
    concurrent: {
      server: [
        'jade',
        'sass',
      ],
      test: [
        'jade',
        'sass',
      ],
      debug: {
        tasks: [
          'nodemon',
          'node-inspector'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      dist: [
        'jade',
        'sass',
        'imagemin',
        'svgmin'
      ],

      copyToIonicDist: [
        'copy:ionicCommonFromTmp',
        'copy:ionicWwwFromClient'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['server/**/*.spec.js']
    },

    protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },

    env: {
      test: {
        NODE_ENV: 'test'
      },
      prod: {
        NODE_ENV: 'production'
      },
      all: localConfig
    },

    // Compiles Jade to html
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        // TODO: Include common
        files: [{
          expand: true,
          cwd: '<%= yeoman.clientWebapp %>',
          src: [
            '{app,components}/**/*.jade'
          ],
          dest: '.tmp',
          ext: '.html'
        }]
      }
    },
    // TODO: jadeIonic

    // Compiles Sass to CSS
    sass: {
      common: {
        options: {
          loadPath: [
            '<%= yeoman.clientCommon %>',
          ],
          compass: false
        },
        files: {
          '.tmp/common.css' : '<%= yeoman.clientCommon %>/auto.scss'
        }
      },
      webapp: {
        options: {
          loadPath: [
            '<%= yeoman.clientBower %>',
            '<%= yeoman.clientWebapp %>/app',
            '<%= yeoman.clientWebapp %>/components'
          ],
          compass: false
        },
        files: {
          '.tmp/app/app.css' : '<%= yeoman.clientWebapp %>/app/app.scss'
        }
      },
      ionic: {
        options: {
          loadPath: [
            '<%= yeoman.clientIonic %>/scss'
            // TODO: Add components
          ],
          compass: false
        },
        files: {
          'dist-ionic/www/css/ionic.app.css' : '<%= yeoman.clientIonic %>/scss/ionic.app.scss'
        }
      }
      // TODO: ionic
    },

    injector: {
      options: {

      },
      // Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= yeoman.clientWebapp %>/index.html': [
              // TODO: Include common
              [
               '{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.js',
               '!{.tmp,<%= yeoman.clientWebapp %>}/app/app.js',
               '!{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.spec.js',
               '!{.tmp,<%= yeoman.clientWebapp %>}/{app,components}/**/*.mock.js']
            ]
          // TODO: Do this for ionic??
        }
      },

      // Inject component scss into app.scss
      sass: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/webapp/app/', '');
            filePath = filePath.replace('/client/webapp/components/', '');
            // TODO: Include common
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector',
          endtag: '// endinjector'
        },
        // TODO: Include common
        files: {
          '<%= yeoman.clientWebapp %>/app/app.scss': [
            '<%= yeoman.clientWebapp %>/{app,components}/**/*.{scss,sass}',
            '!<%= yeoman.clientWebapp %>/app/app.{scss,sass}'
          ]
        }
      },
      sassCommon: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/common/components/', '');
            // TODO: Include common
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector',
          endtag: '// endinjector'
        },
        // TODO: Include common
        files: {
          '<%= yeoman.clientCommon %>/auto.scss': [
            '<%= yeoman.clientCommon %>/components/**/*.{scss,sass}',
            '!<%= yeoman.clientCommon %>/auto.{scss,sass}'
          ]
        }
      },
      // TODO: add sassIonic

      // Inject component css into index.html
      css: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/webapp/', '');

            filePath = filePath.replace('/.tmp/', '');
            return '<link rel="stylesheet" href="' + filePath + '">';
          },
          starttag: '<!-- injector:css -->',
          endtag: '<!-- endinjector -->'
        },
        // TODO: Include common
        files: {
          '<%= yeoman.clientWebapp %>/index.html': [
            '<%= yeoman.clientWebapp %>/{app,components}/**/*.css'
          ]
        }
      }
      // TODO: add cssIonic

    },
  });


  // grunt.loadNpmTasks('grunt-debug-task');  // To debug in node-inspector


  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  // TODO: Add 'concurrent:copyToIonicDist' to all grunt tasks where needed (currently working in grunt serve)

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'env:all', 'env:prod', 'express:prod', 'wait', 'open', 'express-keepalive']);
    }

    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'injector:sass', 
        'concurrent:server',
        'concurrent:copyToIonicDist',
        'injector',
        'wiredep',
        'autoprefixer',
        'concurrent:debug'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'env:all',
      'injector:sass', 
      'concurrent:server',
      'concurrent:copyToIonicDist',
      'injector',
      'wiredep',
      'autoprefixer',
      'express:dev',
      'wait',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', function(target) {
    if (target === 'server') {
      return grunt.task.run([
        'env:all',
        'env:test',
        'mochaTest'
      ]);
    }

    else if (target === 'client') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'injector:sass', 
        'concurrent:test',
        'injector',
        'autoprefixer',
        'karma'
      ]);
    }

    else if (target === 'e2e') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'env:test',
        'injector:sass', 
        'concurrent:test',
        'injector',
        'wiredep',
        'autoprefixer',
        'express:dev',
        'protractor'
      ]);
    }

    else grunt.task.run([
      'test:server',
      'test:client'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'injector:sass', 
    'concurrent:dist',
    'injector',
    'wiredep',
    'useminPrepare',
    'autoprefixer',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
