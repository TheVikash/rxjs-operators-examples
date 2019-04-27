//skip
// ignore the first nth emits

const { of } = require('rxjs');
const { skip } = require('rxjs/operators');

of(1, 2, 3)
  .pipe(skip(2))
  .subscribe(x => console.log(x));

//output
3;
