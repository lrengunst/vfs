montageDefine("300a273","core/serialization/serializer/montage-labeler",{dependencies:["../../core","mousse/serialization/labeler"],factory:function(e,t){var n=e("../../core").Montage,i=e("mousse/serialization/labeler").Labeler;t.MontageLabeler=n.specialize.call(i,{_labelRegexp:{value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},constructor:{value:function(){i.call(this)}},getTemplatePropertyLabel:{value:function(e){var t=this.superForValue("getObjectLabel")(e);if(":"!==t[0])throw Error("Template property's labels need to start with a colon (:), (\""+t+'").');return t}},getObjectLabel:{value:function(e){var t=this.super(e);if(":"===t[0])throw Error('Labels starting with colon (:) can only be used for template properties, ("'+t+'").');return t}},getObjectName:{value:function(e){var t,r=e.identifier;return r&&this._labelRegexp.test(r)?t=e.identifier:"getInfoForObject"in e||"getInfoForObject"in e.constructor?(t=n.getInfoForObject(e).objectName,t=t.toLowerCase()):t=i.prototype.getObjectName.call(this,e),t}}})}});