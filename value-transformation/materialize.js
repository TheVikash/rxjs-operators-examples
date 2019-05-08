// materialize
// convert value to notification object

const { of } = require('rxjs');
const { map, materialize } = require('rxjs/operators');

console.log('# materialize a stream ');

of(1, 0)
  .pipe(materialize())
  .subscribe(x => console.log(x));

// Output
// # materialize a stream
// Notification { kind: 'N', value: 1, error: undefined, hasValue: true }
// Notification { kind: 'N', value: 0, error: undefined, hasValue: true }
// Notification { kind: 'C', value: undefined, error: undefined, hasValue: false }

console.log('\r\n----------------\r\n');

console.log('materialize error');

of('a', 1, 'b')
  .pipe(
    map(x => x.toUpperCase(x)),
    materialize()
  )
  .subscribe(val => console.log(val));

// output
// materialize error
// Notification { kind: 'N', value: 'A', error: undefined, hasValue: true }
// Notification {
//   kind: 'E',
//   value: undefined,
//   error:
//    TypeError: x.toUpperCase is not a function
//        at MapSubscriber.of.pipe.x [as project] (C:\projects\rxjs-operators-examples\value-transformation\materialize.js:25:16)
//        at MapSubscriber._next (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\operators\map.js:49:35)
//        at MapSubscriber.Subscriber.next (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\Subscriber.js:66:18)
//        at Observable._subscribe (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\util\subscribeToArray.js:5:20)
//        at Observable._trySubscribe (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\Observable.js:44:25)
//        at Observable.subscribe (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\Observable.js:30:22)
//        at MapOperator.call (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\operators\map.js:32:23)
//        at Observable.subscribe (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\Observable.js:25:31)
//        at MaterializeOperator.call (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\operators\materialize.js:28:23)
//        at Observable.subscribe (C:\projects\rxjs-operators-examples\node_modules\rxjs\internal\Observable.js:25:31),  hasValue: false }
