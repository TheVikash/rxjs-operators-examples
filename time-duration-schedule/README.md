# Time, Duration ans Schedule

> These operators manipulate observable on the basis of time, duration and schedule.

**auditTime** : This operator silent the source observable by specified time in millisecond. After the time elapses the recent event emits.

```
    source : --1---3-------5------------7-----|

    ignore for
    specified  :-------------*--------------*-|
    time

    output  :----------------5--------------7--|
```

**sampleTime**: This operator takes first emit from the source and then it silents the source by specified time. It will not emit if source doesn't emit new value in specified time.

```
    source : -----1---3-------5-------------|

    ignore for
    specified  :--*-----------*-----------*-|
    time

    output  :-----1-----------5-------------|
```

**observeOn** : This operator is used to assign scheduler (asap, async etc) to observer.

**subscribeOn** : This operator is used to assign scheduler to subscriber.

**debounce** : This is a rate limiting operator that takes an observable as a parameter. It monitors the value emitted from the source and after each value is emitted it subscribe to the parameter observable. When the inner observable completes then it emits the latest values from source. If source emits before the inner observable completes than inner observable starts from the beginning.

```
    source : -----1------2--3--4--5-------------6--|

    inner  :       -----| -> -> -> -----|

    output  :------------1----------------5--------|
```

**debounceTime** : This operator is used for rate limiting that takes time as a parameter. If withing the given period of time, the source does'nt emit anything new, emit the current value.

```
    source : -----1------2--3--4--5-------------6--|

    time  :       -----| -> -> -> -----|

    output  :------------1----------------5--------|
```

**delay** : This operator adds delay to source stream at the begining.

```
    source : --1---3-------5---7-----|

                    delay(100)

    output  :------1---3---------5---7-------|
```

**delayWhen** : This operator adds delay to source stream based on inner observables emit.

```
    source : --1---3-------5---7-----|

    inner Obs:-----*-----*-------*--*--|

    output  :------1-----3-------5--7--|
```

**throttleTime** : This operator takes time in millisecond and it silents the source stream emits until the specified time and then emit first event (which emits after the time elapsed) from the source.

```
    source : --1--2--3--4--5--6--7--8--9-----|

    inner Obs:----------*------------*-------|

    output  :-1------------5-----------9-----|
```

**timeInterval** : This operator takes source emits and wrap them into object and provide interval time that tells time taken between two emits.

```
    source : --1---3-----8-----|

    output  :--{}--{}----{}----|

    {value: (value), interval: (time)}
```

**timestamp** : It wraps into the object that provide value and the timestamp at which it emits

```
    source : --1---3-----8-----|

    output  :--{}--{}----{}----|

    {value: (value), timestamp: (timestamp)}
```
