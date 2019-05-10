// pluck
// get a property of each value
// to use a nested field use an array of properties in proper order

const { of } = require('rxjs');
const { pluck } = require('rxjs/operators');

const friends = [
  { name: 'Bob', birthday: '01/02', address: { country: 'australia' } },
  { name: 'alice', birthday: '19/07', address: { country: 'usa' } },
  { name: 'Mark', birthday: '5/11', address: { country: 'germany' } }
];

console.log('# getting name of friends');

of(...friends)
  .pipe(pluck('name'))
  .subscribe(val => console.log(val));

// Output
// # getting name of friends
// Bob
// alice
// Mark

console.log('# getting name of countries from friends addresses');

of(...friends)
  .pipe(pluck('address', 'country'))
  .subscribe(val => console.log(val));

// Output
// # getting name of countries from friends addresses
// australia
// usa
// germany
