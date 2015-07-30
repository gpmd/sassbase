module.exports = {

    // Production settings
    main: {
        files: [
            {
                expand: true,
                cwd: '<%= project.dist %>/styles/',
                src: ['*.css', '!*.min.css'],
                dest: '<%= project.dist %>/styles/',
                ext: '.min.css'
            }
        ]
    }
};
