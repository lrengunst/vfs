montageDefine("300a273","ui/checkbox.reel/checkbox",{dependencies:["ui/check-control"],factory:function(e,t){var n=e("ui/check-control").CheckControl;t.Checkbox=n.specialize({enterDocument:{value:function(e){this.super(e),e&&this.element.setAttribute("role","checkbox")}}})}});