montageDefine("300a273","core/meta/event-blueprint",{dependencies:["../core","../logger"],factory:function(t,e){"use strict";var n=t("../core").Montage;t("../logger").logger("blueprint");var i={name:"default",detailKeys:[],detailValueTypes:[],helpKey:""};e.EventBlueprint=n.specialize({constructor:{value:function(){this.superForValue("constructor")(),this._detailKeys=[]}},initWithNameAndBlueprint:{value:function(t,e){return this._name=null!==t?t:i.name,this._owner=e,this}},serializeSelf:{value:function(t){t.setProperty("name",this.name),t.setProperty("blueprint",this._owner,"reference"),this.detailKeys.length>0&&this._setPropertyWithDefaults(t,"detailKeys",this.detailKeys),this._setPropertyWithDefaults(t,"helpKey",this.helpKey)}},deserializeSelf:{value:function(t){this._name=t.getProperty("name"),this._owner=t.getProperty("blueprint"),this.detailKeys=this._getPropertyWithDefaults(t,"detailKeys"),this.helpKey=this._getPropertyWithDefaults(t,"helpKey")}},_setPropertyWithDefaults:{value:function(t,e,n){n!=i[e]&&t.setProperty(e,n)}},_getPropertyWithDefaults:{value:function(t,e){var n=t.getProperty(e);return n?n:i[e]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},_detailKeys:{value:null},detailKeys:{get:function(){return this._detailKeys},set:function(t){Array.isArray(t)&&(this._detailKeys=t)}},helpKey:{value:i.helpKey},blueprintModuleId:t("../core")._blueprintModuleIdDescriptor,blueprint:t("../core")._blueprintDescriptor})}});