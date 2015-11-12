module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config.init({
        less: {
            dist: {
                files: [
                    {expand: true, dest: 'demo', src: 'demo.less', ext: '.css'},
                ]
            }
        },
        watch: {
            less: {
                files: 'less/*.less',
                tasks: ['less'],
            },
        }
    });

    grunt.task.registerTask('default',  ['less']);
};