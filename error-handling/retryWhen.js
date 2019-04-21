// retryWhen

const { interval } = require('rxjs');
const { retryWhen, map, scan, takeWhile, tap } = require('rxjs/operators');

let swallowError = false;
interval(200)
  .pipe(
    map(x => {
      console.log('attempting: ' + x);
      if (x === 1) {
        throw 'error processing: ' + x;
      }
      return x;
    }),
    retryWhen(error => {
      if (swallowError) {
        return error.pipe(
          tap(err => console.log(err)),
          scan(acc => acc + 1, 0),
          tap(retryCount => {
            if (retryCount === 2) {
              console.log('swallowing error and completing');
            } else {
              console.log('Retrying whole source - retry # ' + retryCount);
            }
            return retryCount;
          }),
          takeWhile(errCount => errCount < 2)
        );
      } else {
        return error.pipe(
          tap(err => console.log(err)),
          scan(acc => acc + 1, 0),
          tap(retryWhen => {
            if (retryWhen === 2) {
              console.log('Failing');
              throw 'oops';
            } else {
              console.log('Retrying whole source ');
            }
          })
        );
      }
    })
  )
  .subscribe(
    x => console.log(x),
    err => console.log('***error : ' + err),
    () => 'completed successfully'
  );
