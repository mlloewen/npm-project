var Imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');

new Imagemin()
    .src('images/*.{gif,jpg,png,svg}')
    .dest('build/images')
    .use(imageminMozjpeg({quality: 75}));
    .run(function (err, files) {
        console.log(files[0]);
        // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
    });
