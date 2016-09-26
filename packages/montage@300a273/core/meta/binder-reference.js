"use strict";var Promise=require("../promise").Promise,RemoteReference=require("./remote-reference").RemoteReference,BinderModule=require("./binder"),logger=require("../logger").logger("blueprint");exports.BinderReference=RemoteReference.create(RemoteReference,{constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(t,e){var n=t.binderName,a=t.binderModuleId,i=Promise.defer(),r=BinderModule.Binder.manager.binderForName(n);if(r)i.resolve(r);else try{var s=e,l=a.indexOf("/");if(l>0){var o=a.substring(0,l),c=e.mappings;o in c&&(a=a.substring(l+1),s=s.getPackage(c[o].location))}i=BinderModule.Binder.getBinderWithModuleId(a,s)}catch(h){i.reject(Error("Error cannot find Blueprint Binder "+a))}return i.promise}},referenceFromValue:{value:function(t){var e={};return e.binderName=t.name,e.binderModuleId=t.binderModuleId,e}}});