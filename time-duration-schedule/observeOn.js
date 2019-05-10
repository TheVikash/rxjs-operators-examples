// observerOn

const { of, asapScheduler, asyncScheduler } = require('rxjs');
const { observeOn, tap } = require('rxjs/operators');

of('asap')
  .pipe(
    tap(val => console.log(`${val} queued`)),
    observeOn(asapScheduler)
  )
  .subscribe(val => console.log(`values emitted : ${val}`));

of('async')
  .pipe(
    tap(val => console.log(`${val} queued`)),
    observeOn(asyncScheduler)
  )
  .subscribe(val => console.log(`values emitted : ${val}`));

of('immediate')
  .pipe(tap(val => console.log(`${val} queued`)))
  .subscribe(val => console.log(`values emitted : ${val}`));

// (without observeOn) Output
// asap queued
// values emitted : asap
// async queued
// values emitted : async
// immediate queued
// values emitted : immediate

// (with ObserveOn) Output
// asap queued
// async queued
// immediate queued
// values emitted : immediate
// values emitted : asap
// values emitted : async
