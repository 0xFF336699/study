```js
var iconv = require('iconv-lite');
var encoding = 'cp936';
var binaryEncoding = 'binary';

const process = require('child_process');
var ls = process.spawn('F:\\work\\ig\\crawlers\\node-user\\temps\\test.bat', ['t']);
ls.stdout.on('data', function (data) {
    console.log(data.toString('utf8'));
});
ls.stderr.on('data', function (data) {
    // console.log(data.toString('utf8'));
    console.log(iconv.decode(new Buffer(data, 'binary'), encoding));
});
ls.on('close', function (code) {
    if (code == 0)
        console.log('Stop');
    else
        console.log('Start');
});
```