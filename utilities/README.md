# Utilities

**count** : This operator counts the number of emits before completion of source stream.

```
    source : ----1--2--3--4--5--6--7--8--9---|

                count()

    output: ---------------------------------9-|
```

**every** : This operator takes source values and provide to the predicate function. If all values satisfies the predicate function before completions then it return true otherwise return false.

```
    source : ----1--2--3--4---|

                every(x => x < 5)

    output: ------------------true-|
```

**isEmpty**: If the source stream completes without emitting any value then it returns true otherwise immediate false

```
    source : ----------------|

        isEmpty()

    output: --------------------true-|
```

**sequenceEqual**: This operator checks if the source sequence is equal to inner sequence. It returns true if both sequence are equal otherwise false.

```
    source : ---1--2--3--4-------|

    inner  : ---1--2--3--4-------|

    output: --------------------true-|
```

**tap** : This operator is generally used for logging purpose. It intercept the incoming value without modifying it.
