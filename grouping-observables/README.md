# Grouping Observables

> Grouping observables comes into play when there is multiple source streams and we need to merge these two source streams into single source stream.

**combineAll** : It takes Observables of Observables as source and emit the latest values from those source.

```
    source        : |--a----------b-------------------|
    (observable     |
    of observable)  |-----c----------d----------------|

    output        : ---[a,c]-[b,c]--[b,d]-------------|
```

**concatAll** : It takes Observables of Observables as source and emit the values serially according to the order of Observables.

```
    source        : |--a----------b-------------------|
    (observable     |
    of observable)  |-----c----------d----------------|

    output        : ---a----------b-c-d--|
```

**exhaust** : It takes Observables of Observables as input and if one observable start emitting values then it will not consider any other observable (and drop it) until Ist observable completes.

```
    source        : |--a-----b--|
    (observable     |--c-----d--|
    of observable)  |-----------------e---------f-----|

    output        : ---a-----b--------e---------f-----|
```

**mergeAll** : It takes sequence of Observables as input and its similar to concatAll but this time we can subscribe them simultaneously. You can also specify value for concurency. This process is called flattening.

```
    source        : |--a----------b-------------------|
    (observable     |
    of observable)  |-----c----------d----------------|

    output        : ---a---c------b---d---------------|
```

**withLatestFrom** : This operators takes source observable and internal observables. It emits when the source observable emit with latest from all internal observables (provided that the internal observables emit atleast once).

```
    source        :------a-------b---------c----------|

    internal      : |---1-------------2---------------|
    observables     |
                    |----------A----------------------|

    output        : -------------[b,1,A]---[c,2,A]-------|
```
