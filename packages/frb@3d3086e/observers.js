function makeLiteralObserver(e){return function(t){return t(e)}}function observeValue(e,t){return e(t.value)}function observeParameters(e,t){return e(t.parameters)}function makeElementObserver(e){return function(t,n){return t(n.document.getElementById(e))}}function makeComponentObserver(e){return function(t,n){var i=n.components,r=i.getObjectByLabel||i.getComponentByLabel,a=r.call(i,e);return t(a)}}function observeProperty(e,t,n,i){function r(e,t,i){a&&a(),a=n(e,t,i)}if(null==e)return n();var a;return PropertyChanges.addOwnPropertyChangeListener(e,t,r,i.beforeChange),r(e[t],t,e),function(){a&&a(),PropertyChanges.removeOwnPropertyChangeListener(e,t,r,i.beforeChange)}}function makePropertyObserver(e,t){return function(n,i){return t(function(t){return"string"!=typeof t&&"number"!=typeof t?n():e(function(e){return null==e?n():e.observeProperty?e.observeProperty(t,n,i):_observeProperty(e,t,n,i)},i)},i)}}function observeGet(e,t,n,i){function r(e,i,r){s(t,i)&&(a&&a(),a=n(e,t,r))}var a,s=e.contentEquals||Object.equals;return r(e.get(t),t,e),e.addMapChangeListener(r,i.beforeChange),function(){a&&a(),e.removeMapChangeListener(r)}}function makeGetObserver(e,t){return function(n,i){return e(function(e){return e?t(function(t){return null==t?n():e.observeGet?e.observeGet(t,n,i):_observeGet(e,t,n,i)},i):n()},i)}}function makeHasObserver(e,t){return function(n,i){return n=makeUniq(n),t(function(t){return e(function(e){return e?e.addRangeChangeListener?observeRangeChange(e,function(){return n((e.has||e.contains).call(e,t))},i):e.addMapChangeListener?observeMapChange(e,function(){return n(e.has(t))},i):n():n()},i)},i)}}function makeObserversObserver(e){return function(t,n){for(var i=[],r=[],a=0;e.length>a;a++)i[a]=void 0,r[a]=function(e,t){return e(function(e){i.set(t,e)},n)}(e[a],a);var s=t(i);return function(){s&&s();for(var e=0;r.length>e;e++)s=r[e],s&&s()}}}function makeObjectObserver(e){return function(t,n){var i={},r={};for(var a in e)(function(e,t){r[e]=void 0,i[e]=t(function(t){r[e]=t},n)})(a,e[a]);var s=t(r);return function(){s&&s();for(var e in i)s=i[e],s&&s()}}}function makeArrayObserver(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return makeObserversObserver(e)}function makeOperatorObserverMaker(e){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var i=makeObserversObserver(t),r=makeRangeContentObserver(i);return function(t,n){return r(function(n){return n.every(Operators.defined)?t(e.apply(void 0,n)):t()},n)}}}function makeMethodObserverMaker(e){var t=e.slice(0,1).toUpperCase()+e.slice(1),n="make"+t+"Observer",i="observe"+t;return function(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1),a=makeObserversObserver(r),s=makeRangeContentObserver(a);return function(a,o){return t(function(t){return t?t[n]?t[n].apply(t,r)(a,o):t[i]?t[i](a,o):s(function(n){return n.every(Operators.defined)?"function"==typeof t[e]?a(t[e].apply(t,n)):a():a()},o):a()},o)}}}function makeNotObserver(e){return function(t,n){return e(function(e){return t(!e)},n)}}function makeAndObserver(e,t){return function(n,i){return e(function(e){return e?t(n,i):n(e)},i)}}function makeOrObserver(e,t){return function(n,i){return e(function(e){return e?n(e):t(n,i)},i)}}function makeConditionalObserver(e,t,n){return function(i,r){return e(function(e){return null==e?i():e?t(i,r):n(i,r)},r)}}function makeDefinedObserver(e){return function(t,n){return e(function(e){return t(null!=e)},n)}}function makeDefaultObserver(e,t){return function(n,i){return e(function(e){return null==e?t(n,i):n(e)},i)}}function makeReplacingMapBlockObserver(e,t){return function(n,i){return e(function(e){function r(t){for(;e.length>t;t++)o[t].index=t}function a(e,n,a){swap(o,a,n.length,e.map(function(e,t){return{index:a+t}})),r(a+e.length);var c,u,h=[],d=a,p=a+n.length;for(d=a,p=a+n.length;p>d;d++)u=l[d],u&&u();swap(l,a,n.length,e.map(function(e,n){var r=o[a+n];return t(function(e){c?s.set(r.index,e):h[n]=e},i.nest(e))})),c=!0,s.swap(a,n.length,h)}if(!e)return n();var s=[],o=[],l=[],c=observeRangeChange(e,a,i),u=n(s,e);return function(){u&&u();for(var e=0,t=l.length;t>e;e++)u=l[e],u&&u();c()}},i)}}function makeReplacingFilterBlockObserver(e,t){var n=makeReplacingMapBlockObserver(e,t);return function(e,t){return n(function(n,i){function r(e){for(;n.length>e;e++)l[e+1]=l[e]+!!n[e]}function a(e,t,n){var a=i.slice(n,n+e.length),o=t.map(Boolean).sum(),c=a.filter(function(t,n){return e[n]}),u=l[n],h=s.slice(u,u+o);(h.length!==c.length||h.some(function(e,t){return e!==c[t]}))&&s.swap(u,o,c),r(u)}if(!i)return e();var s=[],o=[],l=[0],c=observeRangeChange(n,a,t),u=e(s);return function(){u&&u();for(var e=0,t=o.length;t>e;e++)u=o[e],u&&u();c()}},t)}}function makeSortedBlockObserver(e,t){var n=makeRelationEntryObserver(t),i=makeReplacingMapBlockObserver(e,n),r=function(e,t){return i(function(n){function i(e,t){a.deleteEach(t),a.addEach(e)}if(!n)return e();var r=[],a=SortedArray(r,entryValueEquals,entryValueCompare),s=observeRangeChange(n,i,t),o=e(r);return function(){o&&o(),s()}},t)};return makeMapBlockObserver(r,observeEntryKey)}function entryValueEquals(e,t){return Object.equals(e[1],t[1])}function entryValueCompare(e,t){return Object.compare(e[1],t[1])}function makeRelationEntryObserver(e){return function(t,n){return e(function(e){return t([n.value,e])},n)}}function makeSortedSetBlockObserver(e,t){var n=makeRelationEntryObserver(t),i=makeReplacingMapBlockObserver(e,n),r=makeGroupBlockObserver(i,observeEntryValue),a=makeReplacingMapBlockObserver(r,makeLastObserver(observeEntryValue));return function(e,t){function n(e,t){return e=o.get(e),t=o.get(t),Object.compare(e,t)}function i(e,t){return e=o.get(e),t=o.get(t),Object.equals(e,t)}function r(e,t){t.forEach(function(e){l["delete"](e[0]),o["delete"](e[0])}),e.forEach(function(e){o.set(e[0],e[1]),l.add(e[0])})}function s(e){return l.clear(),observeRangeChange(e,r,t)}var o=new Map,l=new SortedSet(null,i,n),c=e(l),u=a(s,t);return function(){c&&c(),u()}}}function makeReplacingReversedObserver(e){return function(t,n){return e(function(e){function i(e,t,n){var i=r.length-n-t.length;r.swap(i,t.length,e.reversed())}if(!e)return t();var r=[],a=observeRangeChange(e,i,n),s=t(r);return function(){s&&s(),a()}},n)}}function makeReplacingFlattenObserver(e){return function(t,n){return e(function(e){function i(t){for(var n=t;e.length>n;n++)l[n].index=n,o[n+1]=e[n]?o[n]+e[n].length:o[n]}function r(e,t,r){var c=o[r],u=o[r+t.length],h=u-c;a.swap(c,h,[]),swap(l,r,t.length,e.map(function(){return{index:null}})),i(r);for(var d,p=r,u=r+t.length;u>p;p++)d=s[p],d&&d();swap(s,r,t.length,e.map(function(e,t){function s(e,t,n){i(c.index);var r=o[c.index]+n,s=o[c.index]+n+t.length,l=s-r;a.swap(r,l,e)}var c=l[r+t];return observeRangeChange(e,s,n)}))}if(!e)return t();var a=[],s=[],o=[0],l=[],c=observeRangeChange(e,r,n),u=t(a);return function(){u&&u();for(var e=0,t=s.length;t>e;e++)u=s[e],u&&u();c()}},n)}}function makeConcatObserver(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return makeFlattenObserver(makeObserversObserver(e))}function makeSomeBlockObserver(e,t){var n=makeFilterBlockObserver(e,t),i=makePropertyObserver(n,observeLengthLiteral);return makeConverterObserver(i,Boolean)}function makeEveryBlockObserver(e,t){var n=makeConverterObserver(t,Operators.not),i=makeFilterBlockObserver(e,n),r=makePropertyObserver(i,observeLengthLiteral);return makeConverterObserver(r,Operators.not)}function makeGroupBlockObserver(e,t){var n=makeGroupMapBlockObserver(e,t);return makeEntriesObserver(n)}function makeGroupMapBlockObserver(e,t){var n=makeRelationEntryObserver(t),i=makeReplacingMapBlockObserver(e,n);return function(e,t){return i(function(n,i){function r(e,t){t.forEach(function(e){var t=a.get(e[1]);1===t.length?a["delete"](e[1]):t["delete"](e[0])}),e.forEach(function(e){var t,n=!a.has(e[1]);t=n?i.constructClone():a.get(e[1]),t.add(e[0]),n&&a.set(e[1],t)})}if(!n)return e();var a=Map(),s=observeRangeChange(n,r,t),o=e(a);return function(){s(),o&&o()}},t)}}function makeHeapBlockObserver(e,t,n){function i(e,t){return Object.compare(e[1],t[1])*n}var r=makeRelationEntryObserver(t),a=makeReplacingMapBlockObserver(e,r);return function(e,t){return a(function(n){function r(e,t){s.addEach(e),s.deleteEach(t)}function a(t,n){return 0===n?t?e(t[0]):e():void 0}if(!n)return e();var s=new Heap(null,entryValueEquals,i),o=observeRangeChange(n,r,t),l=observeMapChange(s,a,t);return function(){o(),l()}},t)}}function makeMaxBlockObserver(e,t){return makeHeapBlockObserver(e,t,1)}function makeMinBlockObserver(e,t){return makeHeapBlockObserver(e,t,-1)}function makeMaxObserver(e){return makeHeapBlockObserver(e,observeValue,1)}function makeMinObserver(e){return makeHeapBlockObserver(e,observeValue,-1)}function makeCollectionObserverMaker(e){return function(t){return function(n,i){return n=makeUniq(n),t(function(t){if(!t)return n();var r=e(t,n);return observeRangeChange(t,function(e,t,i){return n(r(e,t,i))},i)},i)}}}function isNumber(e){return"number"==typeof e&&!isNaN(e)}function makeReplacingViewObserver(e,t,n){return n||(n=t,t=observeZero),function(i,r){return e(function(e){function a(t,n,i){if(h){var r=t.length-n.length;o>=i?r>0?(u.swap(0,0,e.slice(o,o+r)),u.splice(s,u.length-s)):(u.splice(0,-r),u.swap(u.length,0,e.slice(o+u.length,o+s))):o+s>i&&(u.swap(i-o,n.length,t),r>0?u.splice(s,u.length-s):u.swap(u.length,0,e.slice(o+u.length,o+s)))}}if(!e)return i();var s,o,l,c,u=[],h=!1,d=observeRangeChange(e,a,r),p=n(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof t&&"number"==typeof o,i=Math.max(0,t);"number"==typeof c&&(i=Math.min(i,e.length-c)),h!==n?(n?u.swap(0,0,e.slice(c,c+i)):u.clear(),h=n):h&&l!==i&&(l>i?u.splice(t,l-i):u.swap(l,0,e.slice(c+l,c+i))),s=t,l=i},r),g=t(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof s&&"number"==typeof t,i=Math.max(0,t);"number"==typeof s&&(i=Math.min(i,e.length));var r=Math.max(0,s);if("number"==typeof i&&(r=Math.min(r,e.length-i)),h!==n)n?u.swap(0,u.length,e.slice(i,i+r)):u.clear(),h=n;else if(h&&c!==i){var a=Math.abs(i-c);l>a&&c>i?(u.swap(0,0,e.slice(i,c)),u.splice(r,u.length-r)):l>a&&i>c?(u.swap(u.length,0,e.slice(c+l,i+r)),u.splice(0,u.length-r)):u.swap(0,u.length,e.slice(i,i+r))}o=t,c=i,l=r},r),m=i(u);return function(){m&&m(),p(),g(),d()}},r)}}function makeReplacingEnumerateObserver(e){return function(t,n){return e(function(e){function i(e){for(;a.length>e;e++)a[e].set(0,e)}function r(e,t,n){a.swap(n,t.length,e.map(function(e,t){return[n+t,e]})),i(n+e.length)}if(!e)return t();var a=[],s=observeRangeChange(e,r,n),o=t(a);return function(){o&&o(),s()}},n)}}function makeRangeObserver(e){return function(t,n){var i=[],r=t(i),a=e(function(e){if(e>>>=0,null==e)i.clear();else if(e>i.length){for(var t=[],n=i.length;e>n;n++)t.push(n);i.swap(i.length,0,t)}else i.length>e&&i.splice(e,i.length)},n);return function(){r&&r(),a&&a()}}}function makeStartsWithObserver(e,t){return function(n,i){return t(function(t){if("string"!=typeof t)return n();var r=RegExp("^"+RegExp.escape(t));return e(function(e){return"string"!=typeof e?n():n(r.test(e))},i)},i)}}function makeEndsWithObserver(e,t){return function(n,i){return t(function(t){if("string"!=typeof t)return n();var r=RegExp(RegExp.escape(t)+"$");return e(function(e){return"string"!=typeof e?n():n(r.test(e))},i)},i)}}function makeContainsObserver(e,t){return function(n,i){return t(function(t){if("string"!=typeof t)return n();var r=RegExp(RegExp.escape(t));return e(function(e){return"string"!=typeof e?n():n(r.test(e))},i)},i)}}function makeJoinObserver(e,t){return t=t||observeNullString,function(n,i){return e(function(e){return e?t(function(t){function r(){a&&a(),a=n(e.join(t))}if("string"!=typeof t)return n();var a,s=observeRangeChange(e,r,i);return function(){s(),a&&a()}},i):n()},i)}}function observeRangeChange(e,t,n){function i(e,n,i){r&&r(),r=t(e,n,i)}if(!e)return Function.noop;var r;if(!e.toArray)return Function.noop;if(!e.addRangeChangeListener)return Function.noop;i(e.toArray(),[],0);var a=e.addRangeChangeListener(i,null,n.beforeChange);return function(){r&&r(),a()}}function makeLastObserver(e){return function(t,n){return e(function(e){return _observeLast(e,t,n)},n)}}function observeLast(e,t,n){function i(n,i,o){if(a+=n.length-i.length,!(a>o+i.length&&a>o+n.length)){var l=0>a?null:e.get(a);r&&r(),r=t(l),s=l}}var r,a=-1,s=null,o=observeRangeChange(e,i,n);return function(){r&&r(),o&&o()}}function makeOnlyObserver(e){return function(t,n){return e(makeUniq(function(e){return observeOnly(e,t,n)}),n)}}function observeOnly(e,t,n){function i(n,i){return r+=n.length-i.length,1!==r?t():t(e.only())}var r=0;return observeRangeChange(e,i,n)}function makeOneObserver(e){return function(t,n){return e(makeUniq(function(e){return observeOne(e,t,n)}),n)}}function observeOne(e,t,n){function i(n,i){return r+=n.length-i.length,0===r?t():t(e.one())}var r=0;return observeRangeChange(e,i,n)}function makeRangeContentObserver(e){return function(t,n){return e(function(e){return e&&e.addRangeChangeListener?observeRangeChange(e,function(){return t(e)},n):t(e)},n)}}function makeMapContentObserver(e){return function(t,n){return e(function(e){return e&&e.addMapChangeListener?observeMapChange(e,function(){return t(e)},n):t(e)},n)}}function observeMapChange(e,t,n){function i(e,n,i){var a=r.get(n);r["delete"](n),a&&a(),a=t(e,n,i),void 0===e?a&&a():r.set(n,a)}if(e.addMapChangeListener){var r=new Map;e.forEach(i);var a=e.addMapChangeListener(i,n.beforeChange);return function(){r.forEach(function(e){e&&e()}),a()}}}function makeReplacingEntriesObserver(e){return function(t,n){return e(function(e){return e?observeEntries(e,t,n):t()},n)}}function observeEntries(e,t,n){function i(e,t){var n,i;a.has(t)?null==e?(n=a.get(t),a["delete"](t),i=r.indexOf(n),r.splice(i,1)):(n=a.get(t),n.set(1,e)):(n=[t,e],a.set(t,n),r.push(n))}var r=[],a=Map(),s=t(r),o=observeMapChange(e,i,n);return function(){s&&s(),o&&o()}}function makeKeysObserver(e){var t=makeEntriesObserver(e);return makeMapBlockObserver(t,observeEntryKey)}function observeEntryKey(e,t){return t.value?e(t.value[0]):e()}function makeValuesObserver(e){var t=makeEntriesObserver(e);return makeMapBlockObserver(t,observeEntryValue)}function observeEntryValue(e,t){return t.value?e(t.value[1]):e()}function makeToMapObserver(e){return function(t,n){var i=new Map,r=t(i),a=e(function(e){if(i.clear(),e&&"object"==typeof e){if(e.addRangeChangeListener)return observeUniqueEntries(function(e){function t(e,t){t.forEach(function(e){i["delete"](e[0])}),e.forEach(function(e){i.set(e[0],e[1])})}return observeRangeChange(e,t,n)},n.nest(e));if(e.addMapChangeListener)return observeMapChange(e,function(e,t){void 0===e?i["delete"](t):i.set(t,e)},n);var t=[],r=0;for(var a in e)t[r++]=_observeProperty(e,a,function(e){void 0===e?i["delete"](a):i.set(a,e)},n);return function(){for(var e=0,n=t.length;n>e;e++)t[e]()}}},n)||Function.noop;return function(){r&&r(),a()}}}function makeParentObserver(e){return function(t,n){return n.parent?e(t,n.parent):t()}}function makeConverterObserver(e,t,n){return function(i,r){return i=makeUniq(i),e(function(e){return i(t.call(n,e))},r)}}function makeComputerObserver(e,t,n){return function(i,r){return i=makeUniq(i),e(function(e){return e&&e.every(Operators.defined)?i(t.apply(n,e)):void 0},r)}}function makeExpressionObserver(e,t){var n=require("./parse"),i=require("./compile-observer");return function(r,a){return r=makeUniq(r),t(function(t){if(null==t)return r();var s,o;try{s=n(t),o=i(s)}catch(l){return r()}return e(function(e){return o(r,a.nest(e))},a)},a)}}function makeWithObserver(e,t){return function(n,i){return e(function(e){return null==e?n():t(function(e){return null==e?n():n(e)},i.nest(e))},i)}}function makeNonReplacing(e){return function(){var t=e.apply(this,arguments);return function(e,n){var i=[],r=t(function(e){function t(e,t,n){i.swap(n,t.length,e)}return e&&e.addRangeChangeListener?(merge(i,e),e.addRangeChangeListener(t,null,n.beforeChange),function(){e.removeRangeChangeListener(t,null,n.beforeChange)}):(i.clear(),void 0)},n),a=e(i);return function(){r&&r(),a&&a()}}}}function makeUniq(e){var t;return function(n){if(n!==t){var i=e.apply(this,arguments);return t=n,i}}}function cancelEach(e){e.forEach(function(e){e&&e()})}function autoCancelPrevious(e){var t;return function(){return t&&t(),t=e.apply(this,arguments),function(){t&&t(),t=void 0}}}function swap(e,t,n,i){0>t?t=e.length+t:t>e.length&&(e.length=t),t+n>e.length?n=e.length-t:0>n&&(n=0);var r=i.length-n,a=e.length,s=e.length+r;if(r>0)for(var o=a-1;o>=t+n;o--){var l=o+r;o in e?e[l]=e[o]:(e[l]=void 0,delete e[l])}for(var o=0;i.length>o;o++)o in i?e[t+o]=i[o]:(e[t+o]=void 0,delete e[t+o]);if(0>r)for(var o=t+i.length;a-r>o;o++){var l=o-r;l in e?e[o]=e[l]:(e[o]=void 0,delete e[o])}e.length=s}require("collections/shim");var PropertyChanges=require("collections/listen/property-changes");require("collections/listen/array-changes");var SortedArray=require("collections/sorted-array"),SortedSet=require("collections/sorted-set"),Map=require("collections/map"),Set=require("collections/set"),Heap=require("collections/heap"),Scope=require("./scope"),Operators=require("./operators");exports.makeLiteralObserver=makeLiteralObserver,exports.observeValue=observeValue,exports.observeParameters=observeParameters,exports.makeElementObserver=makeElementObserver,exports.makeComponentObserver=makeComponentObserver,exports.observeProperty=observeProperty;var _observeProperty=observeProperty;exports.makePropertyObserver=makePropertyObserver,exports.observeKey=observeGet,exports.observeGet=observeGet;var _observeGet=observeGet;exports.makeGetObserver=makeGetObserver,exports.makeHasObserver=makeHasObserver,exports.makeObserversObserver=makeObserversObserver,exports.makeRecordObserver=makeObjectObserver,exports.makeObjectObserver=makeObjectObserver,exports.makeTupleObserver=makeArrayObserver,exports.makeArrayObserver=makeArrayObserver,exports.makeOperatorObserverMaker=makeOperatorObserverMaker,exports.makeMethodObserverMaker=makeMethodObserverMaker,exports.makeNotObserver=makeNotObserver,exports.makeAndObserver=makeAndObserver,exports.makeOrObserver=makeOrObserver,exports.makeConditionalObserver=makeConditionalObserver,exports.makeDefinedObserver=makeDefinedObserver,exports.makeDefaultObserver=makeDefaultObserver;var makeMapBlockObserver=exports.makeMapBlockObserver=makeNonReplacing(makeReplacingMapBlockObserver),makeFilterBlockObserver=exports.makeFilterBlockObserver=makeNonReplacing(makeReplacingFilterBlockObserver);exports.makeSortedBlockObserver=makeSortedBlockObserver,exports.makeSortedSetBlockObserver=makeSortedSetBlockObserver,exports.makeReversedObserver=makeNonReplacing(makeReplacingReversedObserver);var makeFlattenObserver=exports.makeFlattenObserver=makeNonReplacing(makeReplacingFlattenObserver);exports.makeConcatObserver=makeConcatObserver,exports.makeSomeBlockObserver=makeSomeBlockObserver,exports.makeEveryBlockObserver=makeEveryBlockObserver,exports.makeGroupBlockObserver=makeGroupBlockObserver,exports.makeGroupMapBlockObserver=makeGroupMapBlockObserver,exports.makeMaxBlockObserver=makeMaxBlockObserver,exports.makeMinBlockObserver=makeMinBlockObserver,exports.makeMaxObserver=makeMaxObserver,exports.makeMinObserver=makeMinObserver;var observeLengthLiteral=makeLiteralObserver("length");exports.makeSumObserver=makeCollectionObserverMaker(function(){var e=0;return function(t,n){return t=t.filter(isNumber),n=n.filter(isNumber),e+=t.sum()-n.sum()}}),exports.makeAverageObserver=makeCollectionObserverMaker(function(){var e=0,t=0;return function(n,i){return n=n.filter(isNumber),i=i.filter(isNumber),e+=n.sum()-i.sum(),t+=n.length-i.length,e/t}}),exports.makeViewObserver=makeNonReplacing(makeReplacingViewObserver);var observeZero=makeLiteralObserver(0);exports.makeEnumerateObserver=makeNonReplacing(makeReplacingEnumerateObserver),exports.makeEnumerationObserver=exports.makeEnumerateObserver,exports.makeRangeObserver=makeRangeObserver,exports.makeStartsWithObserver=makeStartsWithObserver,exports.makeEndsWithObserver=makeEndsWithObserver,exports.makeContainsObserver=makeContainsObserver,exports.makeJoinObserver=makeJoinObserver;var observeNullString=makeLiteralObserver("");exports.observeRangeChange=observeRangeChange,exports.makeLastObserver=makeLastObserver,exports.observeLast=observeLast;var _observeLast=observeLast;exports.makeOnlyObserver=makeOnlyObserver,exports.observeOnly=observeOnly,exports.makeOneObserver=makeOneObserver,exports.observeOne=observeOne,exports.makeRangeContentObserver=makeRangeContentObserver,exports.makeMapContentObserver=makeMapContentObserver,exports.observeMapChange=observeMapChange;var makeEntriesObserver=exports.makeEntriesObserver=makeNonReplacing(makeReplacingEntriesObserver);exports.observeEntries=observeEntries,exports.makeKeysObserver=makeKeysObserver,exports.observeEntryKey=observeEntryKey,exports.makeValuesObserver=makeValuesObserver,exports.observeEntryValue=observeEntryValue,exports.makeToMapObserver=makeToMapObserver;var observeUniqueEntries=makeMapBlockObserver(makeGroupBlockObserver(observeValue,observeEntryKey),makeLastObserver(observeEntryValue));exports.makeParentObserver=makeParentObserver,exports.makeConverterObserver=makeConverterObserver,exports.makeComputerObserver=makeComputerObserver,exports.makePathObserver=makeExpressionObserver,exports.makeExpressionObserver=makeExpressionObserver,exports.makeWithObserver=makeWithObserver,exports.makeToArrayObserver=makeNonReplacing(Function.identity),exports.makeAsArrayObserver=exports.makeToArrayObserver;var merge=require("./merge").merge;exports.makeUniq=makeUniq,exports.cancelEach=cancelEach,exports.autoCancelPrevious=autoCancelPrevious;