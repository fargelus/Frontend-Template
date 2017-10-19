module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src/scss',
      src: ['**/*.scss'],
      dest: 'build/css',
      ext: '.css'
    }]
  }
};
