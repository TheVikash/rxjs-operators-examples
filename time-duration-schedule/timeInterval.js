// timeInterval
// Record the interval between the values
// The first interval is from the time the subscription starts
// to the time the first value is emitted

const { Observable } = require('rxjs');
const { timeInterval } = require('rxjs/operators');

const source = Observable.create(observer => {
  setTimeout(() => observer.next('A'), 100);
  setTimeout(() => observer.next('B'), 300);
  setTimeout(() => observer.next('C'), 600);
});

source.pipe(timeInterval()).subscribe(val => console.log(val));

// Output
// TimeInterval { value: 'A', interval: 102 }
// TimeInterval { value: 'B', interval: 199 }
// TimeInterval { value: 'C', interval: 300 }
