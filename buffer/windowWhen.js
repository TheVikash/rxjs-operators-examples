// windowWhen
// buffer values
// on recieving signals from the notifier
// send the buffer as an observable
// when the source complete
// send the last buffer as observable

const { timer } = require('rxjs');
const { take, tap, mergeAll, windowWhen } = require('rxjs/operators');

const source = timer(0, 100).pipe(take(9));
const notifier = () => timer(200);

console.log('# emit buffer after 200ms ');

source
    .pipe(
        windowWhen(notifier),
        tap(()=> console.log('new buffer')),
        mergeAll()
    )
    .subscribe(d => console.log(d));


//output
// new buffer
// 0
// 1
// new buffer
// 2
// 3
// new buffer
// 4
// 5
// new buffer
// 6
// 7
// new buffer
// 8
