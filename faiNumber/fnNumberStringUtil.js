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
if ( !fnNumberStringUtil || (fnNumberStringUtil && fnNumberStringUtil.fileversion < 1) ){ 

/**
 * <p>The <code>fnNumberStringUtil</code> namespace provides functions 
 * for working with numbers in String format.
 *
 * <p>To use this API alone by itself, include fnNumberStringUtil.js.
 * Otherwise, include faiNumber-include-all.js.
 *
 * <p>This namespace provide functions for validating strings to see
 * whether if they are valid number and for comparing strings of number.
 * 
 * <p>This namespace has the assume**** functions, of which operate on
 * strings with the assumption that the strings are valid number values.
 * For comparing string of numbers there are the assumeCompare**** 
 * functions.
 * 
 * <p>Under the right circumstance, the assume**** functions are very
 * powerful and fast functions. However, under that use case, the strings
 * must be valid number strings for the functions to produce the correct
 * result. Thus, the assume**** functions of this namespace are good for 
 * circumstances where the input data have been validated before usage
 * and there isn't a need for revalidating the data. 
 *
 * <p>For an example of one of the assume**** function of this namespace
 * API, the assumeCompare function of this namespace API besides being
 * able to compare numbers, it can also compare dates with fix format.
 * Format like YYYY-MM-DD, YYYY/MM/DD, or similar can be compared.
 * However, for correct results, the month, day, or year value must
 * consistenly be in the same amount of digits(i.e. year 500 and 2000
 * have to be written as 0500 and 1000, or month 1 and 12 have to be
 * written as 01 and 12). Also, year always have to be first, then month,
 * then finally day.
 *
 * <p>Example usage of the 
 * {@link fnNumberStringUtil.assumeCompare assumeCompare} function.
 *
 * <p><pre class="lang-javascript line-numbers"><code>var a = "1208925819614629174706176";
 * var b = "1208925819614629174706177";
 * console.log(fnNumberStringUtil.assumeCompare(a,b));
 *
 * var d1 = "2018-01-23";
 * var d2 = "2018-12-24";
 * console.log(fnNumberStringUtil.assumeCompare(d1,d2));
 *
 * var d3 = "2018-12-24";
 * var d4 = "2018-12-03";
 * console.log(fnNumberStringUtil.assumeCompare(d3,d4));
 * </code></pre></p>
 * 
 * <p>For comparing strings of numbers, besides the 
 * {@link fnNumberStringUtil.assumeCompare assumeCompare} or
 * the {@link fnNumberStringUtil.assumeCompareAllBase assumeCompareAllBase}
 * function, this namespace API also provide the 
 * {@link fnNumberStringUtil.compare compare} and the 
 * {@link fnNumberStringUtil.compareAsBase compareAsBase} function
 * for comparing strings of number where there is a need to validate
 * the strings when comparing. 
 * 
 * <p>For speed-wise, the assumeCompare**** and compare**** functions 
 * of this namespace API excel in circumstance where the strings do not 
 * have to be compared up until the last digit to know which string is
 * larger or smaller. 
 * 
 * <p>Another advantage of the compare**** and assumeCompare**** functions
 * is that, there isn't a upper bound on the length of the input strings.
 * That is as long as memory allow.</p>
 * 
 * @author  Khang Hoang Nguyen
 *
 * @since  1.0.0.f
 * 
 * @namespace
 **/
var fnNumberStringUtil = {};

/** File version number. **/
fnNumberStringUtil.fileversion = 1;

/**
 * Check if a string is a valid signed decimal integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid signed decimal integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isInteger = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return false;
    
    if ( input.charCodeAt(0) === 45 || input.charCodeAt(0) === 43 ) {
        if ( length === 1 ) return false;
        var first = 1;
    } else var first = 0;

    while( length-- > first ){
        if ( (input.charCodeAt(length) ^ 48) > 9 ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid unsigned decimal integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid unsigned decimal integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isUnsignedInteger = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return false;

    while( length-- > 0 ){
        if ( (input.charCodeAt(length) ^ 48) > 9 ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid signed binary integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid signed binary integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isBinary = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return false;

    if ( input.charCodeAt(0) === 45 || input.charCodeAt(0) === 43 ) {
        if ( length === 1 ) return false;
        var first = 1;
    } else var first = 0;

    while( length-- > first ){
       if ( (input.charCodeAt(length) ^ 48) > 1 ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid unsigned binary integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid unsigned binary integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isUnsignedBinary = function(input){
    if ( typeof input !== "string" ) throw "Not a string";
    
    var length = input.length;
    if ( length === 0 ) return false;

    while( length-- > 0 ){
        if ( (input.charCodeAt(length) ^ 48) > 1 ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid signed octal integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid signed octal integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isOctal = function(input){
    if ( typeof input !== "string" ) throw "Not a string";
   
    var length = input.length;
    if ( length === 0 ) return false;

    if ( input.charCodeAt(0) === 45 || input.charCodeAt(0) === 43 ) {
        if ( length === 1 ) return false;
        var first = 1;
    } else var first = 0;

    while( length-- > first ){
        if ( (input.charCodeAt(length) ^ 48) > 7 ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid unsigned octal integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid unsigned octal integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isUnsignedOctal = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return false;

    while( length-- > 0 ){
        if ( (input.charCodeAt(length) ^ 48) > 7 ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid signed hexadecimal integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid signed hexadecimal integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isHex = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return false;
    
    if ( input.charCodeAt(0) === 45 || input.charCodeAt(0) === 43 ) {
        if ( length === 1 ) return false;
        var first = 1;
    } else var first = 0;

    var c;

    while (length-- > first){
        c = input.charCodeAt(length);

        if ( c > 96 & c < 103 ){}
        else if ( c > 64 && c < 71 ){}
        else {
            c ^= 48;
            if ( c > 9 ) return false;
        }
    }

    return true;
}

/**
 * Check if a string is a valid unsigned hexadecimal integer.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid unsigned hexadecimal integer, or otherwise, false.
 *
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isUnsignedHex = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return false;

    var c;

    while (length-- > 0){
        c = input.charCodeAt(length);

        if ( c > 96 && c < 103 ){}
        else if ( c > 64 && c < 71 ){}
        else {
            c ^= 48;
            if ( c > 9 ) return false;
        }
    }

    return true;
}

/**
 * Check if a string is a valid signed integer of the defined radix.
 *
 * @param  {string} input
 *         A string.
 * 
 * @param  {number} base
 *         A value that defines the number radix.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid signed integer of the radix that defined by the
 *          <code>base</code>'s value, or otherwise, false.
 * 
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 *
 * @throws  {string} "Not a number"
 *          if <code>base</code> is not of number type.
 * 
 * @throws  {string} "Unsupported base"
 *          if <code>base</code> value is smaller than 2 or larger than
 *          36.
 *
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isBase = function(input, base){
    if ( typeof input !== "string" ) throw "Not a string";
    if ( typeof base !== "number" ) throw "Not a number";
    if ( base < 2 || base > 36 ) throw "Unsupported base";

    var length = input.length;
    if ( length === 0 ) return false;

    if ( input.charCodeAt(0) === 45 || input.charCodeAt(0) === 43 ) {
        if ( length === 1 ) return false;
        var first = 1;
    } else var first = 0;

    var c;

    while (length-- > first){
        c = input.charCodeAt(length);

        if ( c > 96 ) c -= 87;
        else if ( c > 64 ) c -= 55;
        else {
            c ^= 48;
            if ( c > 9 ) return false;
        }

        if ( !(c < base) ) return false;
    }

    return true;
}

/**
 * Check if a string is a valid unsigned integer of the defined radix.
 *
 * @param  {string} input
 *         A string.
 * 
 * @param  {number} base
 *         A value that defines the number radix.
 *
 * @return  {boolean} A value of true if the <code>input</code> string
 *          is a valid unsigned integer of the radix that defined by the
 *          <code>base</code>'s value, or otherwise, false.
 * 
 * @throws  {string} "Not a string"
 *          if <code>input</code> is not of string type.
 *
 * @throws  {string} "Not a number"
 *          if <code>base</code> is not of number type.
 * 
 * @throws  {string} "Unsupported base"
 *          if <code>base</code> value is smaller than 2 or larger than
 *          36.
 *
 * @since  1.0.0.f
 **/
fnNumberStringUtil.isUnsignedBase = function(input, base){
    if ( typeof input !== "string" ) throw "Not a string";
    if ( typeof base !== "number" ) throw "Not a number";
    if ( base < 2 || base > 36 ) throw "Unsupported base";

    var length = input.length;
    if ( length === 0 ) return false;

    var c;

    while ( length-- > 0 ){
        c = input.charCodeAt(length);

        if ( c > 96 ) c -= 87;
        else if ( c > 64 ) c -= 55;
        else {
            c ^= 48;
            if ( c > 9 ) return false;
        }

        if ( !(c < base) ) return false;
    }

    return true;
}

/**
 * Check if a string is an odd number with the assumption that the
 * string is a valid decimal integer in string representation.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the last character in the 
 *          string is an odd value, or otherwise, false .
 *
 * @return  {undefined} An undefined value is returned if the string is
 *          empty.
 *
 * @since  1.0.0.f
 **/
fnNumberStringUtil.assumeIsOdd = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return;
    return ((input.charCodeAt(length - 1) & 1) !== 0);
}

