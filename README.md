# faiNumber-JS

faiNumber-JS is a numerical library for Javascript.

faiNumber-JS mainly deals with converting strings of number to number
type and numerically comparing strings. 

This library is a safe library and will only parse values for strings
within the range of `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`
(The safe range). For strings with values that outside of "the safe range", 
this library will return undefined when parsing them to values of type
number.

Currently, faiNumber-JS supports converting numerical strings
of radix 2, 3, 8, 10, 16 to values of type number.

When it come to comparing integer strings beyond the safe range, this
library supports comparing strings of any length(bound by memory
limitation) of integer values of any radix between 2 to 36 without
needing to convert them to type number values.

faiNumber-JS library does support nodeJS and can be imported as modules
into nodeJS projects.

One of faiNumber-JS goals is to be able to provide support for all
numbering systems between 2 and 36. Future support for float is also
another goal of this library.

This library does not have any dependency and will maintain that way as
that is also one of this library goal.

This library does not remove any API that was released in any final
build versions without a notice spanning 3 major release versions.

Before using some of the methods of this library, it is recommended to
read the documentation for what they do before using them as some of the
methods of this library were built for expert usage. The previous is
especially true for any assume**** methods that provide by this library.

## Benchmark
<a href="https://github.com/kevinhng86/faiNumber-JS/blob/master/benchmark.md">Benchmark</a>

## Help
<a href="https://lib.fai.host/js/faiNumber/v1/">faiNumber's API Documentation</a>

## License
<a href="https://github.com/kevinhng86/faiNumber-JS/blob/master/LICENSE">MIT</a>
