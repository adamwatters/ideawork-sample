module.exports = (grunt) => {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', { presets: ['es2015', 'react'] }],
          ],
        },
        files: {
          './main.js': ['./src/js/index.js'],
        },
      },
    },
    sass: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          './main.css': './src/scss/index.scss',
        },
      },
    },
    watch: {
      js: {
        files: ['./src/js/*.js'],
        tasks: ['browserify'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'sass', 'watch']);
  grunt.registerTask('build', ['browserify', 'sass']);
};