/**
 * Check if a string is an even number with the assumption that the
 * string is a valid decimal integer in string representation.
 *
 * @param  {string} input
 *         A string.
 *
 * @return  {boolean} A value of true if the last character in the 
 *          string is an odd value, or otherwise, false .
 *
 * @return  {undefined} An undefined value is returned if the string is
 *          empty.
 *
 * @since  1.0.0.f
 **/
fnNumberStringUtil.assumeIsEven = function(input){
    if ( typeof input !== "string" ) throw "Not a string";

    var length = input.length;
    if ( length === 0 ) return;
    return ((input.charCodeAt(length - 1) & 1) === 0);
}

/**
 * <p>Compare two strings with the assumption that both strings are
 * valid decimal integers.
 *
 * <p>This function evaluates both, negative and positive values. This
 * function may produce unwanted result if the previous is not met or if
 * the number formatting is incorrect.
 *
 * <p>This function considers empty strings as smallest. This function
 * disregards leading zeroes. This function considers a string with
 * only a '-' or a '+' sign as 0.
 * </p>
 *
 * @param  {string} firstString
 *         A string to be compared to the <code>secondString</code> string.
 *
 * @param  {string} secondString
 *         A string to be compared to the <code>firstString</code> string.
 *
 * @return  {number} A value of 1 if the <code>firstString</code> is
 *          larger than the <code>secondString</code>, -1 if the
 *          <code>firstString</code> is smaller than the 
 *          <code>secondString</code>, or 0 if both strings are equal.
 *
 * @throws  {string} "Not a string"
 *          if either the <code>firstString</code> or the 
 *          <code>secondString</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.assumeCompare = function(firstString, secondString){
    if ( typeof firstString !== "string" ) throw "Not a string";
    if ( typeof secondString !== "string" ) throw "Not a string";

    var str1length = firstString.length,
        str2length = secondString.length;

    if ( str1length === 0 ){
        if ( str2length === 0 ) return 0;
        return -1;
    } else if (str2length === 0){
        return 1;
    }
    var start1 = 0, start2 = 0;
    var neg1 = false, neg2 = false;

    if( firstString.charCodeAt(0) === 45 ){
        neg1 = true;
        start1 = 1;
    } else if( firstString.charCodeAt(0) === 43 ) start1 = 1;

    if( secondString.charCodeAt(0) === 45 ){
        neg2 = true;
        var start2 = 1;
    } else if( secondString.charCodeAt(0) === 43 ) var start2 = 1;

    while( start1 < str1length && firstString.charCodeAt(start1) === 48 ) start1++;
    while( start2 < str2length && secondString.charCodeAt(start2) === 48 ) start2++;
    var runlen1 = str1length - start1,
        runlen2 = str2length - start2;

    if ( runlen1 === 0 ){
        if ( runlen2 === 0 ) return 0;
        if ( neg2 === true ) return 1;
        return -1;
    } else if ( runlen2 === 0 ){
        if ( neg1 === true ) return -1;
        return 1;
    }

    if ( neg1 !== neg2 ){
        if ( neg1 === false ) return 1;
        if ( neg1 === true ) return -1;
    }

    var c1, c2;

    if ( neg1 === true ){
        if ( runlen1 > runlen2 ) return -1;
        else if ( runlen1 < runlen2 ) return 1;
   
        while ( runlen1-- !== 0 ){
            c1 = firstString.charCodeAt(start1++);
            c2 = secondString.charCodeAt(start2++);
            if ( c1 < c2 ) return 1;
            if ( c1 > c2 ) return -1;
        }
    } else if ( neg1 === false ){
        if ( runlen1 > runlen2 ) return 1;
        else if ( runlen1 < runlen2 ) return -1;

        while( runlen1-- !== 0 ){
            c1 = firstString.charCodeAt(start1++);
            c2 = secondString.charCodeAt(start2++);
            if ( c1 > c2 ) return 1;
            if ( c1 < c2 ) return -1;
        }
    }

    return 0;
}

/**
 * <p>Compare two strings with the assumption that both strings are
 * valid integers of any radix between 2 and 36.
 *
 * <p>This function evaluates both, negative and positive values.
 * This function will work, if both strings are integers of the same
 * radix and the radix is from 2 to 36. This function may produce
 * unwanted result if the previous are not met or if the formatting
 * is incorrect.
 *
 * <p>Digits of radix larger than 10 are 'a' to 'z' with
 * 'a'  being 10, and 'z' being 35. A is equal to a, Z is equal to
 * z, and so forth.
 *
 * <p>This function considers empty strings as smallest. This function
 * disregards leading zeroes. This function considers a string with
 * only a '-' or a '+' sign as 0.
 * </p>
 *
 * @param  {string} firstString
 *         A string to be compared to the <code>secondString</code> string.
 *
 * @param  {string} secondString
 *         A string to be compared to the <code>firstString</code> string.
 *
 * @return  {number} A value of 1 if the <code>firstString</code> is larger
 *          than the <code>secondString</code>, -1 if the
 *          <code>firstString</code> is smaller than the
 *          <code>secondString</code>, or 0 if both strings are equal.
 *
 * @throws  {string} "Not a string"
 *          if either the <code>firstString</code> or the 
 *          <code>secondString</code> is not of string type.
 *
 * @since  1.0.0.f
 **/
