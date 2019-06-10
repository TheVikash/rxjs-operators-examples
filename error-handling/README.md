## Error Handling Operators

> Error handling operators are used to handle error or potential errors in our data stream.

> Generally the Error handlers can be divided into two use cases
>
> 1.  Error Handling
> 2.  Error Avoidance

**catchError** : The most basic operator in error handling, it allows your code to get notification of error occurred in source stream and react by passing the error along or emitting other observable. In either events its prevent unexpected stoppage of the event.

```
    source        : ---a--b--c--d--(err)---------------------|

    emit new Observable   :---------------1--2--3------------|

    output        :----a--b--c--d---------1--2---3-----------|

```

**throwIfEmpty** : throwIfEmpty is self explanatory as it throws error when the stream completes without emitting any event.

```
    source        : ------------------------|

    emit new Observable                     :--(err)----|

    output        :-----------------------------(err)---|

```

**onErrorResumeNext** : This operator is misnamed and should be named as onCloseResumeNext as it will attach different stream when there is error occurred in the source stream or the source stream is complete. (you will never see error)

```
    source        : -----a---b---err----c---------|

    switch to new observable             :--1--2--|

    output        :------a---b--------------1--2--|

```

**retry** : This operator resubscribe the source stream when error occured and generally used in http request when it failed due to network issues. You will see error if source stream gives error on specified retries.

```
    source        : -----a---b---err-------------|

    Resubscribe on error

    output        :------a---b---------a---b---err----|

```

**retryWhen** : It's similar to retry but in this case we can control whether we have to close the source stream successfully or return error or continuing retry. It does this by taking factory function in the parameter.

**timeout** : Timeout works in two ways that depends on parameters.

    1. If we pass a number than it will take that as millisecond to wait between two consecutive events, if any event takes greater than the given time then it will throw error.
    ```
        source        : -----a---b---------------c-------|

        error if delayed :------------------err-----------|

        output        :------a---b----------err----|

    ```
    2. If we provide a date value then it will check if the source observable is complete before the specified date otherwise it will throw error.

**timeoutWith** : Its a timeout operator but instead of throwing error it switch to the new observable.

```
    source        : -----a---b---------------c-------|

    fallback if delayed :------------1----2----3-----|

    output        :------a---b-------1----2----3-----|

```
