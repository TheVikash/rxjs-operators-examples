// bufferTime
// determine the lifetime of a buffer
// emit the created buffer after a given period

const { interval } = require('rxjs');
const {bufferTime, take } = require('rxjs/operators');


//#region example 1
// console.log('# emit buffer after 2 seconds ');
// interval(500)
//     .pipe(
//         take(6),
//         bufferTime(2000) // after 2 second has passed emit buffer as an array
//     ) 
//     .subscribe(d => console.log(d));

// output
// [ 0, 1, 2 ]
// [ 3, 4, 5 ]

//#endregion

//#region example 2
console.log('# create a new buffer every 1 seconds ');
console.log('# emit after 2 seconds');

interval(1000)
    .pipe(
        take(6),
        bufferTime(2000,1000)
    )
    .subscribe(d => console.log(d));
//Output:

//#endregion