var Montage=require("../core").Montage,ActionEventListener=exports.ActionEventListener=Montage.specialize({handler:{value:null},action:{value:null},initWithHandler_action_:{value:function(t,e){return this.handler=t,this.action=e,this}},handleEvent:{value:function(t){if("function"==typeof this.action){var e=this.handler?this.handler:this;this.action.call(e,t)}else this.handler&&this.action&&this.handler[this.action](t)}},serializeProperties:{value:function(t){t.set("handler",this.handler,"reference"),t.set("action",this.action)}}},{blueprintModuleId:require("../core")._blueprintModuleIdDescriptor,blueprint:require("../core")._blueprintDescriptor});