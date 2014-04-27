module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "css/bootstrap-custom.css": "less/bootstrap-custom.less"
                }
            }
        },
        watch: {
            files: ["less/*"],
            tasks: ["less"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};