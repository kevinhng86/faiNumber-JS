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
/* 
 * Only include when not yet include, or if previous include(s) had a
 * lower file version.
 **/
if ( !fnBase16Util || (fnBase16Util && fnBase16Util.fileversion < 1) ){
  
/** 
 * <p>The <code>fnBase16Util</code> namespace is a namespace that provides
 * functions for converting base 16 integer numbers in string
 * representation to values of type <code>number</code>.
 *
 * <p>To use this API alone by itself, include fnBase16Util.js.
 * Otherwise, include faiNumber-include-all.js.
 * 
 * <p>This namespace API provides the function  
 * {@link fnBase16Util.toNumberAsUnsigned toNumberAsUnsigned}
 * that can parse unsigned base 16 numbers to values of type number. 
 * Unsigned parsing can be used for cases were it is known that the
 * value or pool of values do not contain signs, or for value(s) that
 * shouldn't be negative(without the positive sign). For parsing values
 * that are signed use {@link fnBase16Util.toNumber toNumber}.
 * 
 * <p>This namespace API also provides functions for comparing strings
 * pertain to the mathematical aspect. The 
 * {@link fnBase16Util.compareAsNumber compareAsNumber} of this
 * namespace API can compare strings by their actual number values when
 * the strings are valid strings of signed base 16 integer number
 * that can be parsed to type number values.
 *
 * <p>Strings can also be compared using the
 * {@link fnBase16Util.numberOrSmaller numberOrSmaller} method,
 * of which compares the strings bases on their content reference to
 * number values.</p>
 *
 * @author  Khang Hoang Nguyen
 *
 * @since  1.0.0.f
 *
 * @namespace
 **/
var fnBase16Util = {};

/** File version number. **/
fnBase16Util.fileversion = 1;

/**
 * Parse the input string as a string of signed base 16 integer number 
 * to a value of type number.
 *
 * @param  {string} input
 *         A string to be parsed as a signed base 16 integer number to
 *         a value of type number.
 *
 * @return  {number} A value of the <code>input</code> string if the
 *          <code>input</code> string is a valid string of signed
 *          base 16 integer number. 
 * 
 * @return  {undefined} <p>A value of undefined is returned if the
 *          <code>input</code> string is not a valid string of signed
 *          base 16 integer number. Undefined is also returned where the
 *          <code>input</code> string is empty. 
 * 
 *          <p>Parsing a value that is larger than the value of
 *          Number.MAX_SAFE_INTEGER(9007199254740991), or smaller than 
 *          the value of Number.MIN_SAFE_INTEGER(-9007199254740991)
 *          will yield an undefined value.</p>
 * 
 * @throws  {string} "Not a string"
 *          if the <code>input</code> is not of string type.
 *
 * @since  1.0.0.f
 **/
fnBase16Util.toNumber = function (input) {
    if ( typeof input !== "string" ) throw "Not a string";
    
    var length = input.length;
    if ( length === 0 ) return;
    var c1 = input.charCodeAt(0); 

    if ( c1 === 45 || c1 === 43 ){
        if ( length === 1 ) return;
        var start = 1;
    } else {
        var start = 0;
    }

    var out = 0, c;    
    while( start < length && input.charCodeAt(start) === 48 ) start++;
    if ( length - start > 14 ) return;

    for ( ; start < length; start++){
        c = input.charCodeAt(start);
        
        if ( c > 96 & c < 103 ) c -= 87;
        else if ( c > 64 && c < 71) c -= 55;
        else {
           c = c ^ 48;
           if ( c > 9 ) return;
        }
        
        out = (out * 16) + c;
    }

    if ( out > 9007199254740991 ) return;
    if ( c1 === 45 ) return out * -1;
    return out;
}

/**
 * Parse the input string as a string of unsigned base 16 integer number
 * to a value of type number.
 *
 * @param  {string} input
 *         A string to be parsed as an unsigned base 16 integer number
 *         to a value of type number.
 *
 * @return  {number} A value of type number of the <code>input</code>
 *          string if the <code>input</code> string is a valid string of
 *          unsigned base 16 integer number. 
 * 
 * @return  {undefined} <p>A value of undefined is returned if the
 *          <code>input</code> string is not a valid string of unsigned
 *          base 16 integer number. Undefined is also returned where the 
 *          <code>input</code> string is empty.
 * 
 *          <p>Parsing a value that is larger than the value of
 *          Number.MAX_SAFE_INTEGER(9007199254740991) will yield an
 *          undefined value.</p>
 * 
 * @throws  {string} "Not a string"
 *          if the <code>input</code> is not of string type.
 *
 * @since  1.0.0.f
 **/
fnBase16Util.toNumberAsUnsigned = function (input) {
    if ( typeof input !== "string" ) throw "Not a string";
    
    var length = input.length;
    if ( length === 0 ) return;
    var start = 0;
    
    var out = 0, c;    
    while( start < length && input.charCodeAt(start) === 48 ) start++;
    if ( length - start > 14 ) return;
    
    for ( ; start < length; start++){
        c = input.charCodeAt(start);
        
        if ( c > 96 & c < 103 ) c -= 87;
        else if ( c > 64 && c < 71) c -= 55;
        else {
           c = c ^ 48;
           if ( c > 9 ) return;
        }
        
        out = (out * 16) + c;
    }

    if ( out > 9007199254740991 ) return;
    return out;
}

/**
 * <p>Compare two strings as signed base 16 integer numbers by parsing 
 * them to type number values first.
 * 
 * <p>Take note that comparing strings with values larger than 
 * Number.MAX_SAFE_INTEGER or smaller than Number.MIN_SAFE_INTEGER
 * will yield an undefined value.
 *
 * <p>This function does not throw errors. However, the
 * {@link fnBase16Util.toNumber toNumber} function uses by this function
 * throws errors.</p>
 *
 * @param  {string} firstNumber
 *         A string to be compared to the string <code>secondNumber</code>.
 *
 * @param  {string} secondNumber
 *         A string to be compared to the string <code>firstNumber</code>.
 *
 * @return  {string} A value of 1 if the <code>firstNumber</code> string
 *          is larger than the <code>secondNumber</code> string, 0 if
 *          they are both equal, or -1 if the <code>firstNumber</code>
 *          string is smaller than the <code>secondNumber</code> string. 
 *
 * @return  {undefined} If parsing either one of the input strings
 *          yielded an undefined value, an undefined value is returned.
 * 
 * @see  {@link fnBase16Util.toNumber toNumber}
 *
 * @since  1.0.0.f
 **/
fnBase16Util.compareAsNumber = function(firstNumber, secondNumber){
    var n1 = this.toNumber(firstNumber),
        n2 = this.toNumber(secondNumber);
    
    if ( n1 === undefined || n2 === undefined ) return;

    if ( n1 > n2 ) return 1;
    else if ( n1 < n2 ) return -1;
    return 0;
}

/**
 * <p>Compare two strings bases on the content of the strings reference
 * to values of type number. If the strings are valid strings of signed
 * base 16 integer number that can be parsed to type number values
 * then they will be compared base on their number values. Otherwise,
 * the strings will be compared base on the priority ranking order below.
 * 
 * <p>Take note that this method treats strings with values larger than 
 * Number.MAX_SAFE_INTEGER or smaller than Number.MIN_SAFE_INTEGER as
 * undefined.
 *
 * <p>This function does not throw any error. However, the 
 * {@link fnBase16Util.toNumber toNumber} ultilizes by this function
 * throws error.
 *
 * <p>Priority order ranking: (lo - hi)</br>
 * 0 - Undefined(NaN/Not a safe value)</br>
 * 1 - Empty strings</br>
 * 2 - Valid number values in range of MIN_SAFE_INTEGER and MAX_SAFE_INTEGER</p>
 *
 * @param  {string} firstNumber
 *         A string to be compared to the string <code>secondNumber</code>.
 *
 * @param  {string} secondNumber
 *         A string to be compared to the string <code>firstNumber</code>.
 *
 * @return  {number} A value of 1 if the <code>firstNumber</code> string
 *          is larger than the <code>secondNumber</code> string, 0 if
 *          they are both equal, or -1 if the <code>firstNumber</code>
 *          string is smaller than the <code>secondNumber</code> string. 
 *
 * @see  {@link fnBase16Util.toNumber toNumber}
 * 
 * @since  1.0.0.f
 **/
fnBase16Util.numberOrSmaller = function(firstNumber, secondNumber){
    var n1 = this.toNumber(firstNumber),
        n2 = this.toNumber(secondNumber);

    if ( firstNumber.length === 0 ){
        if ( secondNumber.length === 0 ) return 0;
      
        if ( n2 !== undefined ) return -1;
        else return 1;
    } else if ( secondNumber.length === 0 ){
        if ( n1 !== undefined ) return 1;
        else return -1;
    }

    if ( n1 === undefined ){
        if ( n2 === undefined ) return 0;
        else return -1;
    } else if ( n2 === undefined ) return 1;

    if ( n1 > n2 ) return 1;
    else if ( n1 < n2 ) return -1;
    return 0;
}

Object.freeze(fnBase16Util);

} // <-- Declaring if needed

(function () {
    if (typeof module !== 'undefined' && module.exports) module.exports = fnBase16Util;
})();
