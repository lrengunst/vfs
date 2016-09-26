function addColorProperty(t){var e=function(t){return this._color=t,this};for(var n in SOLARIZED_COLORS)e[n]=function(e){return function(){return t.color(SOLARIZED_COLORS[e])}}(n);t.color=e}var Montage=require("./core").Montage,Logger,loggers,consoleLog,getFunctionName,toTimeString,LoggerUI,localStorage;loggers=exports.loggers={},getFunctionName=function(){var t,e=getFunctionName.caller.caller;return t=e.name,""===t&&(t="anonymous"),t},toTimeString=function(t){if(t.getHours){var e=t.getHours(),n=t.getMinutes(),a=t.getSeconds();return(1===e.length?"0"+e:e)+":"+(1===n.length?"0"+n:n)+":"+(1===a.length?"0"+a:a)+"."+t.getMilliseconds()}},consoleLog=function(){console.log(arguments)},Logger=exports.Logger=Montage.specialize({constructor:{value:function Logger(){this.super(),addColorProperty(this)}},init:{value:function(t,e,n){if(this.name=t,this._onStateChange=e,this._storeState=!n,this._storeState&&localStorage){var a=localStorage.getItem("_montage_logger_"+t);a&&(this.isDebug="true"===a)}return e&&this._onStateChange("true"===a),this.isError=!0,this}},name:{value:null},buffer:{value:[],distinct:!0},buffered:{value:!1},flush:{value:function(){var t,e,n=this.buffer;for(e=0;t=n[e];e++)this._formattedLog(t);this.buffer.length=0}},isDebug:{get:function(){return this.debug!==Function.noop},set:function(t){this.debug=t?this._consoleLogMontage:Function.noop}},isError:{get:function(){return this.error!==Function.noop},set:function(t){this.error=t?this._consoleLogMontage:Function.noop}},_consoleLogMontage:{value:function(){var t=arguments[0],e=t._montage_metadata;new Date,e?(Array.prototype.shift.call(arguments),Array.prototype.unshift.call(arguments,e.objectName+"."+getFunctionName(t)+"()"),this.buffered?this.buffer.push(arguments):this._formattedLog(arguments)):this.buffered?this.buffer.push(arguments):this._formattedLog(arguments)}},_formattedLog:{value:function(t){var e=t[0];colors.isDebug&&"string"==typeof e&&Array.prototype.splice.call(t,0,1,"%c"+e,this._logCss),console.log.apply(console,t)}},__logCss:{value:null},_logCss:{get:function(){return null===this.__logCss&&(this.__logCss="",this.__logCss+=this._color?"color:"+this._color+";":"color:black;"),this.__logCss}},debug:{value:Function.noop},error:{value:Function.noop},toTimeString:{value:toTimeString},_storeState:{value:null},_onStateChange:{value:null}});var SOLARIZED_COLORS={base03:"#002b36",base02:"#073642",base01:"#586e75",base00:"#657b83",base0:"#839496",base1:"#93a1a1",base2:"#eee8d5",base3:"#fdf6e3",yellow:"#b58900",orange:"#cb4b16",red:"#dc322f",magenta:"#d33682",violet:"#6c71c4",blue:"#268bd2",cyan:"#2aa198",green:"#859900"};exports.logger=function(t,e,n){var a;return null==(a=loggers[t])&&(a=(new Logger).init(t,e,n),Montage.defineProperty(loggers,t,{value:a})),a},LoggerUI=Montage.specialize({constructor:{value:function LoggerUI(){this.super()}},init:{value:function(){return document.nativeAddEventListener?(document.nativeAddEventListener("keyup",this,!1),document.nativeAddEventListener("keydown",this,!1)):(document.addEventListener("keyup",this,!1),document.addEventListener("keydown",this,!1)),this}},inspectorElement:{value:null},m_dontRemove:{value:null},titleHeader:{value:null},shown:{value:!1},isCtrl:{value:!1},isAlt:{value:!1},keyup:{value:function(t){17==t.which&&(this.isCtrl=!1),18==t.which&&(this.isAlt=!1)}},keydown:{value:function(t){return 17==t.which&&(this.isCtrl=!0),18==t.which&&(this.isAlt=!0),76==t.which&&this.isCtrl===!0&&this.isAlt===!0?(this.shown?this.hideInspector():this.showInspector(),!1):void 0}},change:{value:function(t){var e=t.target.checked,n=t.target.value,a=loggers[n];a.isDebug=e,a._onStateChange&&a._onStateChange(e),a._storeState&&localStorage&&localStorage.setItem("_montage_logger_"+n,e)}},mouseup:{value:function(){this.hideInspector()}},showInspector:{value:function(){if(!this.inspectorElement){var t,e,n,a,i,s,r,o,l,c,h,d=0;for(this.m_dontRemove=document.getElementsByTagName("body")[0],this.inspectorElement=document.createElement("div"),this.inspectorElement.id="_montage_logger_inspector",e=document.createElement("div"),this.inspectorElement.appendChild(e),a=document.createElement("div"),e.appendChild(a),n=document.createElement("h1"),n.className="_montage_logger_inspector-title",n.textContent="Logger Inspector",this.titleHeader=n,a.appendChild(n),l=Object.keys(loggers),d=0;t=loggers[l[d]];d++)i=document.createElement("label"),s=document.createElement("input"),h=document.createElement("span"),i.className="_montage_logger_inspector-content",h.textContent=t.name,i.appendChild(s),i.appendChild(h),s.value=t.name,s.type="checkbox",s.checked=!!t.isDebug,o="_montage_logger_"+t.name,t._storeState&&localStorage&&(r=localStorage.getItem(o),null==r&&localStorage.setItem(o,t.isDebug)),a.appendChild(i);c=document.createElement("style");var u="#_montage_logger_inspector {";u+="    border: 1px solid rgba(15,15,15,0.4);",u+="    position: fixed;",u+="    right: 25px;",u+="    top: 25px;",u+="    -webkit-border-radius: 5px;",u+="    color: #dddddd;",u+='    font: 10px "Lucida Grande","Lucida Sans", sans;',u+="    background:-webkit-gradient(linear, left top, left bottom, from(rgba(15,15,15,0.75)), to(rgba(15,15,15,0.95)) );",u+="    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.3);",u+="    width: 250px;",u+="}",u+="#_montage_logger_inspector div {",u+="    -webkit-border-radius: 5px;",u+="    background: -webkit-gradient(radial, 100 -60, 0, 125 -50, 125, from(rgba(255,255,255,0.00)), to(rgba(0,0,0,.2)), color-stop(1, rgba(0,0,0,.2)));",u+="}",u+="#_montage_logger_inspector div div {",u+="    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), to(rgba(0,0,0,.1)), color-stop(0.33, rgba(255,255,255,.01)), color-stop(0.33, rgba(50,50,50,1)) );",u+="    padding: 7px 10px;",u+="    -webkit-border-radius: 3px;",u+="    overflow-x: hidden;",u+="}",u+="._montage_logger_inspector-title {",u+="    color: rgba(255,255,255,0.9);",u+="    font-size: 13px;",u+="    margin: 0 0 11px 0;",u+="    padding: 0 0 0 5px;",u+="}",u+="._montage_logger_inspector-content {",u+="    padding: 0 0 0 20px;",u+="    margin: 0;",u+="    display: block;",u+="}",c.textContent=u,document.head.appendChild(c)}this.shown=!0,this.m_dontRemove.appendChild(this.inspectorElement),this.titleHeader.nativeAddEventListener("mouseup",this,!1),this.inspectorElement.nativeAddEventListener("change",this,!1)}},hideInspector:{value:function(){document.getElementById("_montage_logger_inspector")&&(this.shown=!1,this.m_dontRemove.removeChild(this.inspectorElement),this.titleHeader.nativeRemoveEventListener("mouseup",this,!1),this.inspectorElement.nativeRemoveEventListener("change",this,!1))}},handleEvent:{enumerable:!1,value:function(t){this[t.type]&&this[t.type](t)}}});var setupUI=function(){(new LoggerUI).init()};if("undefined"!=typeof window){try{localStorage=window.localStorage}catch(e){console.log("Error accessing localStorage",e)}window.loggers=loggers,localStorage&&setupUI()}var colors=exports.logger("colors");