fnNumberStringUtil.assumeCompareAllBase = function(firstString, secondString){
    if ( typeof firstString !== "string" ) throw "Not a string";
    if ( typeof secondString !== "string" ) throw "Not a string";

    var str1length = firstString.length,
        str2length = secondString.length;

    if ( str1length === 0 ){
        if ( str2length === 0 ) return 0;
        return -1;
    } else if ( str2length === 0){
        return 1;
    }

    var start1 = 0, start2 = 0;
    var neg1 = false, neg2 = false;
 
    if( firstString.charCodeAt(0) === 45 ){
        neg1 = true;
        var start1 = 1;
    } else if( firstString.charCodeAt(0) === 43 ) var start1 = 1;

    if( secondString.charCodeAt(0) === 45 ){
        neg2 = true;
        var start2 = 1;
    } else if( secondString.charCodeAt(0) === 43 ) var start2 = 1;

    while( start1 < str1length && firstString.charCodeAt(start1) === 48 ) start1++;
    while( start2 < str2length && secondString.charCodeAt(start2) === 48 ) start2++;
    var runlen1 = str1length - start1,
        runlen2 = str2length - start2;

    if ( runlen1 === 0 ){
        if ( runlen2 === 0 ) return 0;
        if ( neg2 === true ) return 1;
        return -1;
    } else if ( runlen2 === 0 ){
        if ( neg1 === true ) return -1;
        return 1;
    }

    if ( neg1 != neg2 ){
        if ( neg1 === false ) return 1;
        if ( neg1 === true ) return -1;
    }

    var c1, c2;

    if ( neg1 === true ){
        if ( runlen1 > runlen2 ) return -1;
        else if ( runlen1 < runlen2 ) return 1;

        while ( runlen1-- != 0 ){
            c1 = firstString.charCodeAt(start1++);
            c2 = secondString.charCodeAt(start2++);

            if ( c1 > 96) c1 -= 87;
            else if ( c1 > 64) c1 -= 55;
            else c1 ^= 48;

            if ( c2 > 96) c2 -= 87;
            else if ( c2 > 64) c2 -= 55;
            else c2 ^= 48;

            if ( c1 < c2 ) return 1;
            if ( c1 > c2 ) return -1;
        }
    } else if ( neg1 === false ){
        if ( runlen1 > runlen2 ) return 1;
        else if ( runlen1 < runlen2 ) return -1;

        while( runlen1-- != 0 ){
            c1 = firstString.charCodeAt(start1++);
            c2 = secondString.charCodeAt(start2++);

            if ( c1 > 96) c1 -= 87;
            else if ( c1 > 64) c1 -= 55;
            else c1 ^= 48;

            if ( c2 > 96) c2 -= 87;
            else if ( c2 > 64) c2 -= 55;
            else c2 ^= 48;

            if ( c1 > c2 ) return 1;
            if ( c1 < c2 ) return -1;
        }
    }

    return 0;
}
 
