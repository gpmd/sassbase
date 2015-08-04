module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    jitGrunt: {
      staticMappings: {
        scsslint: 'grunt-scss-lint'
      }
    },

    init: true,

    data: {

      project: {
        src: 'src',
        dist: 'dist'
      }
    }
  });
};
