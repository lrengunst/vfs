montageDefine("300a273","core/serialization/deserializer/properties-deserializer",{dependencies:["../../core"],factory:function(e,t){var n=e("../../core").Montage,i=n.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},initWithObjectAndObjectDescriptorAndContext:{value:function(e,t,n){return this._object=e,this._objectDescriptor=t,this._context=n,this}},get:{value:function(e){return this._objectDescriptor.properties?this._objectDescriptor.properties[e]:void 0}},deserializeProperties:{value:function(e){var t,i=this._object,r=this._objectDescriptor.properties;if(r){e||(e=n.getSerializablePropertyNames(i));for(var a=0,s=e.length;s>a;a++)t=e[a],i[t]=r[t]}}},getObjectByLabel:{value:function(e){this._context.getObject(e)}}});t.PropertiesDeserializer=i}});