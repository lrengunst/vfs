"use strict";var Montage=require("../core").Montage,logger=require("../logger").logger("blueprint"),Defaults={name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",enumValues:[],helpKey:""};exports.PropertyBlueprint=Montage.specialize({constructor:{value:function(){this.superForValue("constructor")()}},initWithNameBlueprintAndCardinality:{value:function(t,e,n){return this._name=null!==t?t:Defaults.name,this._owner=e,this.cardinality=n>0?n:Defaults.cardinality,this}},serializeSelf:{value:function(t){t.setProperty("name",this.name),t.setProperty("blueprint",this._owner,"reference"),1/0===this.cardinality?t.setProperty("cardinality",-1):this._setPropertyWithDefaults(t,"cardinality",this.cardinality),this._setPropertyWithDefaults(t,"mandatory",this.mandatory),this._setPropertyWithDefaults(t,"readOnly",this.readOnly),this._setPropertyWithDefaults(t,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(t,"valueType",this.valueType),this._setPropertyWithDefaults(t,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(t,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(t,"valueObjectModuleId",this.valueObjectModuleId),this.enumValues.length>0&&this._setPropertyWithDefaults(t,"enumValues",this.enumValues),this._setPropertyWithDefaults(t,"helpKey",this.helpKey)}},deserializeSelf:{value:function(t){this._name=t.getProperty("name"),this._owner=t.getProperty("blueprint"),this.cardinality=this._getPropertyWithDefaults(t,"cardinality"),-1===this.cardinality&&(this.cardinality=1/0),this.mandatory=this._getPropertyWithDefaults(t,"mandatory"),this.readOnly=this._getPropertyWithDefaults(t,"readOnly"),this.denyDelete=this._getPropertyWithDefaults(t,"denyDelete"),this.valueType=this._getPropertyWithDefaults(t,"valueType"),this.collectionValueType=this._getPropertyWithDefaults(t,"collectionValueType"),this.valueObjectPrototypeName=this._getPropertyWithDefaults(t,"valueObjectPrototypeName"),this.valueObjectModuleId=this._getPropertyWithDefaults(t,"valueObjectModuleId"),this.enumValues=this._getPropertyWithDefaults(t,"enumValues"),this.helpKey=this._getPropertyWithDefaults(t,"helpKey")}},_setPropertyWithDefaults:{value:function(t,e,n){n!=Defaults[e]&&t.setProperty(e,n)}},_getPropertyWithDefaults:{value:function(t,e){var n=t.getProperty(e);return n?n:Defaults[e]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:Defaults.cardinality},mandatory:{value:Defaults.mandatory},denyDelete:{value:Defaults.denyDelete},readOnly:{value:Defaults.readOnly},isAssociationBlueprint:{get:function(){return!1}},isToMany:{get:function(){return 1/0===this.cardinality||this.cardinality>1}},isDerived:{get:function(){return!1}},valueType:{value:Defaults.valueType},collectionValueType:{value:Defaults.collectionValueType},valueObjectPrototypeName:{value:Defaults.valueObjectPrototypeName},valueObjectModuleId:{value:Defaults.valueObjectModuleId},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(t){Array.isArray(t)&&(this._enumValues=t)}},helpKey:{value:Defaults.helpKey},blueprintModuleId:require("../core")._blueprintModuleIdDescriptor,blueprint:require("../core")._blueprintDescriptor});