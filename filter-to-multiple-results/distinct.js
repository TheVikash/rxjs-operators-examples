// distinct
// emit unique values across whole source

const { of } = require('rxjs');
const { distinct } = require('rxjs/operators');

console.log('# select unique value within source ');

of(1, 2, 3, 3, 2, 1)
  .pipe(distinct())
  .subscribe(val => console.log(val));

//output
// # select unique value within source
// 1
// 2
// 3

console.log('--------------------------');
console.log('# select source unique function as determined by function');

of(1, -1, 2, 3, 2)
  .pipe(distinct(x => Math.abs(x)))
  .subscribe(val => console.log(val));

// output
// # select source unique function as determined by function
// 1
// 2
// 3

console.log('------------------------');
console.log('# select distinct objects based on properties');
console.log('see also distinctUntilKeyChanged');

const data = [
  { name: 'Michael', isAuthor: true },
  { name: 'Ben', isAuthor: false },
  { name: 'Ben', isAuthor: true }
];

of(...data)
  .pipe(distinct(x => x.name))
  .subscribe(val => console.log(val));
