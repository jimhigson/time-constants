# time-constants
Some constants for convenient amounts of time, in milliseconds

```js
'use strict'

var SECOND = 1000
var MINUTE = 60 * SECOND
var HOUR = 60 * MINUTE
var DAY = 24 * HOUR
var WEEK = 7 * DAY
var YEAR = DAY * 365.24
var NORMAL_YEAR = DAY * 365
var LEAP_YEAR = DAY * 366
var DECADE = 10 * YEAR
var HALF_YEAR = YEAR/2
var AVERAGE_MONTH = YEAR/12

module.exports = {
        SECOND: SECOND
    ,   MINUTE : MINUTE
    ,   HOUR : HOUR
    ,   DAY : DAY
    ,   WEEK : WEEK
    ,   YEAR : YEAR
    ,   NORMAL_YEAR : NORMAL_YEAR
    ,   LEAP_YEAR : LEAP_YEAR
    ,   DECADE : DECADE
    ,   HALF_YEAR: HALF_YEAR
    ,   AVERAGE_MONTH : AVERAGE_MONTH

// ±100,000,000 days, the min and max dates allowed in ECMA Script.
// See: http://ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
    ,   MIN_DATE : new Date(-8.64E15)
    ,   MAX_DATE : new Date(8.64E15)
}
```
