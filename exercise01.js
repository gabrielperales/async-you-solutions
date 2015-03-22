var http = require('http'),
  fs = require('fs'),
  async = require('async');

async.waterfall([
    function(cb) {
      fs.readFile(process.argv[2], 'utf-8', function (err, data) {
        if (err) cb(err);
        cb(null, data);
      });
    },
    function(url, cb) {
      var body = '';
      http.get(url, function (res) {
        res.on('data', function(chunk) {
          body += chunk;
        });

        res.on('end', function() {
          cb(null, body);
        });
      });
    }
  ], function(err, result) {
  if (err) return console.log(err);
  console.log(result);
});
