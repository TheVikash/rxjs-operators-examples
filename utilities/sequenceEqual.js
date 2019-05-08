// sequenceEqual
// compare values from the two different sources
// return true if values pair matches

const { of } = require('rxjs');
const { sequenceEqual, delay, tap } = require('rxjs/operators');

console.log('# two identical sequence');

of(1, 2, 3)
  .pipe(sequenceEqual(of(1, 2, 3)))
  .subscribe(val => console.log(val));

// output
// true

console.log('\n\n# two different sequence');

of(1, 4, 3)
  .pipe(sequenceEqual(of(1, 2, 3)))
  .subscribe(val => console.log(val));

// output
// false

console.log('\n\n# same value but delayed');

of(1, 2, 3)
  .pipe(
    tap(x => console.log(`source : ${x}`)),
    sequenceEqual(
      of(1, 2, 3).pipe(
        tap(x => console.log(`internal : ${x} `)),
        delay(1000)
      )
    )
  )
  .subscribe(val => console.log(val));

// output
// true
