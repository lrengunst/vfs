montageDefine("300a273","core/meta/derived-property-blueprint",{dependencies:["./property-blueprint","../logger"],factory:function(e,t){"use strict";var n=e("./property-blueprint").PropertyBlueprint;e("../logger").logger("blueprint");var r={dependencies:[],getterDefinition:"",setterDefinition:""};t.DerivedPropertyBlueprint=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},serializeSelf:{value:function(e){this.dependencies.length>0&&this._setPropertyWithDefaults(e,"dependencies",this.dependencies),this._setPropertyWithDefaults(e,"getterDefinition",this.getterDefinition),this._setPropertyWithDefaults(e,"setterDefinition",this.setterDefinition)}},deserializeSelf:{value:function(e){this.dependencies=this._getPropertyWithDefaults(e,"dependencies"),this.getterDefinition=this._getPropertyWithDefaults(e,"getterDefinition"),this.setterDefinition=this._getPropertyWithDefaults(e,"setterDefinition")}},_setPropertyWithDefaults:{value:function(e,t,n){n!=r[t]&&e.setProperty(t,n)}},_getPropertyWithDefaults:{value:function(e,t){var n=e.getProperty(t);return n?n:r[t]}},isDerived:{get:function(){return!0},serializable:!1},dependencies:{value:[],distinct:!0},getterDefinition:{value:r.getterDefinition},setterDefinition:{value:r.setterDefinition}})}});