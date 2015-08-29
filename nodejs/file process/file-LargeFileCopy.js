/**
 * Created by unnKoel on 2015/8/29.
 */
var fs = require("fs");

function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
