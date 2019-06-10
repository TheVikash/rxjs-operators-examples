# Observable Transformation

> The following operators are used to transform the source observables.

**repeat** : This operator repeats all emits by specified number.

```
    source : ------a--b--|

                repeat(3)

    output : -----a--b--a--b--a--b---|
```

**repeatWhen** : This operator takes inner observable as parameter and it's repeat source stream on every inner Observable emit until it completes or errors.

```
    source : ------a--b--|

    inner  : ----------*-----*------|

    output : -----a--b--a--b--a--b---|
```

**ignoreElements** : This operator ignore all values from source and just signal complete when the source completes or errors.

```
    source: ---a--b--c--d-----------|
            ignoreElements()
    output: ------------------------|
```

**finalize** : This operators takes function as parameter which is called when source observable complete or errors.

```
    source: ---a--b--c--d--|
            finalize(function(){})
    output: ---a--b--c-d---(function())---------|
```
