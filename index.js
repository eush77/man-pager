'use strict';

var through = require('through2');

var spawn = require('child_process').spawn,
    tmpdir = require('os').tmpdir(),
    path = require('path'),
    fs = require('fs');


module.exports = function () {
  var filename = path.join(tmpdir, String(Date.now()));
  var troff = through();

  troff.pipe(fs.createWriteStream(filename))
    .on('finish', function () {
      spawn('man', [filename], { stdio: ['ignore', 1, 2] });
    });

  return troff;
};
