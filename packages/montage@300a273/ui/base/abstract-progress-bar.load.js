montageDefine("300a273","ui/base/abstract-progress-bar",{dependencies:["./abstract-control"],factory:function(e,t){var n=e("./abstract-control").AbstractControl,i=t.AbstractProgressBar=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractProgressBar cannot be instantiated.");this.super()}}});i.addAttributes({value:{dataType:"number"},max:{dataType:"number"}})}});