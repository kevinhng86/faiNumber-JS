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

/* Test file for fnBinaryUtil 
 *
 * Do not change ___tbase___ 
 **/
var ___tbase___ = 2;
var ___ran___ = false;
var ___func___ = "fnBinaryUtil";
var ___file___ = "../faiNumber/" + ___func___ + ".js";

var testArr = [];
var testCase = 1000000;


var genTestCase = function(){
    // 9007199254740991  <- Parsing above this value will yield undefined.
    // -9007199254740991 <- Parsing under this value will yield undefined.
    
    // 1111111111111111111111111111111111111111111111111111 - b2 - 53

    var m = 54;
    if ( ___tbase___ !== 2 ) throw "Don't change ___tbase___";

    for ( var i = 0; i < testCase; i++ ){
        var length = Math.floor(Math.random() * (m - 1) + 1); 
        var str = "";
        
        for ( var ind = 0; ind < length; ind++ ){
            str += ""+ Math.floor( Math.random() * ___tbase___ );
        }
    
        testArr[i] = str;
    }     
}

var testLowestHighestSupport = function(){    
    var         high = "11111111111111111111111111111111111111111111111111111",
           highPlus1 = "100000000000000000000000000000000000000000000000000000",
        mlengthPlus1 = "111111111111111111111111111111111111111111111111111110";
    
    // Lowest safe and highest safe.    
    if ( window[___func___].toNumber(high) !== 9007199254740991 ) return false;
    
    // Outside safe range.
    if ( window[___func___].toNumber(highPlus1) !== undefined ) return false;
    if ( window[___func___].toNumber(mlengthPlus1) !== undefined ) return false;

    return true;
}

var ___exec___ = function(){
    if ( ___ran___ === true ) return;
    else ___ran___ = true;
    console.log("Test for '"+ ___func___ + "' starting.\r\n\r\n***Generating Random Data.***\r\n\r\n.");    
    genTestCase();
    var lowdigit = String.fromCharCode(47);
    var highdigit = String.fromCharCode(48 + ___tbase___);
        
    console.log("TEST 1: toNumber, parsing "+ testCase +" random test cases, including leading zero");
    for ( var i = 0; i < testCase; i++){
        if(window[___func___].toNumber(testArr[i]) !== parseInt(testArr[i], ___tbase___)){
            console.log("Test fail at no " + testArr[i] );
            throw "Test 1 Failed";
        }
    }
    console.log("Test 1 Passed.");

    console.log("TEST 2: toNumber, parsing undefined & test none string input. Also testing safe support range.");
    // toNumber()
    if( window[___func___].toNumber("") !== undefined ) throw "Test 2 Failed";
    if( window[___func___].toNumber(lowdigit) !== undefined ) throw "Test 2 Failed";
    if( window[___func___].toNumber(highdigit) !== undefined ) throw "Test 2 Failed";
    if( window[___func___].toNumber("+0") !== undefined ) throw "Test 2 Failed";
    if( window[___func___].toNumber("-0") !== undefined ) throw "Test 2 Failed";
    
    // Testing supported safe range.
    if ( testLowestHighestSupport() !== true ) throw "Test 2 Failed";
    
    // None string input
    try{ 
        window[___func___].toNumber(123) 
        throw "Test 2 Failed";
    } catch (e) {};
    console.log("Test 2 Passed.");
    
    console.log("TEST 3: compareAsNumber");
    for ( var i = 0; i < testCase; i++ ){
        var str1 = testArr[i++];
        var str2 = testArr[i];    
        var result;
        
        if ( parseInt(str1, ___tbase___) > parseInt(str2, ___tbase___) ) result = 1;
        else if ( parseInt(str1, ___tbase___) < parseInt(str2, ___tbase___) ) result = -1;
        else result = 0;

        if ( window[___func___].compareAsNumber(str1, str2) !== result ){
            console.log("Fail with '"+ str1 +"' and '" + str2 + "'");
            throw "Test 3 Failed";
        }
    }
    
    if ( window[___func___].compareAsNumber("0", "00000") !== 0 ) throw "Test 3 Failed";    
    if ( window[___func___].compareAsNumber("", "000") !== undefined ) throw "Test 3 Failed";
    if ( window[___func___].compareAsNumber("000", "") !== undefined ) throw "Test 3 Failed";
    if ( window[___func___].compareAsNumber("-", "000") !== undefined ) throw "Test 3 Failed";
    if ( window[___func___].compareAsNumber("000", "-") !== undefined ) throw "Test 3 Failed";
    console.log("TEST 3 Passed.");
    
    console.log("TEST 4: numberOrSmaller");
    for ( var i = 0; i < testCase; i++ ){
        var str1 = testArr[i++];
        var str2 = testArr[i];    
        var result;
        
        if ( parseInt(str1, ___tbase___) > parseInt(str2, ___tbase___) ) result = 1;
        else if ( parseInt(str1, ___tbase___) < parseInt(str2, ___tbase___) ) result = -1;
        else result = 0;

        if ( window[___func___].numberOrSmaller(str1, str2) !== result ){
            console.log("Fail with '"+ str1 +"' and '" + str2 + "'");
            throw "Test 4 Failed";
        }
    }    
    if ( window[___func___].numberOrSmaller("0", "00000") !== 0 ) throw "Test 4 Failed";
    
    // NaN(undefined) to and from
    if ( window[___func___].numberOrSmaller("`", "") !== -1 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("`", "0") !== -1 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("`", "`") !== 0 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("", "`") !== 1 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("0", "`") !== 1 ) throw "Test 4 Failed";
    
    // Empty to and from
    if ( window[___func___].numberOrSmaller("", "`") !== 1 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("", "0") !== -1 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("", "") !== 0 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("`", "") !== -1 ) throw "Test 4 Failed";
    if ( window[___func___].numberOrSmaller("0", "") !== 1 ) throw "Test 4 Failed";

    console.log("Test 4 Passed.");
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
