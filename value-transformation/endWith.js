// endWith
// append values to the end of the sequence

const { of } = require('rxjs');
const { endWith } = require('rxjs/operators');

console.log('# append weekends at the end of the working days');

const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const weekends = ['Saturday', 'Sunday'];

of(...workingDays)
  .pipe(endWith(...weekends))
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
