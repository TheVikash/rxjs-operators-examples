// max
// find the max value within the stream
// the definition of bigger can be determined through comparator function

const { of } = require('rxjs');
const { max } = require('rxjs/operators');

console.log('#max is : ');
of(1, 4, 6, 3, 8, 2, 3)
  .pipe(max())
  .subscribe(val => console.log(val));

// Output
// #max is :
// 8

const employees = [
  { name: 'Alice', salary: 1000 },
  { name: 'Milli', salary: 3000 },
  { name: 'Monica', salary: 500 }
];

console.log('#finding max using comparator function');
console.log('# employee with highest salary is : ');
of(...employees)
  .pipe(max((x, y) => (x.salary > y.salary ? 1 : -1)))
  .subscribe(val => console.log(val));
