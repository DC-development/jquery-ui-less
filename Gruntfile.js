module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.config.init({
        less: {
            dist: {
                options: {
                    compress: true
                },
                files: [
                    {expand: true, dest: 'demo', src: 'demo.less', ext: '.css'},
                ]
            }
        }
    });

    grunt.task.registerTask('default',  ['less']);
};