# Multicasting

> Multicasting is taking values from the source and passing or sharing them to multiple subscribers.

**multicast** : This creates a connectable observables (proxy to the source stream). This can be used when we have multiple subscribers and we want to them to start listening to source at the same time.

```

    source : :---1-2-3---------------------------------|
                  subscribe()    connect()
    connectable :--|----|----|----!---------------------|
    observable     |    |    |-----1-2-3----------------|
    proxy          |    |----------1-2-3----------------|
    connect()      |---------------1-2-3----------------|

```

**share** : This operator makes original source observable open till the last subscriber, when the last subscriber unsubscribe it unsubscribe from the source. It makes the source observable `hot`. Only recieve the value emitted after it subscribes. When the new subscribers comes after unsubscribe from source then it create new subscription for it.

```

    source : :-------1----2----3----4----5----6----7-----|
                  share()
    subs 1 :      |    |          |-4----5----6----7-----|
    subs 2 :      |    |    |--3----4----5----6----7-----|
    subs 3 :      |    |--2----3----4----5----6----7-----|
    subs 4 :      |--1----2----3----4----5----6----7-----|

```

**shareReplay** : This operator is the same share operator with extra functionality to emit previous n emits.

```

    source : :-------1----2----3----4----5----6----7-----|
                  shareReplay(1)
    subs 1 :      |    |         |3-4----5----6----7-----|
    subs 2 :      |    |    |2-3----4----5----6----7-----|
    subs 3 :      |    |1-2----3----4----5----6----7-----|
    subs 4 :      |--1----2----3----4----5----6----7-----|

```

**publish** : It takes a regular source observable and returns a connectable observable.

```

    source : :---1-2-3---------------------------------|
                  subscribe()    connect()
    connectable :--|----|----|----!---------------------|
    observable     |    |    |-----1-2-3----------------|
    proxy          |    |----------1-2-3----------------|
    connect()      |---------------1-2-3----------------|

```

**publishBehaviour** : It takes a regular source observable and returns a connectable observable and return immediately an specified initial value

```

    source : :---1-2-3---------------------------------|

                    publishBehaviour('x')

                  subscribe()    connect()
    connectable :--|----|----|----!---------------------|
    observable     |    |    |x-----1-2-3----------------|
    proxy          |    |x----------1-2-3----------------|
    connect()      |x---------------1-2-3----------------|

```

**publishLast** : It convert a source observable to connectable observable and skips all event except last.

```

    source : :---1-2-3---------------------------------|
                    publishLast()
                       connect()
    connectable :--|----|--!-|-------------------------|
    observable     |    |    |-3----------------|
    proxy          |    |--3----------------|
    connect()      |-------3----------------|

```

**publishReplay** : It convert a source observable to connectable observable and provide last n events.

```
    source : :---1-2-3---------------------------------|
                    publishReplay(2)
                       connect()
    connectable :--|----|--!-|-------------------------|
    observable     |    |    |2-3----------------|
    proxy          |    |-2-3----------------|
    connect()      |-2------3----------------|

```
