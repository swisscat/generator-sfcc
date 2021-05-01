'use strict';

const { statSync, readdirSync } = require('fs');
const { join, sep } = require('path');
const Generator = require('yeoman-generator');

const isDirectory = path => statSync(path).isDirectory();
const getDirectories = path =>
    readdirSync(path).map(name => join(path, name)).filter(isDirectory);

const isFile = path => statSync(path).isFile();  
const getFiles = path =>
    readdirSync(path).map(name => join(path, name)).filter(isFile);

const getFilesRecursively = (path) => {
    let dirs = getDirectories(path);
    let files = dirs
        .map(dir => getFilesRecursively(dir))
        .reduce((a,b) => a.concat(b), []);
    return files.concat(getFiles(path));
};

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('cartridgeName', { type: String, required: true });

        this.log('Creating a new cartridge `' + this.options.cartridgeName + '`');
    }

    initializing() {
        this.spawnCommandSync('git', ['init', '--quiet']);
    }

    writing() {
        const src = this.sourceRoot();
        const cartridgeName = this.options.cartridgeName;
        let that = this;

        getFilesRecursively(src).forEach(function (file) {
            let relativeFile = file.replace(src + sep, '');

            let newFile = relativeFile.split('cartridgeName').join(cartridgeName);

            that.fs.copyTpl(that.templatePath(relativeFile), that.destinationPath(newFile), { cartridgeName });
        })
    }

    install () {
        this.spawnCommandSync('npm', ['install']);
    }
};
