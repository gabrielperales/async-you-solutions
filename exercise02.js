var async = require('async'),
  http = require('http');

var urls = process.argv.slice(2,4);

async.series({
  requestOne: function (done) {
    http.get(urls[0], function (req) {
      var body = '';
      req.on('data', function (chunk) {
        body += chunk;
      });

      req.on('end', function () {
        done(null, body);
      });
    });
  },
  requestTwo: function (done) {
    http.get(urls[1], function (req) {
      var body = '';
      req.on('data', function(chunk) {
        body += chunk;
      });

      req.on('end', function() {
        done(null, body);
      });
    });
  }
},
function(err, results){
  console.log(results);
});
