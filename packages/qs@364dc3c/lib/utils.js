var internals={};exports.arrayToObject=function(e){for(var t={},n=0,i=e.length;i>n;++n)e[n]!==void 0&&(t[n]=e[n]);return t},exports.clone=function(e){if("object"!=typeof e||null===e)return e;if(Buffer.isBuffer(e))return""+e;var t=Array.isArray(e)?[]:{};for(var n in e)e.hasOwnProperty(n)&&(t[n]=exports.clone(e[n]));return t},exports.merge=function(e,t){if(!t)return e;var n=exports.clone(e);if(Array.isArray(t)){for(var i=0,r=t.length;r>i;++i)t[i]!==void 0&&(n[i]="object"==typeof n[i]?exports.merge(n[i],t[i]):t[i]);return n}Array.isArray(n)&&(n=exports.arrayToObject(n));for(var a=Object.keys(t),s=0,o=a.length;o>s;++s){var l=a[s],c=t[l];n[l]=c&&"object"==typeof c?n[l]?exports.merge(n[l],c):exports.clone(c):c}return n},exports.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},exports.compact=function(e){if("object"!=typeof e||null===e)return e;var t={};for(var n in e)if(e.hasOwnProperty(n))if(Array.isArray(e[n])){t[n]=[];for(var i=0,r=e[n].length;r>i;i++)e[n][i]!==void 0&&t[n].push(e[n][i])}else t[n]=exports.compact(e[n]);return t};