module.exports = {

    // Task options
    options: {
        limit: 3
    },

    // Dev tasks
    devFirst: [
        'clean'
    ],
    devSecond: [
        'sass:dev'
    ],

    // Production tasks
    prodFirst: [
        'clean'
    ],
    prodSecond: [
        'sass:prod'
    ],

    // Sassdoc tasks
    sassDocFirst: [
        'sassdoc'
    ]
};
