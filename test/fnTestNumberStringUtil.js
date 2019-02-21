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

/* Test file for fnNumberStringUtil.js **/

var ___ran___ = false;
var ___func___ = "fnNumberStringUtil";
var ___file___ = "../faiNumber/fnNumberStringUtil.js";

function isInteger(){
    var failMsg = "fnNumberStringUtil.isInteger() test fail.";

    console.log("=== fnNumberStringUtil.isInteger() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isInteger("00123456789") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isInteger("+9") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isInteger("-9") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    if ( fnNumberStringUtil.isInteger("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isInteger(":") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isInteger("a") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isInteger("\0") !== false ) throw failMsg;
    // Empty String & Empty Signs.
    if ( fnNumberStringUtil.isInteger("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isInteger("+") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isInteger("-") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isInteger(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isInteger() Test Completed ===");
    console.log("\r\n\r\n");
}

function isUnsignedInteger(){ 
    var failMsg = "fnNumberStringUtil.isUnsignedInteger() test fail.";
    console.log("=== fnNumberStringUtil.isUnsignedInteger() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isUnsignedInteger("0123456789") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    if ( fnNumberStringUtil.isUnsignedInteger("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedInteger(":") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedInteger("a") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedInteger("\0") !== false ) throw failMsg;
    // Empty String & Signs.
    if ( fnNumberStringUtil.isUnsignedInteger("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedInteger("+9") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedInteger("-9") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isUnsignedInteger(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isUnsignedInteger() Test Completed ===");
    console.log("\r\n\r\n");
}

function isBinary(){
    var failMsg = "fnNumberStringUtil.isBinary() test fail.";
    console.log("=== fnNumberStringUtil.isBinary() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isBinary("01") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("+0") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("-0") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    if ( fnNumberStringUtil.isBinary("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("2") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("a") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("\0") !== false ) throw failMsg;
    // Empty String & Empty Signs.
    if ( fnNumberStringUtil.isBinary("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("+") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBinary("-") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isBinary(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isBinary() Test Completed ===");
    console.log("\r\n\r\n");
}

function isUnsignedBinary(){
    var failMsg = "fnNumberStringUtil.isUnsignedBinary() test fail.";
    console.log("=== fnNumberStringUtil.isUnsignedBinary() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isUnsignedBinary("01") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    if ( fnNumberStringUtil.isUnsignedBinary("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBinary("2") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBinary("a") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBinary("\0") !== false ) throw failMsg;
    // Empty String & Signs.
    if ( fnNumberStringUtil.isUnsignedBinary("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBinary("+9") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBinary("-9") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isUnsignedBinary(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isUnsignedBinary() Test Completed ===");
    console.log("\r\n\r\n");
}

function isOctal(){
    var failMsg = "fnNumberStringUtil.isOctal() test fail.";
    console.log("=== fnNumberStringUtil.isOctal() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isOctal("01234567") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("+0") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("-0") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    // Right before and right after digit/character as digit in ASCII code, also \0.
    if ( fnNumberStringUtil.isOctal("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("8") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("a") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("\0") !== false ) throw failMsg;
    // Empty String & Empty Signs.
    if ( fnNumberStringUtil.isOctal("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("+") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isOctal("-") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isOctal(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isOctal() Test Completed ===");
    console.log("\r\n\r\n");
}

function isUnsignedOctal(){
    var start, end, result;
    var failMsg = "fnNumberStringUtil.isUnsignedOctal() test fail.";
    console.log("=== fnNumberStringUtil.isUnsignedOctal() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isUnsignedOctal("01234567") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    // Right before and right after digit/character as digit in ASCII code, also \0.
    if ( fnNumberStringUtil.isUnsignedOctal("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedOctal("8") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedOctal("a") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedOctal("\0") !== false ) throw failMsg;
    // Empty String & Signs.
    if ( fnNumberStringUtil.isUnsignedOctal("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedOctal("+9") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedOctal("-9") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isUnsignedOctal(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isUnsignedOctal() Test Completed ===");
    console.log("\r\n\r\n");
}

function isHex(){
    var start, end, result;
    var failMsg = "fnNumberStringUtil.isHex() test fail.";
    console.log("=== fnNumberStringUtil.isHex() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");    

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isHex("0123456789") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isHex("abcdef") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isHex("ABCDEF") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isHex("+0") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isHex("-0") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    // Right before and right after digit/character as digit in ASCII code, also \0.
    if ( fnNumberStringUtil.isHex("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex(":") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("`") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("g") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("@") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("G") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("\0") !== false ) throw failMsg;
    // Empty String & Empty Signs.
    if ( fnNumberStringUtil.isHex("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("+") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isHex("-") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isHex(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isHex() Test Completed ===");
    console.log("\r\n\r\n");
}

function isUnsignedHex(){
    var failMsg = "fnNumberStringUtil.isUnsignedHex() test fail.";
    console.log("=== fnNumberStringUtil.isUnsignedHex() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log();

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.isUnsignedHex("0123456789") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("abcdef") !== true ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("ABCDEF") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    // Right before and right after digit/character as digit in ASCII code, also \0.
    if ( fnNumberStringUtil.isUnsignedHex("/") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex(":") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("@") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("G") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("`") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("g") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("\0") !== false ) throw failMsg;
    // Empty String & Signs.
    if ( fnNumberStringUtil.isUnsignedHex("") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("+9") !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedHex("-9") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 3: Not a string.");
    try{
        fnNumberStringUtil.isUnsignedHex(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isUnsignedHex() Test Completed ===");
    console.log("\r\n\r\n");
}

function isBase(){
    var failMsg = "fnNumberStringUtil.isBase() test fail.";
    console.log("=== fnNumberStringUtil.isBase() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    // Base 2
    if ( fnNumberStringUtil.isBase("01", 2) !== true ) throw failMsg;
    // Base 10
    if ( fnNumberStringUtil.isBase("0123456789", 10) !== true ) throw failMsg;
    // Base 16
    if ( fnNumberStringUtil.isBase("0123456789", 11) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isBase("aA", 11) !== true ) throw failMsg;
    // Base 36
    if ( fnNumberStringUtil.isBase("0123456789", 36) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isBase("abcdefghijklmnopqrstuvwxyz", 36) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isBase("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 36) !== true ) throw failMsg;
    // Signs
    if ( fnNumberStringUtil.isBase("+0", 2) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isBase("-0", 2) !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    // Right before and right after digit/character as digit in ASCII code, also \0.
    // Base 2
    if ( fnNumberStringUtil.isBase("/", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("2", 2) !== false ) throw failMsg;
    // Base 10
    if ( fnNumberStringUtil.isBase("/", 10) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase(":", 10) !== false ) throw failMsg;
    // Base 11
    if ( fnNumberStringUtil.isBase("/", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase(":", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("@", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("B", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("`", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("b", 11) !== false ) throw failMsg;
    // Base 36
    if ( fnNumberStringUtil.isBase("/", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase(":", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("@", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("[", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("`", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("{", 36) !== false ) throw failMsg;
    // Empty String, Empty Signs, & \0.
    if ( fnNumberStringUtil.isBase("", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("+", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("-", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isBase("\0", 2) !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Errors check.");
    try{
        fnNumberStringUtil.isBase("", 1);
        throw failMsg;
    } catch (e){}

    try{
        fnNumberStringUtil.isBase("", 37);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 4: Not a string.");
    try{
        fnNumberStringUtil.isBase(123, 10);
        throw failMsg;
    } catch (e){}
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.isBase() Test Completed ===");
    console.log("\r\n\r\n");
}

function isUnsignedBase(){
    var failMsg = "fnNumberStringUtil.isUnsignedBase() test fail.";
    console.log("=== fnNumberStringUtil.isUnsignedBase() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 1: Test true.");
    // Base 2
    if ( fnNumberStringUtil.isUnsignedBase("01", 2) !== true ) throw failMsg;
    // Base 10
    if ( fnNumberStringUtil.isUnsignedBase("0123456789", 10) !== true ) throw failMsg;
    // Base 16
    if ( fnNumberStringUtil.isUnsignedBase("0123456789", 11) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("aA", 11) !== true ) throw failMsg;
    // Base 36
    if ( fnNumberStringUtil.isUnsignedBase("0123456789", 36) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("abcdefghijklmnopqrstuvwxyz", 36) !== true ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 36) !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    // Right before and right after digit/character as digit in ASCII code, also \0.
    // Base 2
    if ( fnNumberStringUtil.isUnsignedBase("/", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("2", 2) !== false ) throw failMsg;
    // Base 10
    if ( fnNumberStringUtil.isUnsignedBase("/", 10) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase(":", 10) !== false ) throw failMsg;
    // Base 11
    if ( fnNumberStringUtil.isUnsignedBase("/", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase(":", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("@", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("B", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("`", 11) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("b", 11) !== false ) throw failMsg;
    // Base 36
    if ( fnNumberStringUtil.isUnsignedBase("/", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase(":", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("@", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("[", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("`", 36) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("{", 36) !== false ) throw failMsg;
    // Empty String, Signs & 0.
    if ( fnNumberStringUtil.isUnsignedBase("", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("+0", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("-0", 2) !== false ) throw failMsg;
    if ( fnNumberStringUtil.isUnsignedBase("\0", 2) !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Errors check.");
    try{
        fnNumberStringUtil.isUnsignedBase("", 1);
        throw failMsg;
    } catch (e){}

    try{
        fnNumberStringUtil.isUnsignedBase("", 37);
        throw failMsg;
    } catch (e){}
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 4: Not a string.");
    try{
        fnNumberStringUtil.isUnsignedBase(123, 10);
        throw failMsg;
    } catch (e){}
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");
    

    console.log("=== fnNumberStringUtil.isUnsignedBase() Test Completed ===");
    console.log("\r\n\r\n");
}
   
function assumeIsOdd(){
    var failMsg = "fnNumberStringUtil.assumeIsOdd() test fail.";
    console.log("=== fnNumberStringUtil.assumeIsOdd() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.assumeIsOdd("21") !== true ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsOdd("1") !== true ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsOdd("555555") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    if ( fnNumberStringUtil.assumeIsOdd("12") !== false ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsOdd("0") !== false ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsOdd("8888888") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Errors check.");
    if ( fnNumberStringUtil.assumeIsOdd("") !== undefined ) throw failMsg;
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 4: Not a string.");
    try{
        fnNumberStringUtil.assumeIsOdd(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("=== fnNumberStringUtil.assumeIsOdd() Test Completed ===");
    console.log("\r\n\r\n");
}

function assumeIsEven(){
    var failMsg = "fnNumberStringUtil.assumeIsEven() test fail.";
    console.log("=== fnNumberStringUtil.assumeIsEven() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test true.");
    if ( fnNumberStringUtil.assumeIsEven("22") !== true ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsEven("0") !== true ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsEven("88888888") !== true ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test false.");
    if ( fnNumberStringUtil.assumeIsEven("21") !== false ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsEven("1") !== false ) throw failMsg;
    if ( fnNumberStringUtil.assumeIsEven("5555555555") !== false ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Errors check.");
    if ( fnNumberStringUtil.assumeIsEven("") !== undefined ) throw failMsg;
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 4: Not a string.");
    try{
        fnNumberStringUtil.assumeIsEven(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.assumeIsEven() Test Completed ===");
    console.log("\r\n\r\n");
}

function assumeCompare(){
    var failMsg = "fnNumberStringUtil.assumeCompare() test fail.";
    console.log("=== fnNumberStringUtil.assumeCompare() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test Smaller Than.");
    // Empty Compare.
    if ( fnNumberStringUtil.assumeCompare("", "+") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("", "21") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("", "-1") !== -1 ) throw failMsg;
    // Neg To.
    if ( fnNumberStringUtil.assumeCompare("-1", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1", "-0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1", "+0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1", "-") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1", "+") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-9", "-1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1585", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1585", "1585") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-58585", "-58584") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-58585", "-35") !== -1 ) throw failMsg;
    // Pos To.
    if ( fnNumberStringUtil.assumeCompare("1", "9") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("250", "2499") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("250", "251") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("2785", "+2787") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+27", "+2574") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+851", "852") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("358585", "358587") !== -1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.assumeCompare("+", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("0", "258") !== -1 ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test Equal.");
    // Empty & Just Sign.
    if ( fnNumberStringUtil.assumeCompare("", "") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-", "+") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+", "-") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+", "+") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-", "-") !== 0 ) throw failMsg;
    // Zeroes.
    if ( fnNumberStringUtil.assumeCompare("-0", "-0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-0", "+0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("0", "+0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("0", "0") !== 0 ) throw failMsg;
    // Leading Zeroes.
    if ( fnNumberStringUtil.assumeCompare("-000250", "-0250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-0000", "+00000") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("0250", "+000250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("250", "+0000250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-250", "-0000250") !== 0 ) throw failMsg;
    // 1s.
    if ( fnNumberStringUtil.assumeCompare("+1", "1") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+1", "+1") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1", "-1") !== 0 ) throw failMsg;
    // Other.
    if ( fnNumberStringUtil.assumeCompare("+250", "250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+85007", "+85007") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-9875778787", "-9875778787") !== 0 ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Test Larger than.");
    // Empty Compare.
    if ( fnNumberStringUtil.assumeCompare("+", "") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("0", "") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("21", "") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-1", "") !== 1 ) throw failMsg;
    // Pos To.
    if ( fnNumberStringUtil.assumeCompare("1", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "-0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "+0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "-") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "+") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("9", "1") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1585", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1585", "-1585") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("58585", "58584") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("58585", "35") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("4789", "+4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+4789", "4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("+4789", "+4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("4789", "4788") !== 1 ) throw failMsg;
    // Neg To.
    if ( fnNumberStringUtil.assumeCompare("-1", "-9") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-250", "-2499") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-250", "-251") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-2785", "-2787") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-27", "-2574") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-851", "-852") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("-358585", "-358587") !== 1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.assumeCompare("1", "+") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "-") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "-0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "+0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("1", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompare("258", "0") !== 1 ) throw failMsg;
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 4: Not a string.");
    try{
        fnNumberStringUtil.assumeCompare(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.assumeCompare() Test Completed ===");
    console.log("\r\n\r\n");
}

function assumeCompareAllBase(){
    var failMsg = "fnNumberStringUtil.assumeCompareAllBase() test fail.";
    console.log("=== fnNumberStringUtil.assumeCompareAllBase() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test Smaller Than.");
    // Empty Compare.
    if ( fnNumberStringUtil.assumeCompareAllBase("", "+") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("", "21") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("", "-1") !== -1 ) throw failMsg;
    // Neg To.
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "-0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "+0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "-") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "+") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-9", "-1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1585", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1585", "1585") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-58585", "-58584") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-58585", "-35") !== -1 ) throw failMsg;
    // Pos To.
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "9") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("250", "2499") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("250", "251") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("2785", "+2787") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+27", "+2574") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+851", "852") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("358585", "358587") !== -1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.assumeCompareAllBase("+", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("0", "258") !== -1 ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test Equal.");
    // Empty & Just Sign.
    if ( fnNumberStringUtil.assumeCompareAllBase("", "") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-", "+") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+", "-") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+", "+") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-", "-") !== 0 ) throw failMsg;
    // Zeroes.
    if ( fnNumberStringUtil.assumeCompareAllBase("-0", "-0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-0", "+0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("0", "+0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("0", "0") !== 0 ) throw failMsg;
    // Leading Zeroes.
    if ( fnNumberStringUtil.assumeCompareAllBase("-000250", "-0250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-0000", "+00000") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("0250", "+000250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("250", "+0000250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-250", "-0000250") !== 0 ) throw failMsg;
    // 1s.
    if ( fnNumberStringUtil.assumeCompareAllBase("+1", "1") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+1", "+1") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "-1") !== 0 ) throw failMsg;
    // Other.
    if ( fnNumberStringUtil.assumeCompareAllBase("+250", "250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+85007", "+85007") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-9875778787", "-9875778787") !== 0 ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Test Larger than.");
    // Empty Compare.
    if ( fnNumberStringUtil.assumeCompareAllBase("+", "") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("0", "") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("21", "") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "") !== 1 ) throw failMsg;
    // Pos To.
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "-0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "+0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "-") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "+") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("9", "1") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1585", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1585", "-1585") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("58585", "58584") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("58585", "35") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("4789", "+4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+4789", "4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("+4789", "+4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("4789", "4788") !== 1 ) throw failMsg;
    // Neg To.
    if ( fnNumberStringUtil.assumeCompareAllBase("-1", "-9") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-250", "-2499") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-250", "-251") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-2785", "-2787") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-27", "-2574") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-851", "-852") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-358585", "-358587") !== 1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "+") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "-") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "-0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "+0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("1", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("258", "0") !== 1 ) throw failMsg;
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 4: Other bases.");
    // Base11
    if ( fnNumberStringUtil.assumeCompareAllBase("a0a", "a10") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-a10", "-a0a") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("a", "A") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("a0a", "a09") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-aa9", "-aaa") !== 1 ) throw failMsg;
    // Base 36.
    if ( fnNumberStringUtil.assumeCompareAllBase("zj", "zk") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-zb", "-za") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("zva", "zv0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.assumeCompareAllBase("-zzy", "-zzz") !== 1 ) throw failMsg;   
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");
    
    console.log("TEST 5: Not a string.");
    try{
        fnNumberStringUtil.assumeCompareAllBase(123);
        throw failMsg;
    } catch (e){}
    console.log("TEST 5 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.assumeCompareAllBase() Test Completed ===");
    console.log("\r\n\r\n");
}

function compare(){
    var failMsg = "fnNumberStringUtil.compare() test fail.";
    console.log("=== fnNumberStringUtil.compare() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test Smaller Than.");
    // Neg To.
    if ( fnNumberStringUtil.compare("-1", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-1", "-0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-1", "+0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-9", "-1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-1585", "0") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-1585", "1585") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-58585", "-58584") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-58585", "-35") !== -1 ) throw failMsg;
    // Pos To.
    if ( fnNumberStringUtil.compare("1", "9") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("250", "2499") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("250", "251") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("2785", "+2787") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+27", "+2574") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+851", "852") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("358585", "358587") !== -1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.compare("-0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("0", "1") !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("0", "258") !== -1 ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test Equal.");
    // Zeroes.
    if ( fnNumberStringUtil.compare("-0000", "-0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-0", "+000000") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("0", "+0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("0", "0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+0", "-0") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+0", "0") !== 0 ) throw failMsg;

    // Leading Zeroes.
    if ( fnNumberStringUtil.compare("-000250", "-0250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-0000", "+00000") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("0250", "+000250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("250", "+0000250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-250", "-0000250") !== 0 ) throw failMsg;
    // 1s.
    if ( fnNumberStringUtil.compare("+1", "1") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+1", "+1") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-1", "-1") !== 0 ) throw failMsg;
    // Other.
    if ( fnNumberStringUtil.compare("+250", "250") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+85007", "+85007") !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-9875778787", "-9875778787") !== 0 ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Test Larger than.");
    // Pos To.
    if ( fnNumberStringUtil.compare("1", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("1", "-0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("1", "+0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("9", "1") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("1585", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("1585", "-1585") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("58585", "58584") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("58585", "35") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("4789", "+4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+4789", "4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("+4789", "+4788") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("4789", "4788") !== 1 ) throw failMsg;
    // Neg To.
    if ( fnNumberStringUtil.compare("-1", "-9") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-250", "-2499") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-250", "-251") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-2785", "-2787") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-27", "-2574") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-851", "-852") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("-358585", "-358587") !== 1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.compare("001", "-0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("1", "+0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("001", "0") !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compare("258", "0") !== 1 ) throw failMsg;
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 4: Errors.");
    // Single signs.
    if ( fnNumberStringUtil.compare("+", "123") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("-", "123") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123", "-") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123", "+") !== undefined ) throw failMsg;
    
    // length 1 incorrect digit.
    if ( fnNumberStringUtil.compare("\0", "1234") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("/", "1234") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare(":", "1234") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("a", "1234") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("1234", "\0") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("1234", "/") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("1234", ":") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("1234", "a") !== undefined ) throw failMsg;

    // equal length incorrect digit.
    if ( fnNumberStringUtil.compare("12345678\0", "123456789") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678/", "123456789") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678:", "123456789") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678a", "123456789") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123456789", "12345678\0") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123456789", "12345678/") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123456789", "12345678:") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123456789", "12345678a") !== undefined ) throw failMsg;

    // different length incorrect digit.
    if ( fnNumberStringUtil.compare("12345678\0", "12345678901") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678/", "12345678901") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678:", "12345") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678a", "12345") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678901", "12345678\0") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345678901", "12345678/" ) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345", "12345678:") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("12345", "12345678a") !== undefined ) throw failMsg;

    // Empty string
    if ( fnNumberStringUtil.compare("", "123") !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compare("123", "") !== undefined ) throw failMsg;
    
    // Not a string
    try{
        fnNumberStringUtil.compare(123, "123");
        throw failMsg;
    } catch (e){}

    try{
        fnNumberStringUtil.compare("123", 123);
        throw failMsg;
    } catch (e){}
 
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.compare() Test Completed ===");
    console.log("\r\n\r\n");
}

function compareAsBase(){
    var failMsg = "fnNumberStringUtil.compareAsBase() test fail.";
    console.log("=== fnNumberStringUtil.compareAsBase() Test ===");
    console.log("*** If there is error, an exception will be throw.");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 1: Test Smaller Than.");
    // Neg To.
    if ( fnNumberStringUtil.compareAsBase("-1", "0", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-1", "-0", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-1", "+0", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-9", "-1", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-1585", "0", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-1585", "1585", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-58585", "-58584", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-58585", "-35", 10) !== -1 ) throw failMsg;
    // Pos To.
    if ( fnNumberStringUtil.compareAsBase("1", "9", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("250", "2499", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("250", "251", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("2785", "+2787", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+27", "+2574", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+851", "852", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("358585", "358587", 10) !== -1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.compareAsBase("-0", "1", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+0", "1", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("0", "1", 10) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("0", "258", 10) !== -1 ) throw failMsg;
    console.log("TEST 1 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 2: Test Equal.");
    // Alphanumerical equality.
    if ( fnNumberStringUtil.compareAsBase("-abcdefghijklmnopqrstuvwxyz", "-ABCDEFGHIJKLMNOPQRSTUVWXYZ", 36) !== 0 ) throw failMsg;
    // Zeroes.
    if ( fnNumberStringUtil.compareAsBase("-0000", "-0", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-0", "+000000", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("0", "+0", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("0", "0", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+0", "-0", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+0", "0", 10) !== 0 ) throw failMsg;
    // Leading Zeroes.
    if ( fnNumberStringUtil.compareAsBase("-000250", "-0250", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-0000", "+00000", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("0250", "+000250", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("250", "+0000250", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-250", "-0000250", 10) !== 0 ) throw failMsg;
    // 1s.
    if ( fnNumberStringUtil.compareAsBase("+1", "1", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+1", "+1", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-1", "-1", 10) !== 0 ) throw failMsg;
    // Other.
    if ( fnNumberStringUtil.compareAsBase("+250", "250", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+85007", "+85007", 10) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-9875778787", "-9875778787", 10) !== 0 ) throw failMsg;
    console.log("TEST 2 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 3: Test Larger than.");
    // Pos To.
    if ( fnNumberStringUtil.compareAsBase("1", "0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "-0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "+0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("9", "1", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1585", "0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1585", "-1585", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("58585", "58584", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("58585", "35", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("4789", "+4788", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+4789", "4788", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("+4789", "+4788", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("4789", "4788", 10) !== 1 ) throw failMsg;
    // Neg To.
    if ( fnNumberStringUtil.compareAsBase("-1", "-9", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-250", "-2499", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-250", "-251", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-2785", "-2787", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-27", "-2574", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-851", "-852", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-358585", "-358587", 10) !== 1 ) throw failMsg;
    // Zeroes
    if ( fnNumberStringUtil.compareAsBase("001", "-0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "+0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("001", "0", 10) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("258", "0", 10) !== 1 ) throw failMsg;
    console.log("TEST 3 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 4: Other bases.");
    // Base11
    if ( fnNumberStringUtil.compareAsBase("a0a", "a10", 11) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-a10", "-a0a", 11) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("a", "A", 11) !== 0 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("a0a", "a09", 11) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-aa9", "-aaa", 11) !== 1 ) throw failMsg;

    // Base 36.
    if ( fnNumberStringUtil.compareAsBase("z9", "za", 36) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-zb", "-za", 36) !== -1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 36) !== 0) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("zva", "zv0", 36) !== 1 ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-zzy", "-zzz", 36) !== 1 ) throw failMsg;
    console.log("TEST 4 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("TEST 5: Errors.");
    // Single signs.
    if ( fnNumberStringUtil.compareAsBase("+", "123", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("-", "123", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123", "-", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123", "+", 10) !== undefined ) throw failMsg;
    // length 1 incorrect digit.
    if ( fnNumberStringUtil.compareAsBase("\0", "1234", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("/", "1234", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase(":", "1234", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("a", "1234", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1234", "\0", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1234", "/", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1234", ":", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1234", "a", 10) !== undefined ) throw failMsg;
    // equal length incorrect digit.
    if ( fnNumberStringUtil.compareAsBase("12345678\0", "123456789", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678/", "123456789", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678:", "123456789", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678a", "123456789", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123456789", "12345678\0", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123456789", "12345678/", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123456789", "12345678:", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123456789", "12345678a", 10) !== undefined ) throw failMsg;
    // different length incorrect digit.
    if ( fnNumberStringUtil.compareAsBase("12345678\0", "12345678901", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678/", "12345678901", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678:", "12345", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678a", "12345", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678901", "12345678\0", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345678901", "12345678/", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345", "12345678:", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("12345", "12345678a", 10) !== undefined ) throw failMsg;
    // Base 11 incorrect digit.
    if ( fnNumberStringUtil.compareAsBase("/", "1", 11) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("b", "1", 11) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "/", 11) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "b", 11) !== undefined ) throw failMsg;
    // Base 36 incorrect digit.
    if ( fnNumberStringUtil.compareAsBase("/", "1", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase(":", "1", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("@", "1", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("[", "1", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "`", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("{", "1", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "/", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", ":", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "@", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "[", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "`", 36) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("1", "{", 36) !== undefined ) throw failMsg;    
    // Empty string
    if ( fnNumberStringUtil.compareAsBase("", "123", 10) !== undefined ) throw failMsg;
    if ( fnNumberStringUtil.compareAsBase("123", "", 10) !== undefined ) throw failMsg;

    // Not a string
    try{
        fnNumberStringUtil.compareAsBase(123, "123", 10);
        throw failMsg;
    } catch (e){}

    try{
        fnNumberStringUtil.compareAsBase("123", 123, 10);
        throw failMsg;
    } catch (e){}

    // Unsupported Base
    try{
        fnNumberStringUtil.compareAsBase("000", "000", 1);
        throw failMsg;
    } catch (e){}

    try{
        fnNumberStringUtil.compareAsBase("zzz", "zzz", 37);
        throw failMsg;
    } catch (e){}

    console.log("TEST 5 Passed");
    console.log("\r\n\r\n\r\n");

    console.log("=== fnNumberStringUtil.compareAsBase() Test Completed ===");
    console.log("\r\n\r\n");
}

var ___exec___ = function(){
    if ( ___ran___ === true ) return;
    else ___ran___ = true;
    isInteger();
    isUnsignedInteger();
    isBinary();
    isUnsignedBinary();
    isHex();
    isUnsignedHex();
    isOctal();
    isUnsignedOctal();
    assumeIsEven();
    assumeIsOdd();
    assumeCompare();
    assumeCompareAllBase();
    compare();
    compareAsBase();
}

var includes = function(input, exec){
    if ( typeof exec !== "function" ) throw "Not a function";
    if ( typeof input !== "string" ) throw "Not a string";

    var script = document.createElement("script");
    script.src = input;
    script.onreadystatechange = exec;
    script.onload = exec;
    document.head.appendChild(script);
};

includes(___file___ , ___exec___);
