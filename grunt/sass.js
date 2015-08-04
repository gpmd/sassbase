module.exports = {

  // Development settings
  dev: {
    options: {
      outputStyle: 'expanded',
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
      outputStyle: 'expanded',
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
