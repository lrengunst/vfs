var Montage=require("../../core").Montage,Context=require("mousse/deserialization/context").Context,MontageReviver=require("./montage-reviver").MontageReviver,Promise=require("../../promise").Promise,MontageInterpreter=Montage.specialize({_require:{value:null},_reviver:{value:null},init:{value:function(t,e){if("function"!=typeof t)throw Error("Function 'require' missing.");return this._reviver=(new MontageReviver).init(t,e),this._require=t,this}},instantiate:{value:function(t,e,n){var i;return i=(new MontageContext).init(t,this._reviver,e,n,this._require),i.getObjects()}},preloadModules:{value:function(t){var e,n,i,r,a=this._reviver,s=a.moduleLoader,o=[];for(var l in t)e=t[l],n=e.prototype||e.object,n&&(i=MontageReviver.parseObjectLocationId(n),r=s.getModule(i.moduleId,l),Promise.isPromise(r)&&o.push(r));return o.length>0?Promise.all(o):void 0}}}),MontageContext=Montage.specialize.call(Context,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(t,e,n,i,r){return Context.call(this,t,e,n),this._element=i,this._require=r,this}},hasObject:{value:function(t){return t in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(t){var e="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+t+'"]';return this._element.querySelector(e)}},setUnitsToDeserialize:{value:function(t,e,n){this._unitsToDeserialize.push({object:t,objectDesc:e,unitNames:n})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});exports.MontageInterpreter=MontageInterpreter,exports.MontageContext=MontageContext;