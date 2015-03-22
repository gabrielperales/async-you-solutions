var http = require('http'),
  async = require('async');

var url = process.argv[2];
var count = 0;
var body = '';

async.whilst(
  function() {
    return !/meerkat/.test(body.trim());
  },
  function(callback){
    http.get(url, function (res) {
      res.on('data', function(chunk) {
        body = body + chunk;
      });

      res.on('end', function () {
        count = count + 1;
        callback(null);
      });
    }).on('error', callback);
  },
  function (err) {
    if (err) return console.log(err);
    console.log(count);
  }
);

