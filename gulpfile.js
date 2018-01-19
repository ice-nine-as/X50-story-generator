const gulp           = require('gulp');
const { mkdir, }     = require('fs');
const { promisify, } = require('util');
const { resolve, }   = require('path');
const rimraf         = require('rimraf');

gulp.task('clean', async () => {
  const _rimraf = promisify(rimraf);
  const _mkdir  = promisify(mkdir);
  await _rimraf(resolve(__dirname, 'dist/es5/'));
  await _rimraf(resolve(__dirname, 'dist/esnext/'));
  await _mkdir(resolve(__dirname, 'dist/es5/'));
  await _mkdir(resolve(__dirname, 'dist/esnext/'));
});