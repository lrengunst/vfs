var deprecationWarning=exports.deprecationWarning=function deprecationWarning(t,e,a){if(a=a===!0?2:a){var n=Error.stackTraceLimit;Error.stackTraceLimit=a}if("undefined"!=typeof console&&"function"==typeof console.warn){var s=a?Error("").stack:"";e?console.warn(t+" is deprecated, use "+e+" instead.",s):console.warn(t,s)}a&&(Error.stackTraceLimit=n)};exports.deprecateMethod=function(t,e,a,n){var s=function(){return deprecationWarning(a,n,3),e.apply(t?t:this,arguments)};return s.deprecatedFunction=e,s},exports.callDeprecatedFunction=function(t,e,a,n){var s,i,r=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(s=Montage.getInfoForObject(t).objectName,n?console.warn(a+" is deprecated, use "+n+" instead.",s):console.warn(a,s)),Error.stackTraceLimit=r,i=ARRAY_PROTOTYPE.slice.call(arguments,4),e.apply(t?t:this,i)};