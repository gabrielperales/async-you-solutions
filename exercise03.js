var async = require('async'),
  http = require('http');


var urls = process.argv.slice(1,3);

async.each(urls, function(item, done) {
  http.get(item).on('error',function(e) {
    done(e);
  });
},
function(err) {
  if (err) console.log(err);
});
