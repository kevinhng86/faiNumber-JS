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

/* Test file for base 2 - 10 **/
var ___sbase___ = [2, 3, 8, 10];
var ___tbase___;
var ___ran___ = false;
var ___func___;

var testArr = [];
var testCase = 1000000;

var genTestCase = function(){
    // 9007199254740991  <- Parsing above this value will yield undefined.
    // -9007199254740991 <- Parsing under this value will yield undefined.
    
    // 1111111111111111111111111111111111111111111111111111 - b2 - 53
    // 1121202011211211122211100012101111 - b3 - 33 (1 length lower than max)
    // 377777777777777777 - b8 - 17 (1 length lower than max)
    // 9007199254740991 - b10 - 15 (1 length lower than max)
    var m;
    
    if ( ___tbase___ === 2) m = 54;
    else if ( ___tbase___ === 3) m = 34;
    else if ( ___tbase___ === 8) m = 18;
    else if ( ___tbase___ === 10) m = 16;
    else throw "A none supported base."
    
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
    var high, highPlus1, mlengthPlus1;
    if ( ___tbase___ === 2 ){
        high = "11111111111111111111111111111111111111111111111111111";
        highPlus1 = "100000000000000000000000000000000000000000000000000000";
        mlengthPlus1 = "111111111111111111111111111111111111111111111111111110";
    } else if ( ___tbase___ === 3 ){
        high = "1121202011211211122211100012101111";
        highPlus1 = "1121202011211211122211100012101112";
        mlengthPlus1 = "11212020112112111222111000121011110";
    } else if ( ___tbase___ === 8 ){
        high = "377777777777777777";
        highPlus1 = "400000000000000000";
        mlengthPlus1 = "3777777777777777770";
    } else if ( ___tbase___ === 10 ) {
        high = "9007199254740991";
        highPlus1 = "9007199254740992";
        mlengthPlus1 = "90071992547409910";
    } else throw "A none supported base."

    // Lowest safe and highest safe.    
    if ( window[___func___].toNumber(high) !== 9007199254740991 ) return false;
    if ( window[___func___].toNumber("-" + high) !== -9007199254740991 ) return false;
    if ( window[___func___].toNumberAsUnsigned(high) !== 9007199254740991 ) return false;
    
    // Outside safe range.
    if ( window[___func___].toNumber(highPlus1) !== undefined ) return false;
    if ( window[___func___].toNumber("-" + highPlus1) !== undefined ) return false;
    if ( window[___func___].toNumber(mlengthPlus1) !== undefined ) return false;
    if ( window[___func___].toNumber("-" + mlengthPlus1) !== undefined ) return false;
    if ( window[___func___].toNumberAsUnsigned(highPlus1) !== undefined ) return false;
    if ( window[___func___].toNumberAsUnsigned(mlengthPlus1) !== undefined ) return false;

    return true;
}

