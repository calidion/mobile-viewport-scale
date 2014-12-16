module.exports = function (grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          optimize: 'uglify',
          rawText: {},
          preserveLicenseComments: false,
          name: 'lib/index',
          skipModuleInsertion: true,
          skipSemiColonInsertion: true,
          out: "dist/<%= pkg.name %>.min.js",
          findNestedDependencies: true
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);

};