module.exports = {

  // Development settings
  dev: {
    options: {
      outputStyle: 'nested',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>/styles',
      src: ['*.scss'],
      dest: '<%= project.dist %>/styles',
      ext: '.css'
    }]
  },

  // Production settings
  prod: {
    options: {
      outputStyle: 'nested',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>/styles',
      src: ['*.scss'],
      dest: '<%= project.dist %>/styles',
      ext: '.css'
    }]
  }
};
