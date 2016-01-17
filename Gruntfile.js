module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({

    copy: {
      build: {
        cwd: 'app',
        src: [ '**/*.js', '**/*.css', '**/*.html' ],
        dest: 'build',
        expand: true
      }
    },

    clean: {
      build: {
        src: [ 'build' ]
      }
    },

    coffee: {
      build: {
        expand: true,
        cwd: 'src',
        src: [ '**/*.coffee' ],
        dest: 'src',
        ext: '.js'
        }
    },

    watch: {
      scripts: {
        files: 'src/main/resources/assets/**/*.coffee',
        tasks: [ 'scripts' ]
      }
    }

  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.',
    [ 'coffee' ]
  );
};