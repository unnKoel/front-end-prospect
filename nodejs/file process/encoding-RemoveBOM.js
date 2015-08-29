/**
 * Created by unnKoel on 2015/8/29.
 */

/**
 * Bytes        Encoding
 * -------------------------
 * FE FF        UTF16BE
 * FF FE        UTF16LE
 * EF BB BF     UTF8
 *
 * @param pathname
 * @returns {string|*}
 */
function readText(pathname) {
    var bin = fs.readFileSync(pathname);

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3);
    }
    return bin.toString('utf-8');
}