// share
// make observable hot
const { interval } = require('rxjs');
const { share, take } = require('rxjs/operators');

const source = interval(100).pipe(take(3));
console.log('# without share');
source.subscribe(v => console.log('subscriber 1 recieved : ' + v));

setTimeout(() => {
  source.subscribe(v => console.log('subscriber 2 recieved : ' + v));
}, 300);

setTimeout(() => {
  console.log('\r\n--------------------------\r\n');

  console.log('# with share');

  const source2 = source.pipe(share());
  source2.subscribe(v => console.log('subscriber 1 recieved : ' + v));

  setTimeout(() => {
    source2.subscribe(v => console.log('subscriber 2 recieved : ' + v));
  }, 300);
}, 1000);
