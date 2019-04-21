// timeout
// The timeout is a number:
// Use it as a period in milliseconds
// The source must emit next or complete within the period
// Otherwise, a timeout error occurs

const { Observable, of } = require('rxjs');
const { timeoutWith } = require('rxjs/operators');

const fallback = of('a', 'b', 'c');
const source = Observable.create(observer => {
  observer.next('A');
  setTimeout(() => observer.next('B'), 100);
  setTimeout(() => observer.next('C'), 300);
  setTimeout(() => observer.complete(), 600);
});

console.log('Timeout occur from B--->C');
console.log('So C is ignored and fallback resource is emitted');
source
  .pipe(timeoutWith(150, fallback))
  .subscribe(
    d => console.log(d),
    e => console.log(e.message),
    () => console.log('complete')
  );
