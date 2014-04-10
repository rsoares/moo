// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // The clean task ensures all files are removed from the dist/ directory so
    // that no files linger from previous builds.
    clean: ["dist/"],


    copy: {
      prod: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['dist/debug/*'],
            dest: '../static/dist/'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/css/scss/fonts/*'],
            dest: '../static/dist/fonts'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/images/*'],
            dest: '../static/dist/images'
          }
        ]
      },
      debug: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['dist/debug/index.css', 'dist/debug/*.js'],
            dest: '../static/dist/'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/css/scss/fonts/*'],
            dest: '../static/dist/fonts'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/images/*'],
            dest: '../static/dist/images'
          }
        ]
      }
    },

    // The jst task compiles all application templates into JavaScript
    // functions with the underscore.js template function from 1.2.4.  You can
    // change the namespace and the template options, by reading this:
    // https://github.com/gruntjs/grunt-contrib/blob/master/docs/jst.md
    //
    // The concat task depends on this file to exist, so if you decide to
    // remove this, ensure concat is updated accordingly.
    jst: {
      "dist/debug/templates.js": [
        "app/templates/**/*.html"
      ]
    },

    // The handlebars task compiles all application templates into JavaScript
    // functions using Handlebars templating engine.
    //
    // Since this task defaults to writing to the same file as the jst task,
    // edit the debug task replacing jst with handlebars.
    //
    // The concat task depends on this file to exist, so if you decide to
    // remove this, ensure concat is updated accordingly.
    handlebars: {
      "dist/debug/templates.js": ["app/templates/**/*.html"]
    },

    // The concatenate task is used here to merge the almond require/define
    // shim and the templates into the application code.  It's named
    // dist/debug/require.js, because we want to only load one script file in
    // index.html.
    concat: {
      css: {
        src: [
          "assets/vendor/*.css",
          "dist/debug/index.css"
        ],

        dest: "dist/debug/index.css",

        separator: "\n"
      },
      js: {
        src: [
          "assets/js/libs/require.js",
          "dist/debug/templates.js",
          "dist/debug/main-built.js"
        ],

        dest: "dist/debug/main-built.js",

        separator: ";"
      }
    },

    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          "dist/debug/index.css": "assets/css/scss/global.scss"
        }
      }
    },

    uglify: {
      options: { },
      my_target: {
        files: {
          'dist/prod/main-built.js' : [ 'dist/debug/main-built.js' ]
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          name: "app",
          mainConfigFile: "app/config.js",
          baseUrl: "app",
          out: "dist/debug/main-built.js",
          optimize: "none"
        }
      }
    },

    watch: {
      css: {
        files: [],
        tasks: [ "sass" ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
