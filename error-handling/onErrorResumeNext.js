// onErrorResumeNext
// - on error skip the current stream
// - use a new stream as a replacement

const { of } = require('rxjs');
const { onErrorResumeNext, map } = require('rxjs/operators');

console.log('# on error, use another stream');
const source = of('feed1', 'feed2', 'feed3');
const backup = of(
  'handle error',
  'but dont complete original',
  'and dont get any info about any thrown error',
  'oh *** also called on complete'
);
source
  .pipe(
    map(feed => {
      if (feed === 'feed2') {
        throw new Error(`oop - but we'll never see this!`);
      }
      return feed;
    }),
    onErrorResumeNext(backup)
  )
  .subscribe(v => console.log(v));
