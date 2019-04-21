// timeout
// The timeout is a number:
// Use it as a period in milliseconds
// The source must emit next or complete within the period
// Otherwise, a timeout error occurs

const { Observable } = require('rxjs');
const { timeout } = require('rxjs/operators');

const source = Observable.create(observer => {
  observer.next('A');
  setTimeout(() => observer.next('B'), 100);
  setTimeout(() => observer.next('C'), 300);
  setTimeout(() => observer.complete(), 600);
});

console.log('Timeout occur from B--->C');
source
  .pipe(timeout(150))
  .subscribe(
    d => console.log(d),
    e => console.log(e.message),
    () => console.log('complete')
  );
