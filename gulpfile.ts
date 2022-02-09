import { series } from 'gulp';

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean (cb: any) {
  // body omitted
  console.log('clean');
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
export function build (cb: any) {
  // body omitted
  console.log('build');
  cb();
}

export default series(clean, build);