/**
 * <p>Compare two strings as decimal integers. This function evaluates
 * both, negative and positive values. This function return an undefined 
 * value if either one of the strings is an invalid decimal integer.
 * Nonetheless, the strings can be very large in length. This function
 * disregard leading zeroes.
 *
 * @param  {string} firstString
 *         A string to be compared to the <code>secondString</code> string.
 *
 * @param  {string} secondString
 *         A string to be compared to the <code>firstString</code> string.
 *
 * @return  {number} A value of 1 if the <code>firstString</code> is larger
 *          than the <code>secondString</code>, -1 if the 
 *          <code>firstString</code> is smaller than the 
 *          <code>secondString</code>, or 0 if both strings are equal.
 *
 * @return  {undefined} An undefined value is returned if either one of
 *          strings is not a valid decimal integer, or if either one of 
 *          the strings is empty.
 * 
 * @throws  {string} "Not a string"
 *          if either the <code>firstString</code> or the 
 *          <code>secondString</code> is not of string type.
 * 
 * @since  1.0.0.f
 **/
fnNumberStringUtil.compare = function(firstString, secondString){
    if ( typeof firstString !== "string" ) throw "Not a string";
    if ( typeof secondString !== "string" ) throw "Not a string";

    var str1length = firstString.length,
        str2length = secondString.length,
               out = 2;

    if ( str1length === 0 || str2length === 0 ) return;

    var start1 = 0, start2 = 0;
    var neg1 = false, neg2 = false;
   
    if( firstString.charCodeAt(0) === 45 ){
        if ( str1length === 1 ) return;
        neg1 = true;
        var start1 = 1;
    } else if( firstString.charCodeAt(0) === 43 ){
        if ( str1length === 1 ) return;
        var start1 = 1;
    }

    if( secondString.charCodeAt(0) === 45 ){
        if ( str2length === 1 ) return;
        neg2 = true;
        var start2 = 1;
    } else if( secondString.charCodeAt(0) === 43 ){
        if ( str2length === 1 ) return;
        var start2 = 1;
    }

    while( start1 < str1length && firstString.charCodeAt(start1) === 48 ) start1++;
    while( start2 < str2length && secondString.charCodeAt(start2) === 48 ) start2++;
    var runlen1 = str1length - start1,
        runlen2 = str2length - start2;

    if ( runlen1 === 0 ){
        if ( runlen2 === 0 ) out = 0;
        else if ( neg2 === true ) out = 1;
        else out = -1;
    } else if ( runlen2 === 0 ){
        if ( neg1 === true ) out = -1;
        else out = 1;
    }
 
    if ( out === 2 && neg1 !== neg2 ){
        if ( neg1 === false ) out = 1;
        if ( neg1 === true ) out = -1;
    }
        
    if ( out === 2 ){
        var c1, c2;
        if ( neg1 === true ){
            if ( runlen1 > runlen2 ) out = -1;
            else if ( runlen1 < runlen2 ) out = 1;
 
            if ( out === 2 ){
                while ( runlen1-- != 0 ){
                    c1 = firstString.charCodeAt(start1++);
                    c2 = secondString.charCodeAt(start2++);
                    if ( (c1 ^ 48) > 9 ) return;
                    if ( (c2 ^ 48) > 9 ) return;
                                                
                    if ( c1 < c2 ){
                        out = 1;
                        break;
                    } 
                        
                    if ( c1 > c2 ){
                        out = -1;
                        break;
                    }
                }
            }
        } else if ( neg1 === false ){
            if ( runlen1 > runlen2 ) out = 1;
            else if ( runlen1 < runlen2 ) out = -1;
 
            if ( out === 2 ){
                while( runlen1-- != 0 ){
                    c1 = firstString.charCodeAt(start1++);
                    c2 = secondString.charCodeAt(start2++);
                    if ( (c1 ^ 48) > 9 ) return;
                    if ( (c2 ^ 48) > 9 ) return;

                    if ( c1 > c2 ) {
                        out = 1;
                        break;
                    }
                        
                    if ( c1 < c2 ) {
                        out = -1;
                        break;
                    }
                }
            }
        }
    }

    while ( start1 < str1length  ) {
        if ( (firstString.charCodeAt(start1++) ^ 48) > 9 ) return;
    }
    
    while ( start2 < str2length ) {
        if ( (secondString.charCodeAt(start2++) ^ 48) > 9 ) return;
    }

    if ( out === 2 ) return 0;
    return out;
}

