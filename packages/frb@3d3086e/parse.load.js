montageDefine("3d3086e","parse",{dependencies:["collections/shim","./grammar"],factory:function(e,t,n){function i(e,t){if(Array.isArray(e))return{type:"tuple",args:e.map(function(e){return i(e,t)})};if(!t&&Object.prototype.hasOwnProperty.call(a,e))return a[e];try{var n=r.parse(e,t||Object.empty);return t||(a[e]=n),n}catch(s){throw s.message=s.message.replace(/[\s\.]+$/,"")+" "+" on line "+s.line+" column "+s.column,s}}e("collections/shim");var r=e("./grammar"),a={};n.exports=i}});