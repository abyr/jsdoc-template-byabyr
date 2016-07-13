/*global module*/
module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'templates/**/*.js',
                '!code_samples/**/*.js',
                '!templates/byabyr/static/bower_components/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jsdoc: {
            dist : {
                src: [
                    'code_samples/**/*.js',
                    'templates/**/*.js',
                    '!templates/byabyr/static/bower_components/**/*.js'
                ],
                options: {
                    template: 'templates/byabyr',
                    destination: 'doc'
                }
            }
        }
    });

    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) {
            grunt.loadNpmTasks(key);
        }
    }

    grunt.registerTask('default', ['jsdoc']);
};