/**
 * <p>Compare two strings as integers of a define radix. This function
 * evaluates both, negative and positive values. This function return an
 * undefined value if either one of the strings is an invalid integer
 * of the defined radix or if one of the strings is empty.
 * The radix of the strings can only be in between of 2 to 36. There
 * isn't a maximum length for the strings. Nonetheless, the strings 
 * can't be empty.
 *
 * @param  {string} firstString
 *         A string to be compared to the <code>secondString</code> string.
 *
 * @param  {string} secondString
 *         A string to be compared to the <code>firstString</code> string.
 *
 * @param  {number} base
 *         A value that defines the number radix for both strings.
 * 
 * @return  {number} A value of 1 if the <code>firstString</code> is
 *          larger than the <code>secondString</code>, -1 if the
 *          <code>firstString</code> is smaller than the
 *          <code>secondString</code>, or 0 if both strings are equal.
 *
 * @return  {undefined} An undefined value is returned if the either one
 *          of the strings is not a valid integer of the defined radix.
 *          A single '+' or '-' sign without any digit is an invalid
 *          value. An undefined value is also returned if either one of 
 *          the strings is empty.
 *
 * @throws  {string} "Not a string"
 *          if either <code>firstString</code> or <code>secondString</code>
 *          is not of string type.
 *
 * @throws  {string} "Not a number"
 *          if <code>base</code> is not of number type.
 * 
 * @throws  {string} "Unsupported base"
 *          if <code>base</code> value is smaller than 2 or larger than
 *          36.

 * @since  1.0.0.f
 **/
