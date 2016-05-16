#!/usr/bin/env node

var program = require('commander');
var page = require('./lib/page');
var directive = require('./lib/directive');

program
	.command('page <page_name>')
	.description('create .jade, .styl, and .js files for a new page')
	.action(function(name){
		if(!name){
			program.outputHelp();
		}
		else{
			page.generate(name);
		}
	});

program
	.command('directive <directive_name>')
	.description('create .jade, .styl, and .js files for a new directive')
	.option("-s, --slim", "Only creates the .js file")
	.action(function(name){
		if(!name){
			program.outputHelp();
		}
		else{
			directive.generate(name, options);
		}
	});

program.parse(process.argv);
