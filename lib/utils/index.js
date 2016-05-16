var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = {
  createDir: createDir,
  writeFile: writeFile
};

function createDir(dir, callback) {
  mkdirp(dir, function (err) {
    if (err) {
      console.log(err);
    }

    callback(err);
  });
}

function writeFile(dir, content, fileName, callback){

  var newFile = path.join(dir, fileName);

  console.log('Create ' + newFile);

  fs.writeFile(newFile, content , function(err){
    callback(err)
  });
}