// partion

const { of } = require('rxjs');
const { partition } = require('rxjs/operators');

console.log('# from a schedule, partition busy and free days');
const timetables = [
  { day: 'Monday', status: 'busy' },
  { day: 'Tuesday', status: 'busy' },
  { day: 'Wednesday', status: 'busy' },
  { day: 'Thursday', status: 'busy' },
  { day: 'Friday', status: 'busy' },
  { day: 'Saturday', status: 'free' },
  { day: 'Sunday', status: 'free' }
];

const [busy, free] = of(...timetables).pipe(
  partition(x => x.status === 'busy')
);

console.log('busy on : ');
busy.subscribe(val => console.log(val));

// output
// # from a schedule, partition busy and free days
// busy on :
// { day: 'Monday', status: 'busy' }
// { day: 'Tuesday', status: 'busy' }
// { day: 'Wednesday', status: 'busy' }
// { day: 'Thursday', status: 'busy' }
// { day: 'Friday', status: 'busy' }

console.log('free on: ');
free.subscribe(val => console.log(val));
// output
// # from a schedule, partition busy and free days
// free on :
// { day: 'Saturday', status: 'free' }
// { day: 'Sunday', status: 'free' }
