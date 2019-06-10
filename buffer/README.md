# Buffer

**buffer** : The buffer operator is used to collect (or group) source events by given signal events in buffer operator.

```
    source : ---a--b---------c-d----------e-f---------|

    signal : -----------1-----------2-----------------|

    output : -----------[a,b]------[c,d]---------[e,f]|
```

**bufferCount** : The bufferCount operator is used to collect (or group) source events by given _buffer length(count)_ in its arguments.
The second parameter is optional (TODO)

```
    source        : ---a--b---------c-d----------e-f---------|

    buffer-length = 2

    output        : -----------[a,b]------[c,d]---------[e,f]|

```

**bufferTime**: The bufferTime operator buffers the source Observable values for a specific time period.

```
    source        : ---a--b---------c-d----------e-f---------|
    time          : ----------2s-----------4s----------------|

    buffer-time = 2

    output        : -----------[a,b]------[c,d]---------[e,f]|

```

**bufferToggle**: The bufferToggle is little different from other buffer operators as we need to specify the opening and closing of the batch. Unlike other operators the batch is not immediately
started after closing of previous one because we need specify it explicitly. This is useful when we don't need to process every event.

```
    source        : ---a--b---------c-d----------e-f---------|

    open signal   :-O------------O------------O--------------|

    close signal  :------------C-----------C-------------C---|

    output        : -----------[a,b]------[c,d]---------[e,f]|

```

**bufferWhen**: bufferWhen operator is similar to bufferToggle but in this operator we only specify the closing signal factory function. This operator is useful when we want to process every event.

```
    source        : ---a--b---------c-d----------e-f---------|

    close signal  :------------C-----------C-------------C---|

    output        : -----------[a,b]------[c,d]---------[e,f]|
```

**window**: window operator is similar to buffer operator as it collects (or group) source events by given signal but in this case instead of emiting array it emits observable

**windowCount** : windowCount is used to collect events in observables on basis of given buffer length.

**windowTime** : windowTime is used to collect events from source in observables for a specific time period.

**windowToggle** : windowToggle collects events on the basis of open and close signal in observable.
ie when open signal fired then it starts accumulating the event and when close signal triggered then it closes the batch.

**windowWhen** : windowWhen is similar to windowToggle but needs only one paramater of closing signal.
