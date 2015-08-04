module.exports = {

  // Task options
  options: {
    limit: 3
  },

  // Dev tasks
  devFirst: [
    'clean:dist',
    'scsslint'
  ],
  devSecond: [
    'sass:dev'
  ],
  devThird: [
    'autoprefixer'
  ],
  devFourth: [
    'stylestats:dev'
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
