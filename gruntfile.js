module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      auto_install: {
    local: {},
    subdir: {
      options: {
        cwd: 'subdir',
        stdout: true,
        stderr: true,
        failOnError: true,
        npm: '--production'
      }
    }
  },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Load the plugin for link checking
  grunt.loadNpmTasks('grunt-link-checker');

};