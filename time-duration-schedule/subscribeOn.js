// observerOn

const { of, asapScheduler, asyncScheduler } = require('rxjs');
const { subscribeOn, tap } = require('rxjs/operators');

of('asap')
  .pipe(
    tap(val => console.log(`${val} queued`)),
    subscribeOn(asapScheduler)
  )
  .subscribe(val => console.log(`values emitted : ${val}`));

of('async')
  .pipe(
    tap(val => console.log(`${val} queued`)),
    subscribeOn(asyncScheduler)
  )
  .subscribe(val => console.log(`values emitted : ${val}`));

of('immediate')
  .pipe(tap(val => console.log(`${val} queued`)))
  .subscribe(val => console.log(`values emitted : ${val}`));

// (without subscribeOn) Output
// asap queued
// values emitted : asap
// async queued
// values emitted : async
// immediate queued
// values emitted : immediate

// (with subscribeOn) Output
// immediate queued
// values emitted : immediate
// asap queued
// values emitted : asap
// async queued
// values emitted : async
