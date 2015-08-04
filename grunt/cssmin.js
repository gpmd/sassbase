module.exports = {

  // Production settings
  main: {
    files: [
      {
        expand: true,
        cwd: '<%= project.dist %>/styles/',
        src: [
          '*.css'
        ],
        dest: '<%= project.dist %>/styles/',
        ext: '.css'
      }
    ]
  }
};
