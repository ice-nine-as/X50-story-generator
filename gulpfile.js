const {
  exec,
} = require('child_process');
const gulp = require('gulp');
const gts = require('gulp-typescript');
const {
  mkdir,
} = require('fs');
const {
  promisify,
} = require('util');
const {
  resolve,
} = require('path');
const rimraf = require('rimraf');

gulp.task('clean-es5', async () => {
  const _rimraf = promisify(rimraf);
  const _mkdir  = promisify(mkdir);
  await _rimraf(resolve(__dirname, 'dist/es5/'));
  await _mkdir(resolve(__dirname, 'dist/es5/'));
});

gulp.task('clean-esnext', async () => {
  const _rimraf = promisify(rimraf);
  const _mkdir  = promisify(mkdir);
  await _rimraf(resolve(__dirname, 'dist/esnext/'));
  await _mkdir(resolve(__dirname, 'dist/esnext/'));
});

gulp.task('clean-all', async () => {
  const _rimraf = promisify(rimraf);
  const _mkdir  = promisify(mkdir);
  await _rimraf(resolve(__dirname, 'dist/es5/'));
  await _rimraf(resolve(__dirname, 'dist/esnext/'));
  await _mkdir(resolve(__dirname, 'dist/es5/'));
  await _mkdir(resolve(__dirname, 'dist/esnext/'));
});