#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var changeCase = require('change-case');
var async = require('async');
var dir = '';
var fileName = '';

module.exports = {
  generate: generate
};

function generate(name){

  // Change 'Page Name' to page-name
  fileName = changeCase.param(name);

  // Get the path of the current directory (should be project root) and map to destination path
  dir = path.join(process.cwd(), 'core/client/app/pages', fileName);

  // Create the directory in core/client/app/pages
  mkdirp(dir, createFiles);
}

function createFiles(err){
  if(err){
    console.log(err);
    return;
  }

  // Read all files in the template directory
  fs.readdir(path.join(__dirname, '/templates/'), copyTemplates);
}

// Callback for fs.readdir
function copyTemplates(err, templates){

  if(err){
    console.log(err);
    return;
  }

  // Read the contents of each template file and then write to our new files
  async.each(templates, function(template, callback) {

    fs.readFile(path.join(__dirname,'/templates/', template), 'utf-8', function(err, content){
      writeFile(err, content, template, callback);
    });

  }, templateErrors);
}

function writeFile(err, content, template, callback){

  var extension = path.extname(template);

  var newFile = path.join(dir, fileName + extension);

  console.log('Create ' + fileName + extension);

  if(err){
    console.log(err);
    return;
  }

  // Regex replace of the controller name
  if(template == 'controller-template.js') {
    var controllerName = changeCase.pascalCase(fileName) + 'Ctrl';
    content = content.replace('TemplateCtrl', controllerName);
  }

  fs.writeFile(newFile, content , function(err){
    if(err) {
      callback(err);// calls templateErrors with the error
    }
    else{
      callback()
    }
  });
}

//Callback for async.each
function templateErrors(err){
  // if any of the file processing from the async.each produced an error
  if(err) {
    console.log('An error occurred creating one of the files');
    console.log(err);
  }
};







