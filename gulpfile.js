var gulp = require('gulp'),
iconfont = require('gulp-iconfont'),
// consolidate = require('gulp-consolidate'),
iconfontCss	 = require('gulp-iconfont-css'),
iconfontTemplate = require('gulp-iconfont-template');

var fontName = 'aw-icons';

gulp.task('iconfont', function(){
    gulp.src(['svg/**/*.svg'])
    .pipe(iconfontTemplate({
      fontName: fontName,
      path: '',
      targetPath: 'template.html',
      cssClass: 'aw-icon'
    }))
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'css',
      targetPath: 'aw-icons.css',
      fontPath: '',
      cssClass: 'aw-icon'
    }))
    .pipe(iconfont({
    fontName: fontName,
    normalize: true,
    fontHeight: 1001
    }))
    .pipe(gulp.dest('fonts/'));
});

// gulp.task('iconfont', function(done){
//   var iconStream = gulp.src(['svg/*.svg'])
//   .pipe(iconfont({
//     fontName: fontName,
//     formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
//     normalize: true,
//     fontHeight: 1001
//   }))
//   .on('glyphs', (glyphs) => {
//       const options = {
//         className,
//         fontName,
//         fontPath: '../fonts/', // set path to font (from your CSS file if relative)
//         glyphs: glyphs.map(mapGlyphs)
//       }
//       gulp.src(`fonts/templates/${template}.css`)
//         .pipe(consolidate('lodash', options))
//         // .pipe(rename({ basename: fontName }))
//         .pipe(gulp.dest('dist/css/')) // set path to export your CSS
//
//       // if you don't need sample.html, remove next 4 lines
//     //   gulp.src(`templates/${template}.html`)
//     //     .pipe(consolidate('lodash', options))
//     //     .pipe(rename({ basename: 'sample' }))
//     //     .pipe(gulp.dest('dist/')) // set path to export your sample HTML
//     })
//     .pipe(gulp.dest('dist/fonts/')) // set path to export your fonts
// });

  // async.parallel([
  //   function handleGlyphs (cb) {
  //     iconStream.on('glyphs', function(glyphs, options) {
  //       gulp.src('fonts/templates/icontemplate.css')
  //       .pipe(consolidate('lodash', {
  //         glyphs: glyphs,
  //         fontName: font_name,
  //         fontPath: '.',
  //         className: 'aw-icon'
  //       }))
  //       .pipe(gulp.dest('fonts'))
  //       .on('finish', cb);
  //     });
  //   },
  //   function handleFonts (cb) {
  //     iconStream
  //     .pipe(gulp.dest('fonts/'))
  //     .on('finish', cb);
  //   }
  // ], done);
// });

//
// function mapGlyphs (glyph) {
//   return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase() }
// }

gulp.task('default', ['iconfont']);
