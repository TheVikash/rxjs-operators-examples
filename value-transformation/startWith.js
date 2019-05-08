// endWith
// append values to the end of the sequence

const { of } = require('rxjs');
const { startWith } = require('rxjs/operators');

console.log('# append weekends at the end of the working days');

const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const weekends = ['Saturday', 'Sunday'];

of(...weekends)
  .pipe(startWith(...workingDays))
  .subscribe(val => console.log(val));

// Output
// # append weekends at the end of the working days
// Monday
// Tuesday
// Wednesday
// Thursdayst
// Friday
// Saturday
// Sunday
