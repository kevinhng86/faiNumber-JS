"use strict";
/*
 * Copyright 2019 Khang Hoang Nguyen
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/
/* Quick test to see if everything working correctly */
var fn = require("../faiNumber/faiNumber-include-all");
if ( fn.fnBase2Util.toNumber("1") !== 1 ) throw "Failed."
if ( fn.fnBase2Util.toNumber("2") !== undefined ) throw "Failed."

if ( fn.fnBase3Util.toNumber("2") !== 2 ) throw "Failed.";
if ( fn.fnBase3Util.toNumber("3") !== undefined ) throw "Failed.";

if ( fn.fnBase8Util.toNumber("7") !== 7 ) throw "Failed.";
if ( fn.fnBase8Util.toNumber("8") !== undefined ) throw "Failed.";

if ( fn.fnBase10Util.toNumber("9") !== 9) throw "Failed.";
if ( fn.fnBase10Util.toNumber("f") !== undefined) throw "Failed.";

if ( fn.fnBase16Util.toNumber("f") !== 15 ) throw "Failed.";

if ( fn.fnBinaryUtil.toNumber("1") !== 1 ) throw "Failed.";
if ( fn.fnBinaryUtil.toNumber("-1") !== undefined ) throw "Failed.";
if ( fn.fnBinaryUtil.toNumber("2") !== undefined ) throw "Failed.";

if ( fn.fnOctalUtil.toNumber("7") !== 7 ) throw "Failed.";
if ( fn.fnOctalUtil.toNumber("-7") !== undefined ) throw "Failed.";
if ( fn.fnOctalUtil.toNumber("8") !== undefined ) throw "Failed.";

if ( fn.fnDecimalUtil.toNumber("9") !== 9 ) throw "Failed." ;
if ( fn.fnDecimalUtil.toNumber("f") !== undefined) throw "Failed.";

if ( fn.fnHexUtil.toNumber("f") !== 15 ) throw "Failed.";
if ( fn.fnHexUtil.toNumber("-f") !== undefined) throw "Failed.";

if ( fn.fnNumberStringUtil.assumeIsOdd("55") !== true ) throw "Failed.";

console.log("Quick node import test passed.");
