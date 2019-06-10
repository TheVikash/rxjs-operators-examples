# Value Transformation

> These operators takes the output from the source observables and modifies and replaces the values before passing them to subscribers.

**concatMap** : It takes each ouput values and provide to the function provided to the operator that transform it accordingly and then it passed to subscribers.

```
    source : --1------2--------3-----|

         concatMap(x=>[x,x*3])

    ouput  : --[1,3]--[2,6]----[3,9]-----|
```

**concatMapTo** : It takes source stream as signaler and inner observable as parameter and each time the source value emits the inner observables also emits.

```
    source : ------!--------!----------

    inner  : |----a--b-----------------
             |

    output : -----a--b------a--b-------
```

**defaultIfEmpty** : This operator provides default value to the source stream if it completes without emitting any value.

```
    source : ---------|

            defaultIfEmpty(val)

    output : -----------(val)---|

```

**endWith** : This operators allow us to append any values in the end of the source stream.

```
    source : ---1---2---3---|

            endWith(a,b,c)

    output : ---1---2---3--a-b-c-|

```

**startWith** : This operators allow us to append any values in the beginning of the source stream.

```
    source : ---1---2---3---|

            endWith(a,b,c)

    output : --a-b-c--1---2---3---|

```

**exhaustMap** : This operators takes source stream as a signal and inner observable as param. When the source emits any value it emits the inner observable but if source emits value before completion of the inner observable then it will ignore that source emit.

```
    source : ---1--2-----------3---|

    inner  : |--a--b----------------

    output : --a--b-----------a--b--|

```

**expand**: This operator takes value from the source stream and pass it to the factory function that must returns observable. Then this observable is sent to the subscriber and passes again recursively to the factory function.

```
    source : ------------|

        expand(x => { return x<5 ? of(x+1) : empty();})

    output : --a-b-c--1---2---3---|

```

**map** : This operators takes values from the source stream and transform it according to function we provide as a parameter.

```
    source : ---1---2---3---|

        map(x => x*x)

    output : ---1---4---9---|

```

**mapTo** : This operator takes values from the source and return a constant value that we specified.

```
    source : ---1---2---3---|

        map('x')

    output : ---x---x---x---|

```

**scan** : This operator takes values from the source and pass it the function you provide as a param. This function get two values each time it is called (last value return by function or seed value and current value from the source). This can be use to accumulate result from the source.

```
    source : ---1---2---3---|

        scan((acc,val) => acc + val, 0)

    output : ---1---3---6---|

```

**mergeScan** : This operator is similar to scan but this time it returns observable instead of value from the function we provide as param.

```
    source : ---1------2------3------|

        mergeScan((acc,val) => of('a','b',acc + val), 0)

    output : ---ab1---ab3---ab6---|

```

**pluck** : This operator lets you emit object as a source observable and extract the value of the specified property. That value is then set along to the subscribers.

```
    source : ---{a:1,b:2}------{a:2,b:3}------{a:3,b:4}------|

                            pluck('a')

    output : ------1-------------2---------------3-----------|

```

**reduce** : This operator is similar to scan but only returns accumulated value. It doen't emit till the source stream completes.

```
    source : ---1---2---3---|

        reduce((acc,val) => acc + val, 0)

    output : -------------6---|

```

**switchMap** : When the source observable emits this operator subscribes to generated observable. If source emits before completion of generated observable then it unsubscribe from  
it and subscribe again to new generated observable.

```
    source : ---1-------2---------3---|

    inner  :|-a--b----c---d
    gen     |-----------A----B------C---D--|
    obs     |---------------------z-x--y--w-|

    output : -a--b------A----B----z-x--y---w-|

```

**mergeMapTo** : It takes source emits and maps to inner observable on every emit and provide the new observable to subscriber.

```
    source : ---1-------2---------3---|

    inner  :|-a--b--c---|
    gen     |-----------a--b--c--|
    obs     |-------------------a--b--c-|

    output : -a--b--c---a--b--c--a--b--c-|

```

**swithMapTo** : It takes source emits and maps to inner observable but this time it unsubscribe from inner observale if new emit from source comes before inner observable completion.

```
    source : ---1-------2---------3---|

    inner  :|-a--b--c---|
    gen     |-----------------a--b--c--|
    obs     |-----------------------a--b--c-|

    output : -a--b--c---------a--b--a--b--c-|

```

**materialize** : It takes source emits and convert it into Notification object that contains some extra information about emit like kind, error , value, hasValue.

**dematerialize** : Its an opposite of materialize and takes notification object and return simple value.
