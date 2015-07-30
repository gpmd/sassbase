module.exports = {

    options: {
        cascade: false
    },

    main: {
        expand: true,
        flatten: true,
        src: '<%= project.dist %>/styles/*.css',
        dest: '<%= project.dist %>/styles/'
    }
};
