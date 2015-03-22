var http = require('http'),
  async = require('async');


var url = process.argv[2];
var numbers = ['one', 'two', 'three'];

async.reduce(numbers, 0, function(memo, item, callback){
  var body = '';
  http.get(url+'/?number='+item,
  function(res){
    res.on('data', function (chunk) {
      body = body + chunk;
    });

    res.on('end', function() {
      callback(null, memo + parseInt(body));
    });
  });
}, function(err, result){
  console.log(result);
});
