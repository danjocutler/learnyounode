// var fs = require('fs')
// var path = require('path')
// var extension = path.extname(list);

// fs.readdir(process.argv[2], function(err, list){
// 	console.log(extension)
// })

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
