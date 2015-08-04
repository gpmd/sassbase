module.exports = {

  // Task options
  options: {
    limit: 3
  },

  // Dev tasks
  devFirst: [
    'clean:dist'
  ],
  devSecond: [
    'sass:dev'
  ],
  devThird: [
    'autoprefixer'
  ],

  // Production tasks
  prodFirst: [
    'clean:dist'
  ],
  prodSecond: [
    'sass:prod'
  ],
  prodThird: [
    'autoprefixer'
  ],
  prodFourth: [
    'cssmin'
  ]
};
