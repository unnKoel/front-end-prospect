/**
 * Created by unnKoel on 2015/8/29.
 */
/**
 * 字符编码转换
 * @type {exports}
 */
var iconv = require('iconv-lite');
var fs = require('fs');

function readGBKText(pathname) {
    var bin = fs.readFileSync(pathname);

    return iconv.decode(bin, 'gbk');
}

readGBKText(process.argv.slice(2)[0]);