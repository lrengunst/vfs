montageDefine("300a273","core/converter/currency-converter",{dependencies:["../core","./converter","./number-converter"],factory:function(e,t){e("../core").Montage,e("./converter");var n=e("./number-converter").NumberConverter;t.CurrencyConverter=n.specialize({currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},showCurrencyBeforeNumber:{value:!1},forceDecimals:{value:!0},convert:{value:function(e){var t=this.super(e);return 0>e&&this.useParensForNegative&&(t="("+t.substring(1,t.length)+")"),t=this.showCurrencyBeforeNumber?this.currency+" "+t:t+" "+this.currency}}})}});