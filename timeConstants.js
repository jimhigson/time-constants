'use strict';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const YEAR = DAY * 365.24;
const NORMAL_YEAR = DAY * 365;
const LEAP_YEAR = DAY * 366;
const DECADE = 10 * YEAR;
const HALF_YEAR = YEAR/2;
const AVERAGE_MONTH = YEAR/12;

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
};
