var Imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');

new Imagemin()
    .src('images/*.{gif,jpg,png,svg,JPG}')
    .dest('dist/images')
    .use(imageminMozjpeg({quality: 75}))
    .run();
