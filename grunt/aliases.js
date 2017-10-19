module.exports = {
  'start': ["pug:dist", "sass", "imagemin", "copy"],
  'default': ["start", "browserSync", "watch"]
};
