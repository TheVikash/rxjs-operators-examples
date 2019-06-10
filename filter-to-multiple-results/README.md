# Filter to multiple results

> Often when dealing with streams we dont need to process every items or events and only have to deal with subset of these events. For this use case we have some operators that filters these events into its subset according to the criteria you specified.

**skip** : It just ignore the first nth emits.

```
    source        : -----a---b---c---d---e---f---g---h---|

                        skip(3)

    output        :------------------d---e----f---g--h---|

```

**skipLast** : It is the opposite of the skip and it skips from the last. This operator will not work for infinite observables.

```
    source        : -----a---b---c---d---e---f---g---h---|

                        skipLast(3)

    output        :------a---b---c---d---e---------------|

```

**skipUntil** : It is a dynamic skip and instead of providing values to skip we provide signal observable. Every element from our source observables will ignore until the signal observable emits its first value.

```
    source        : -----a---b---c---d---e---f---g---h---|

    ignore until      :----------------!-----------------|
    second observable

    output        :-----------------------e--f---g---h---|

```

**skipWhile** : It accept a predicate (condition) and it skips the source streams until it evaluates to false. Once it evaluates to false it will not reevaluate the expression again.

```
    source        : -----1---2---3---4---5---6---6---1---|

    predicate         x < 4

    output        :------------------4----5--6---6---1--|
```

**take** : It takes the first nth element and complete.

```
    source        : -----a---b---c---d---e---f---g---h---|

                      take(3)

    output        :------a---b---c-----------------------|

```

**takeLast** : It takes the nth element from the last and works only with finite observables.

```
    source        : -----a---b---c---d---e---f---g---h---|

                      takeLast(3)

    output        : -------------------------f---g---h---|

```

**takeUntil** : It takes element from source observable until signal observable emits any event.

```
    source        : -----a---b---c---d---e---f---g---h---|

    take until      :------------------!-----------------|
    second observable

    output        :------a---b----c------|

```

**takeWhile** : It emits the source observable until the predicates evaluate to false and then it completes.

```
    source        : -----1---2---3---4---5---6---6---1---|

    predicate         x < 4

    output        :------1---2---3---|
```

**distinct** : It allows you to eliminate duplicate from your streams.

```
    source        : -----a---b---c---a---b---f---c---h---|

                      distinct

    output        : -----a---b---c----------f--------h---|

```

**distinctUntilChanged** : It only compare a new value to previous value and doesn't if current value is equal to previous value.

```
    source        : -----a---b---b---a---b---f---c---h---|

                      distinctUntilChanged

    output        : -----a---b-------a---b---f----c---h---|

```

**distinctUntilKeyChanged** : It is similar to distinctUntilChanged but this operator works on objects.

**filter** : You have to pass the predicate function and when it evaluated to true it emit the source stream otherwise not.

```
    source        : -----1---2---3---4---5---6---6---1---|

    predicate         x > 3

    output        :------------------4---5---6---6-------|

```

**sample** : It takes the latest event from the source stream when any signal event emits.

```
    source        : -----1---2---3---4---5---6---6---1---|

    signal        :--------*--------*--------------*-----|

    output        :----------1--------3-------------6----|

```

**audit** : It takes a factory function as parameter that recieves a value emitted by source observable and must return an Observable. The returned Observable will be act as signal through which next value of the source is accepted.

```
    source        : --0---1---2---3---4---5---6-----|

    signal        :----(0)------(3)--------(6)------|

    output        :----------2--------5-------6-----|

```

**throttle** : It is similar to audit and difference is the first value emitted is sent to the subscriber and then sent to the factory function of throttle operator.

```
    source        :---0---1---2---3---4---5---6-----|

    signal        :----(0)-----(2)---------(5)------|

    output        :---0------2-----------5-----6----|

```