var exec_test = function(){
    console.log("Test for ___tbase___ '"+ ___tbase___ + "' starting.\r\n\r\n***Generating Random Data.***\r\n\r\n.");    
    genTestCase();
    var lowdigit = String.fromCharCode(47);
    var highdigit = String.fromCharCode(48 + ___tbase___ );
    
    console.log("TEST 1: toNumber, parsing "+ testCase +" random test cases, including leading zero.");
    for ( var i = 0; i < testCase; i++){
        var sign = Math.floor( Math.random() * 3 );
        if ( sign === 1 ) sign = "-";
        else if ( sign === 2 ) sign = "+";
        else sign = "";
        
        if(window[___func___].toNumber(sign + testArr[i]) !== parseInt(sign + testArr[i], ___tbase___)){
            console.log("Test fail at no " + testArr[i] );
            throw "Test 1 Failed";
        }
    }
    console.log("Test 1 Passed.");
    
    console.log("TEST 2: toNumberAsUnsigned, parsing "+ testCase +" random test cases, including leading zero");
    for ( var i = 0; i < testCase; i++){
        if(window[___func___].toNumberAsUnsigned(testArr[i]) !== parseInt(testArr[i], ___tbase___)){
            console.log("Test fail at no " + testArr[i] );
            throw "Test 2 Failed";
        }
    }
    console.log("Test 2 Passed.");

    console.log("TEST 3: toNumber && toNumberAsUnsigned, parsing undefined & test none string input. Also testing safe support range.");
    // toNumber()
    if( window[___func___].toNumber("") !== undefined ) throw "Test 3 Failed";
    if( window[___func___].toNumber(lowdigit) !== undefined ) throw "Test 3 Failed";
    if( window[___func___].toNumber(highdigit) !== undefined ) throw "Test 3 Failed";
    // toNumberAsUnsigned()
    if( window[___func___].toNumberAsUnsigned("") !== undefined ) throw "Test 3 Failed";
    if( window[___func___].toNumberAsUnsigned(lowdigit) !== undefined ) throw "Test 3 Failed";
    if( window[___func___].toNumberAsUnsigned(highdigit) !== undefined ) throw "Test 3 Failed";
    if( window[___func___].toNumberAsUnsigned("+0") !== undefined ) throw "Test 3 Failed";
    if( window[___func___].toNumberAsUnsigned("-0") !== undefined ) throw "Test 3 Failed";
    
    // Testing supported safe range.
    if ( testLowestHighestSupport() !== true ) throw "Test 3 Failed";
    
    // None string input
    try{ 
        window[___func___].toNumber(123) 
        throw "Test 3 Failed";
    } catch (e) {};
    try{ 
        window[___func___].toNumberAsUnsigned(123) 
        throw "Test 3 Failed";
    } catch (e) {};
    console.log("Test 3 Passed.");
    
    console.log("TEST 4: compareAsNumber");
    for ( var i = 0; i < testCase; i++ ){
        var str1 = testArr[i++];
        var str2 = testArr[i];    
        var result;
        
        if ( parseInt(str1, ___tbase___) > parseInt(str2, ___tbase___) ) result = 1;
        else if ( parseInt(str1, ___tbase___) < parseInt(str2, ___tbase___) ) result = -1;
        else result = 0;

        if ( window[___func___].compareAsNumber(str1, str2) !== result ){
            console.log("Fail with '"+ str1 +"' and '" + str2 + "'");
            throw "Test 4 Failed";
        }
    }
    
    if ( window[___func___].compareAsNumber("0", "00000") !== 0 ) throw "Test 4 Failed";    
    if ( window[___func___].compareAsNumber("", "000") !== undefined ) throw "Test 4 Failed";
    if ( window[___func___].compareAsNumber("000", "") !== undefined ) throw "Test 4 Failed";
    console.log("TEST 4 Passed.");
    
    console.log("TEST 5: numberOrSmaller");
    for ( var i = 0; i < testCase; i++ ){
        var str1 = testArr[i++];
        var str2 = testArr[i];    
        var result;
        
        if ( parseInt(str1, ___tbase___) > parseInt(str2, ___tbase___) ) result = 1;
        else if ( parseInt(str1, ___tbase___) < parseInt(str2, ___tbase___) ) result = -1;
        else result = 0;

        if ( window[___func___].numberOrSmaller(str1, str2) !== result ){
            console.log("Fail with '"+ str1 +"' and '" + str2 + "'");
            throw "Test 5 Failed";
        }
    }    
    if ( window[___func___].numberOrSmaller("0", "00000") !== 0 ) throw "Test 5 Failed";    
    
    // NaN(undefined) to and from
    if ( window[___func___].numberOrSmaller("`", "") !== -1 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("`", "0") !== -1 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("`", "`") !== 0 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("", "`") !== 1 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("0", "`") !== 1 ) throw "Test 5 Failed";    
    
    // Empty to and from
    if ( window[___func___].numberOrSmaller("", "`") !== 1 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("", "0") !== -1 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("", "") !== 0 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("`", "") !== -1 ) throw "Test 5 Failed";    
    if ( window[___func___].numberOrSmaller("0", "") !== 1 ) throw "Test 5 Failed";    

    console.log("Test 5 Passed.");
    console.log("\r\n\r\n\r\n");
}

var ___exec___ = function(){
    if ( ___ran___ === true ) return;
    else ___ran___ = true;
    
    for( var i = 0; i < ___sbase___.length; i++ ){
        ___tbase___ = ___sbase___[i];
        ___func___ = "fnBase" + ___tbase___ + "Util";
        exec_test();
    }
}

var includes = function(exec){
    if ( typeof exec !== "function" ) throw "Not a function";
    
    for ( var i = 1; i < ___sbase___.length; i++ ){
        var script = document.createElement("script");
        script.src = "../faiNumber/fnBase" + ___sbase___[i] + "Util.js";
        document.head.appendChild(script);
    } 
    
    var script = document.createElement("script");
    script.src = "../faiNumber/fnBase" + ___sbase___[0] + "Util.js";
    script.defer = "defer";
    script.onreadystatechange = exec;
    script.onload = exec;
    document.head.appendChild(script);
};

includes(___exec___);
