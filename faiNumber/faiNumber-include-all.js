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
/* Version 1.0.0.f load file. */
(function () {
    var namespaces = ["fnBase2Util", "fnBase3Util", "fnBase8Util", "fnBase10Util", "fnBase16Util",
                      "fnDecimalUtil", "fnBinaryUtil", "fnHexUtil", "fnOctalUtil",
                      "fnNumberStringUtil"
                     ];

    if (typeof module !== 'undefined' && module.exports) {
        var faiNumber = {};

        for ( var i in namespaces ){
            faiNumber[namespaces[i]] = require("./" + namespaces[i]);
        }

        module.exports = faiNumber;
    } else {
        var scriptObj = document.getElementsByTagName("script"), path;

        for ( var i = 0; i < scriptObj.length; i++ ){
            var    sp = scriptObj[i].src,
                index = sp.lastIndexOf("faiNumber-include-all.js");

            if( index !== -1 ){
                path = sp.substring(0, index);
            }
        }

        if ( path === undefined ){
           console.log("faiNumber load fail. couldn't find path");
           return;
        }

        var oReq = [];
        for ( var i = 0; i < namespaces.length; i++ ){
            oReq[i] = new XMLHttpRequest();

            oReq[i].onload = function(name, xhr){
                var a = (new Function("{" + xhr.responseText + " return "+name+"; }"))();
                if ( window[name] === undefined ){
                    window[name] = a;
                    return;
                } else {
                    if ( window[name].fileversion < a.fileversion ){
                        window[name] = a;
                        return;
                    }
                }
            }.bind(null, namespaces[i], oReq[i]);

            oReq[i].open("GET", path + namespaces[i] + ".js");
            oReq[i].send();
        }
    }
})();
