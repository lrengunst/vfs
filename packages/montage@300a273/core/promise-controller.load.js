montageDefine("300a273","core/promise-controller",{dependencies:["./core","./promise"],factory:function(t,e){var n=t("./core").Montage,i=t("./promise").Promise;e.PromiseController=n.specialize({constructor:{value:function(){this.reset=null,this.addOwnPropertyChangeListener("promise",this),this.promise=null,this.defineBindings({"state == 'pending'":{"<-":"pending"},"state == 'fulfilled'":{"<-":"fulfilled"},"state == 'rejected'":{"<-":"rejected"},"progressState == 'determinate'":{"<-":"pending && determinate"},"progressState == 'indeterminate'":{"<-":"pending && determinate"},"progressState == 'fulfilled'":{"<-":"fulfilled"},"progressState == 'rejected'":{"<-":"rejected"}})}},promise:{value:null},state:{value:null},progressState:{value:null},pending:{value:null},fulfilled:{value:null},rejected:{value:null},determinate:{value:null},progress:{value:null},value:{value:null},error:{value:null},handlePromiseChange:{value:function(t){var e=this;t=i.resolve(t),e.reset&&e.reset();var n=!1;e.reset=function(){n=!0},e.value=null,e.error=null,e.progress=0,e.determinate=!1,e.pending=!0,e.fulfilled=!1,e.rejected=!1,t.then(function(t){n||(e.fulfilled=!0,e.value=t,e.progress=1)},function(t){n||(e.rejected=!0,e.error=t)},function(t){n||(e.progress=t,e.determinate="number"==typeof t)})}}},{blueprintModuleId:t("./core")._blueprintModuleIdDescriptor,blueprint:t("./core")._blueprintDescriptor})}});