fnNumberStringUtil.compareAsBase = function(firstString, secondString, base){
    if ( typeof firstString !== "string" ) throw "Not a string";
    if ( typeof secondString !== "string" ) throw "Not a string";
    if ( typeof base !== "number" ) throw "Not a number";
    if ( base < 2 || base > 36 ) throw "Unsupported base";

    var str1length = firstString.length,
        str2length = secondString.length,
               out = 2;

    if ( str1length === 0 || str2length === 0 ) return;

    var start1 = 0, start2 = 0;
    var neg1 = false, neg2 = false;

    if( firstString.charCodeAt(0) === 45 ){
        if ( str1length === 1 ) return;
        neg1 = true;
        var start1 = 1;
    } else if( firstString.charCodeAt(0) === 43 ){
        if ( str1length === 1 ) return;
        var start1 = 1;
    }

    if( secondString.charCodeAt(0) === 45 ){
        if ( str2length === 1 ) return;
        neg2 = true;
        start2 = 1;
    } else if( secondString.charCodeAt(0) === 43 ){
        if ( str2length === 1 ) return;
        start2 = 1;
    }

    while( start1 < str1length && firstString.charCodeAt(start1) === 48 ) start1++;
    while( start2 < str2length && secondString.charCodeAt(start2) === 48 ) start2++;
    var runlen1 = str1length - start1,
        runlen2 = str2length - start2;

    if ( runlen1 === 0 ){
        if ( runlen2 === 0 ) out = 0;
        else if ( neg2 === true ) out = 1;
        else out = -1;
    } else if ( runlen2 === 0 ){
        if ( neg1 === true ) out = -1;
        else out = 1;
    }
 
    if ( out === 2 && neg1 !== neg2 ){
        if ( neg1 === false ) out = 1;
        if ( neg1 === true ) out = -1;
    }
        
    var c1, c2;
    if ( out === 2 ){
        if ( neg1 === true ){
            if ( runlen1 > runlen2 ) out = -1;
            else if ( runlen1 < runlen2 ) out = 1;
 
            if ( out === 2 ){
                while ( runlen1-- !== 0 ){
                    c1 = firstString.charCodeAt(start1++);
                    c2 = secondString.charCodeAt(start2++);
                        
                    if ( c1 > 96 ) c1 -= 87;
                    else if ( c1 > 64 ) c1 -= 55;
                    else {
                        c1 ^= 48;
                        if ( c1 > 9 ) return;
                    }
                    if ( !(c1 < base) ) return;;

                    if ( c2 > 96 ) c2 -= 87;
                    else if ( c2 > 64 ) c2 -= 55;
                    else {
                        c2 ^= 48;
                        if ( c2 > 9 ) return;
                    }
                    if ( !(c2 < base) ) return;
                        
                    if ( c1 < c2 ){
                        out = 1;
                        break;
                    } 
                        
                    if ( c1 > c2 ){
                        out = -1;
                        break;
                    }
                }
            }
        } else if ( neg1 === false ){
            if ( runlen1 > runlen2 ) out = 1;
            else if ( runlen1 < runlen2 ) out = -1;
 
            if ( out === 2 ){
                while( runlen1-- !== 0 ){
                    c1 = firstString.charCodeAt(start1++);
                    c2 = secondString.charCodeAt(start2++);
                        
                    if ( c1 > 96 ) c1 -= 87;
                    else if ( c1 > 64 ) c1 -= 55;
                    else {
                        c1 ^= 48;
                        if ( c1 > 9 ) return;
                    }
                    if ( !(c1 < base) ) return;

                    if ( c2 > 96 ) c2 -= 87;
                    else if ( c2 > 64 ) c2 -= 55;
                    else {
                        c2 ^= 48;
                        if ( c2 > 9 ) return;
                    }
                    if ( !(c2 < base) ) return;
                        
                    if ( c1 > c2 ) {
                        out = 1;
                        break;
                    }
                        
                    if ( c1 < c2 ) {
                        out = -1;
                        break;
                    }
                }
            }
        }
    }

    while ( start1 < str1length  ) {
        c1 = firstString.charCodeAt(start1++);
        if ( c1 > 96 ) c1 -= 87;
        else if ( c1 > 64 ) c1 -= 55;
        else {
            c1 ^= 48;
            if ( c1 > 9 ) return;
        }
        if ( !(c1 < base) ) return;
    }
     
    while ( start2 < str2length ) {
        c2 = secondString.charCodeAt(start2++);
        if ( c2 > 96 ) c2 -= 87;
        else if ( c2 > 64 ) c2 -= 55;
        else {
            c2 ^= 48;
            if ( c2 > 9 ) return;
        }
        if ( !(c2 < base) ) return;
    }

    if ( out === 2 ) return 0;
    return out;
}

Object.freeze(fnNumberStringUtil);

} // <-- Declaring if needed

(function () {
    if (typeof module !== 'undefined' && module.exports) module.exports = fnNumberStringUtil;
})();
