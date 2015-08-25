/**
 * Created by CI7512 on 2015/8/24.
 */
var sImg = new Image();
sImg.src = './dd.png';

var leftImage = new Image();
leftImage.src = './dd_left.png';

var rightImage = new Image();
rightImage.src = './dd_right.png';

var timer = null;

var oGC = document.getElementById("#oGC");

sImg.onload = function () {
    oGC.drawImage(sImg, 0, 0);
};

function liquify(imgData, cx, cy, mx, my, r) {
    var imgDataBuff = copyImageDataBuff(imgData);
    eachCircleDot(imgData, cx, cy, r, function (posi) {
            var tx = posi.x,
                ty = posi.y;
            var u = transFormula(cx, cy, mx, my, tx, ty, r);
            moveDot(imgData, imgDataBuff, posi, u);
            function transFormula(cx, cy, mx, my, tx, ty, r) {
                var relativity = sqr(r) - distanceSqr(tx, ty, cx, cy);
                var distanceMovedSqr = distanceSqr(mx, my, cx, cy);

                var rate = sqr(relativity / (relativity + distanceMovedSqr));
                var ux = (tx - rate * (mx - cx)),
                    uy = (ty - rate * (my - cy));
                return {
                    x: ux,
                    y: uy
                }
            }
        }
    );
    return imgData;
}

function copyImageDataBuff(imgData) {
    var data = imgData.data,
        imgDataBuff = [];
    for (var i in data) {
        imgDataBuff[i] = data[i];
    }

    return imgDataBuff;
}

function eachCircleDot(imageData, ox, oy, r, callback) {
    var imgWidth = imageData.width,
        imgHeight = imageData.height,
        data = imageData.data,
        left = ox - r,
        right = ox + r,
        top = oy - r,
        bottom = oy + r;

    for (var x = left; x < right; x++) {
        for (var y = top; y < bottom; y++) {
            if (distanceSqr(x, y, ox, oy) <= sqr(r)) {
                callback({
                    x: x,
                    y: y
                });
            }
        }
    }
}

function distanceSqr(x1, y1, x2, y2) {
    return sqr(x1 - x2) + sqr(y1 - y2);
}

function sqr(x) {
    return x * x;
}

function moveDot(imgData, dataBuff, posi, u) {
    var imgWidth = imgData.width,
        imgHeight = imgData.height,
        data = imgData.data;

    u.x = Math.floor(u.x);
    u.y = Math.floor(u.y);

    data[(posi.y * imgWidth + posi.x) * 4] = dataBuff[(u.y * imgWidth + u.x) * 4];
    data[(posi.y * imgWidth + posi.x) * 4 + 1] = dataBuff[(u.y * imgWidth + u.x) * 4 + 1];
    data[(posi.y * imgWidth + posi.x) * 4 + 2] = dataBuff[(u.y * imgWidth + u.x) * 4 + 2];
    data[(posi.y * imgWidth + posi.x) * 4 + 3] = dataBuff[(u.y * imgWidth + u.x) * 4 + 3];
}


var sX = 5;
var sY = 5;
var iX = -200;
var x = -10;
var iY = ev.clientY - oC.offsetTop;

if (iY > 296) {
    iY = 200;
    y = 10;
} else {
    iY = -200;
    y = -10;
}

timer = setInterval(function () {
    oGC.drawImage(leftImage, 0, 0);

    var d = oGC.getImageData(23, 140, 140, 200);

    var c = liquify(d, 60, 170, sX + 65, sY + 170, 58);

    oGC.putImageData(c, 23, 140);

    sX = sX + x;
    sY = sY + y;

    if (Math.abs(sX) > Math.abs(iX) || Math.abs(sY) > Math.abs(iY)) {
        clearInterval(timer);
    }
}, 30);
