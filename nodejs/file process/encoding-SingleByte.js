/**
 * Created by unnKoel on 2015/8/29.
 */

/**
 * 单字节编码
 * @param pathname
 */
function replace(pathname) {
    var str = fs.readFileSync(pathname, 'binary');
    str = str.replace('foo', 'bar');
    fs.writeFileSync(pathname, str, 'binary');
}