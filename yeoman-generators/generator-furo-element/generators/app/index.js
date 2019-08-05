'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelCase = require('camelcase');

module.exports = class extends Generator {

  initializing() {
    // Yeoman replaces dashes with spaces. We want dashes.
    this.appname = this.appname.replace(/\s+/g, '-');
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the super ${chalk.red('generator-furo-element')} generator!`)
    );

    const prompts = [
      {
        name: 'packageName',
        type: 'input',
        message: 'Name of the npm package',
        default: this.appname
      },
      {
        name: 'componentName',
        type: 'input',
        message: 'Name of the component, like my-component',
        default: this.appname
      },
      {
        name: 'packageDescription',
        type: 'input',
        message: 'Brief description of the package'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.className = camelCase(this.props.componentName, {pascalCase: true})
    });
  }

  writing() {
    const fileList = ["polymer.json", ".gitignore", ".npmignore", "wct.conf.json"];
    fileList.forEach((fileName) => {
      this.fs.copy(
        this.templatePath(fileName),
        this.destinationPath(fileName)
      );
    });

    const tplList = ["index.html","furo-catalog.js","README.md",  "package.json","demo/demos.js", "test/index.html"];

    tplList.forEach((tpl)=>{
      this.fs.copyTpl(
        this.templatePath(tpl),
        this.destinationPath(tpl),
        this.props
      );
    });

    this.fs.copyTpl(
      this.templatePath("demo/_demo-component-name.js"),
      this.destinationPath("demo/demo-"+ this.props.componentName + ".js"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("test/_component-name_test.html"),
      this.destinationPath("test/"+ this.props.componentName + "_test.html"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("_component-name.js"),
      this.destinationPath(this.props.componentName + ".js"),
      this.props
    );
  }

  install() {
    this.installDependencies({bower:false});
  }
};
