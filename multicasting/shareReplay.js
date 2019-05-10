// shareReplay
// make observable hot, but also provide some past values

const { interval } = require('rxjs');
const { shareReplay, take } = require('rxjs/operators');

const source = interval(100).pipe(take(3));
console.log('# without shareReplay');
source.subscribe(v => console.log('subscriber 1 recieved : ' + v));

setTimeout(() => {
  source.subscribe(v => console.log('subscriber 2 recieved : ' + v));
}, 300);

setTimeout(() => {
  console.log('\r\n--------------------------\r\n');

  console.log('# with shareReplay');

  const source2 = source.pipe(shareReplay(2));
  source2.subscribe(v => console.log('subscriber 1 recieved : ' + v));

  setTimeout(() => {
    source2.subscribe(v => console.log('subscriber 2 recieved : ' + v));
  }, 1000);
}, 2000);
