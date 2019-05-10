// zipAll
// collect nth-item from all sources into an array

const { timer, of } = require('rxjs');
const { map, zipAll, take } = require('rxjs/operators');

console.log('# collect pairs');
const source1 = of('A', '1', 'a');
const source2 = of('B', '2', 'b');

of(source1, source2)
  .pipe(zipAll())
  .subscribe(d => console.log(d));

// output
// # collect pairs
// [ 'A', 'B' ]
// [ '1', '2' ]
// [ 'a', 'b' ]

console.log('\r\n-------------------\r\n');

const source = of(
  timer(0, 100).pipe(
    take(3),
    map(i => 'a' + i)
  ),
  timer(0, 300).pipe(
    take(3),
    map(i => 'b' + i)
  ),
  timer(0, 500).pipe(
    take(3),
    map(i => 'c' + i)
  )
);

console.log('# value from different source emits at different time');
source.pipe(zipAll()).subscribe(d => console.log(d));
// output
// # value from different source emits at different time
// [ 'a0', 'b0', 'c0' ]
// [ 'a1', 'b1', 'c1' ]
// [ 'a2', 'b2', 'c2' ]
