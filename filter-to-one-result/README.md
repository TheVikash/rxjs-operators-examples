# Filter to single result

> The following operator will filter the source stream into a single value.

**first**: It takes the first value from the source stream and then complete. It also takes the predicate function and return first value that satify that condition.

```
    source        : -----a---b---c---d---e---f---g---h---|

                                first()

    output        :------a-------------------------------|

```

**last**: It takes last element from the source stream. It will not work on infinite obervable.

```
    source        : -----a---b---c---d---e---f---g---h---|

                                last()

    output        :----------------------------------h---|

```

**min**: It takes the smallest element from the finite source stream.

```
    source        : -----1---2---3---4---0---6---7---8---|

                                min()

    output        :------------------------------------0-|

```

**max**: It takes the maximum element from the finit source stream.

```
    source        : -----1---2---3---4---11---6---7---8---|

                                min()

    output        :------------------------------------11-|
```

**elementAt** : It returns the direct element from its 0-indexed position.

```
    source        : -----1---2---3---4---11---6---7---8---|

                                elementAt(4)

    output        :-----------------------11-|
```

**find** : It emits the first element where the predicate function is true.

```
    source        : -----1---2---3---4---11---6---7---8---|

                                find(x>3)

    output        :------------------4-------------------|
```

**findIndex** : It emits the index of first element that matches the condition.

```
    source        : -----1---2---3---4---11---6---7---8---|

                                findIndex(x>3)

    output        :------------------3-------------------|
```

**single** : It emits the first value that matches the condition otherwise throw error if there is no element or elements greater than one.

```
    source        : -----1---2---3---4---11---6---7---8---|

                                single(x>10)

    output        :--------------------------------------10--|


    source        : -----1---2---3---4---11---6---7---8---|

                                single(x > 11)

    output        :--------------------------------------err--|


    source        : -----1---2---3---4---11---6---7---8---|

                                single(x<8)

    output        :--------------------------------------err--|
```
