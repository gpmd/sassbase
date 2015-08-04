module.exports = {

  main: [
    '<%= project.src %>/styles/**/*.scss'
  ],

  options: {
    colorizeOutput: true,
    config: '.scsslint.yaml',
    compact: true,
    force: true
  }
};
