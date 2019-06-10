# Group Values

> Values in observables emits one at time however sometimes we need work on group of values. The following operators will allow us to organize and deliver the emitted values in groups.

**groupBy** : This operators organizes the values from the source observables according to the predicate function you provide as a parameter. GroupBy is used conjunction with reduce to provide subtotal of grouped stream.

```
    source       : ---1--2--3--4--5--6--7--8--9--|

    predicate    :       groupBy(x => x % 2)

    emit grouped : |----2-----4------6-----8-----|
    observables    |
                   |--1-----3-----5------7----9--|

```

**pairwise** : This operators emits values in pair. It is usefull when have to do some comparison between values as they're emitted.

```
    source       : ---1----2------3-------5----|

                    pairwise()

    ouput       : --------[1,2]---[2,3]---[3,5]--|

```

**partition** : This operator divide source observable into two different observable in which first observable satisfy predicate function and second one is doesn't.

```
    source       : ---1--2--3--4--5--6--7--8--9--|

    predicate    :       partition(x => x % 2)

    return 2     : ----2-----4------6-----8-----|
    observables
                 : --1-----3-----5------7----9--|
```

**switchAll** : This operator takes sequence of observable as source and emits when one observable completes before next observable emits.

```
source : |-a---b--|
         |----------c-----d---|
         |--------------e--------f--|

         switchAll()

output : :-a---b--------e-------f---|

```

**toArray** : It collects all emits from the source stream into an array and emits when source completes.

```
    source       : ---1--2--3--4--5--6--7--8--9--|

    output       :------------------------------[1,2,3,4,5,6,7,8,9]-|
```

**zipAll** : It collect emits from sequence of Observables (sources) and emit as an array of nth element value.

```
source : |-a-------b--------c----|
         |-d-------e--------f----|
         |-g-------h--------i----|

         zipAll()

output : :[a,d,g]--[b,e,h]--[c,f,i]---|

```
