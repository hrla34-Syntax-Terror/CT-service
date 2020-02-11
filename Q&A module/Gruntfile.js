const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      prod: webpackConfig,
      dev: Object.assign({watch: true}, webpackConfig)
    },
    run: {
      npm_seed: {
        cmd: 'npm',
        args: [
          'run',
          'seed'
        ]
      },
      npm_start: {
        cmd: 'npm',
        args: [
          'start'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack:prod', 'run']);
};