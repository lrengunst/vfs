montageDefine("a3030d2","ui/popup/notifier.reel/notifier",{dependencies:["montage/ui/component","ui/popup/popup.reel"],factory:function(e,t){var n=e("montage/ui/component").Component,i=e("ui/popup/popup.reel").Popup,r=t.Notifier=n.specialize({_msgEl:{value:null},_msg:{value:null},msg:{get:function(){return this._msg},set:function(e){this._msg!==e&&(this._msg=e,this.needsDraw=!0)}},details:{value:null},draw:{value:function(){this._msgEl.textContent=this.msg}},show:{value:function(e,t,n){var a,s=this.application._notifyPopup;s||(s=new i,this.popup=s,s.type="notify",this.application._notifyPopup=s,a=new r,s.content=a),a=s.content,a.msg=e,n||(window.innerWidth,n={top:1,right:10}),s.position=n,t&&(t=parseInt(t,10)||3e3,s.autoHide=t),s.show()}},hide:{value:function(){var e=this.application._notifyPopup;e&&e.hide()}}})}});