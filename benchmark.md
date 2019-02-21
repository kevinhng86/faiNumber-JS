## Benchmark

How fast is faiNumber?

The below are benchmark results for Base10Util.toNumber() of faiNumber
(v1.0.0.f) comparing to parseInt() and auto-cast. The benchmark test was
executed on 3 different browsers and also on NodeJS. Each test ran 3
times and  the average result from all 3 runs is used as the result.
Results are in milliseconds and were rounded to the nearest value of 2
decimal placement. For the result, the lower is the better.

###### CPU: AMD® A10-7800 radeon r7, 12 compute cores 4c+8g × 4
###### OS: Ubuntu 18.04.1 LTS
<br>

##### Base10Util(Chrome 71.0.3578.98)
##### Parsed 500000 Strings
| | Length 1  | Length 10 | Length 16  |
|---|---|---|---|
| parseInt() | 14.67ms  | 91.33ms  | 241.33ms |
| toNumber() | 24.00ms  | 53.00ms  | 193.67ms |
| Auto-cast  | 15.67ms  | 101.33ms | 248.33ms |

##### Base10Util(Mozilla Firefox 65.0)
##### Parsed 500000 Strings
| | Length 1 | Length 10 | Length 16
|---|---|---|---|
| parseInt() | 14.00ms | 52.00ms | 65.33ms  |
| toNumber() | 16.67ms | 51.33ms | 46.00ms  |
| Auto-cast  | 40.00ms | 89.33ms | 178.00ms |

##### Base10Util(Opera 58.0.3135.65)
##### Parsed 500000 Strings
| | Length 1 | Length 10 | Length 16
|---|---|---|---|
| parseInt() | 15.00ms | 93.67ms  | 247.33ms |
| toNumber() | 26.00ms | 59.00ms  | 258.33ms |
| Auto-cast  | 17.00ms | 106.33ms | 253.67ms |

##### Base10Util(NodeJS v8.10.0)
##### Parsed 500000 Strings
| | Length 1 | Length 10 | Length 16
|---|---|---|---|
| parseInt() | 13.00ms | 74.33ms | 179.67ms |
| toNumber() | 22.67ms | 71.67ms | 257.33ms |
| Auto-cast  | 12.33ms | 81.33ms | 229.33ms |
