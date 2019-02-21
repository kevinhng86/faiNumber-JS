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
/* Benchmark file for base 2 negative. **/
var ___tbase___ = 2;
var ___ran___ = false;
var ___func___ = "fnBase" + ___tbase___ + "Util";
var ___file___ = "../faiNumber/" + ___func___ + ".js";

var testArr_1;
var testArr_10;
var testArr_20;
var testArr_32;
var testArr_53;

var testCase = 500000; // <-- around this or lower so gc don't run so often mid test.

var genBenchmarkCase = function(){    
    if ( ___tbase___ !== 2 ) throw "Don't change the value of ___tbase___ variable.";
 
    testArr_1 = [];
    testArr_10 = [];
    testArr_20 = [];
    testArr_32 = [];
    testArr_53 = [];

    for ( var i = 0; i < testCase; i++ ){
        var str = "";
        str += ""+ Math.floor( (Math.random() * (___tbase___ - 1)) + 1 );
        testArr_1[i] = "-" + str;

        for ( var ind = 0; ind < 9; ind++ ){
            str += ""+ Math.floor( Math.random() * ___tbase___ );
        }
        testArr_10[i] = "-" + str;
        
        
        for ( var ind = 0; ind < 10; ind++ ){
            str += ""+ Math.floor( Math.random() * ___tbase___ );
        }
        testArr_20[i] = "-" + str;
        
        for ( var ind = 0; ind < 12; ind++ ){
            str += ""+ Math.floor( Math.random() * ___tbase___ );
        }
        testArr_32[i] = "-" + str;
     
        for ( var ind = 0; ind < 21; ind++ ){
            str += ""+ Math.floor( Math.random() * ___tbase___ );
        }
        testArr_53[i] = "-" + str;
    } 
}

var ___exec___ = function(){
    if ( ___ran___ === true ) return;
    else ___ran___ = true;

    console.log("Starting negative benchmark ___tbase___ '"+ ___tbase___ + "' and parseInt().");
    genBenchmarkCase();

    console.log("\r\n\r\n***Generating Random Data For parseInt().***\r\n\r\n.");    
    console.log("Print out the length to visual check if they are correct. Should be 2, 11, 21, 33, and 54.");
    console.log("This will only print one.");

    console.log("testArr_1 : " + testArr_1[0].length);
    console.log("testArr_10 : " + testArr_10[0].length);
    console.log("testArr_20 : " + testArr_20[0].length);
    console.log("testArr_32 : " + testArr_32[0].length);
    console.log("testArr_54 : " + testArr_53[0].length);
    
    console.log("\r\n\r\n\r\nTest Starting...");
    console.log("\r\n\r\n\r\n");

    var start, end, result;
    for ( var i = 0; i < 1000000000 ; i++ ){}; // <-- let gc and everything that need to run, run.

    // ParseInt();
    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    parseInt(testArr_1[i], 2);
    }
    end = Date.now();
    result = end - start;
    console.log("parseInt() parsed '" + testCase + "' strings of length 1 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    parseInt(testArr_10[i], 2);
    }
    end = Date.now();
    result = end - start;
    console.log("parseInt() parsed '" + testCase + "' strings of length 10 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    parseInt(testArr_20[i], 2);
    }
    end = Date.now();
    result = end - start;
    console.log("parseInt() parsed '" + testCase + "' strings of length 20 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    parseInt(testArr_32[i], 2);
    }
    end = Date.now();
    result = end - start;
    console.log("parseInt() parsed '" + testCase + "' strings of length 32 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    parseInt(testArr_53[i], 2);
    }
    end = Date.now();
    result = end - start;
    console.log("parseInt() parsed '" + testCase + "' strings of length 53 in '" + result + "' ms.");   

    // fnClasses
    console.log("\r\n\r\n***Generating Random Data For " + ___func___ + " .***\r\n\r\n.");    
    genBenchmarkCase();
    for ( var i = 0; i < 1000000000 ; i++ ){}; // <-- let gc and everything that need to run, run.

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    fnBase2Util.toNumber(testArr_1[i]);
    }
    end = Date.now();
    result = end - start;
    console.log(___func___ + ".toNumber() parsed '" + testCase + "' strings of length 1 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    fnBase2Util.toNumber(testArr_10[i]);
    }
    end = Date.now();
    result = end - start;
    console.log(___func___ + ".toNumber() parsed '" + testCase + "' strings of length 10 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    fnBase2Util.toNumber(testArr_20[i]);
    }
    end = Date.now();
    result = end - start;
    console.log(___func___ + ".toNumber() parsed '" + testCase + "' strings of length 20 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    fnBase2Util.toNumber(testArr_32[i]);
    }
    end = Date.now();
    result = end - start;
    console.log(___func___ + ".toNumber() parsed '" + testCase + "' strings of length 32 in '" + result + "' ms.");   

    start = Date.now();
    for (var i = 0; i < testCase; i++){
	    fnBase2Util.toNumber(testArr_53[i]);
    }
    end = Date.now();
    result = end - start;
    console.log(___func___ + ".toNumber() parsed '" + testCase + "' strings of length 53 in '" + result + "' ms.");     
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
