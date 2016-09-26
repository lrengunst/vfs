montageDefine("300a273","composer/translate-composer",{dependencies:["./composer","../core/event/event-manager"],factory:function(t,e){var a=t("./composer").Composer,s=t("../core/event/event-manager").defaultEventManager,n=e.TranslateComposer=a.specialize({constructor:{value:function n(){this.super()}},_NATIVE_ELEMENTS:{value:["A","IFRAME","EMBED","OBJECT","VIDEO","AUDIO","CANVAS","LABEL","INPUT","BUTTON","SELECT","TEXTAREA","KEYGEN","DETAILS","COMMAND"]},_WHEEL_POINTER:{value:"wheel",writable:!1},enabled:{value:!0},_externalUpdate:{value:!0},isAnimating:{value:!1},isMoving:{value:!1},frame:{value:function(){this.isAnimating&&this._animationInterval(),this._externalUpdate=!1}},_pointerSpeedMultiplier:{value:1},pointerSpeedMultiplier:{get:function(){return this._pointerSpeedMultiplier},set:function(t){this._pointerSpeedMultiplier=t}},pointerStartEventPosition:{value:null},_shouldDispatchTranslate:{value:!1},_isSelfUpdate:{value:!1},_allowFloats:{value:!1},allowFloats:{get:function(){return this._allowFloats},set:function(t){this._allowFloats!==t&&(this._allowFloats=t,this.translateX=this._translateX,this.translateY=this._translateY)}},allowTranslateOuterExtreme:{value:!1},_translateX:{value:0},translateX:{get:function(){return this._translateX},set:function(t){if("vertical"===this._axis)this._translateX=this._minTranslateX||0;else{var e=isNaN(t)?0:this._allowFloats?parseFloat(t):t>>0;null!==this._minTranslateX&&this._minTranslateX>e&&(e=this._minTranslateX),null!==this._maxTranslateX&&e>this._maxTranslateX&&(e=this._maxTranslateX),this._isSelfUpdate||(this.isAnimating=!1),this._translateX=e}}},_translateY:{value:0},translateY:{get:function(){return this._translateY},set:function(t){if("horizontal"===this._axis)this._translateY=this._minTranslateY||0;else{var e=isNaN(t)?0:this._allowFloats?parseFloat(t):t>>0;null!==this._minTranslateY&&this._minTranslateY>e&&(e=this._minTranslateY),null!==this._maxTranslateY&&e>this._maxTranslateY&&(e=this._maxTranslateY),this._isSelfUpdate||(this.isAnimating=!1),this._translateY=e}}},_minTranslateX:{value:null},minTranslateX:{get:function(){return this._minTranslateX},set:function(t){null!==t&&(t=parseFloat(t)),this._minTranslateX!==t&&(null!==t&&t>this._translateX&&(this.translateX=t),this._minTranslateX=t)}},_maxTranslateX:{value:null},maxTranslateX:{get:function(){return this._maxTranslateX},set:function(t){null!==t&&(t=parseFloat(t)),this._maxTranslateX!==t&&(null!==t&&this._translateX>t&&(this.translateX=t),this._maxTranslateX=t)}},_minTranslateY:{value:null},minTranslateY:{get:function(){return this._minTranslateY},set:function(t){null!==t&&(t=parseFloat(t)),this._minTranslateY!==t&&(null!==t&&t>this._translateY&&(this.translateY=t),this._minTranslateY=t)}},_maxTranslateY:{value:null},maxTranslateY:{get:function(){return this._maxTranslateY},set:function(t){null!==t&&(t=parseFloat(t)),this._maxTranslateY!==t&&(null!==t&&this._translateY>t&&(this.translateY=t),this._maxTranslateY=t)}},_axis:{value:"both"},axis:{get:function(){return this._axis},set:function(t){switch(t){case"vertical":case"horizontal":this._axis=t,this.translateX=this._translateX,this.translateY=this._translateY;break;default:this._axis="both"}}},invertAxis:{depends:["invertXAxis","invertYAxis"],get:function(){return this._invertXAxis===this._invertYAxis?this._invertXAxis:null},set:function(t){this.invertXAxis=t,this.invertYAxis=t}},_invertXAxis:{value:!1},invertXAxis:{get:function(){return this._invertXAxis},set:function(t){this._invertXAxis=!!t}},_invertYAxis:{value:!1},invertYAxis:{get:function(){return this._invertYAxis},set:function(t){this._invertYAxis=!!t}},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(t){this._hasMomentum=t?!0:!1}},__momentumDuration:{value:650},_momentumDuration:{get:function(){return this.__momentumDuration},set:function(t){this.__momentumDuration=isNaN(t)?1:t>>0,1>this.__momentumDuration&&(this.__momentumDuration=1)}},_pointerX:{value:null},_pointerY:{value:null},_touchIdentifier:{value:null},_isFirstMove:{value:!1},_observedPointer:{value:null},eventManager:{get:function(){return s}},_mouseRadiusThreshold:{value:5},_touchRadiusThreshold:{value:12},_listenToWheelEvent:{value:!1},listenToWheelEvent:{set:function(t){t=!!t,this._listenToWheelEvent!==t&&(this._listenToWheelEvent=t,this._isLoaded&&(t?this._addWheelEventListener():this._removeWheelEventListener()))},get:function(){return this._listenToWheelEvent}},_claimPointerPolicy:{value:null},claimPointerPolicy:{set:function(t){(t===n.CLAIM_POINTER_POLICIES.DEFAULT||t===n.CLAIM_POINTER_POLICIES.MOVE)&&(this._claimPointerPolicy=t)},get:function(){return this._claimPointerPolicy||(this._claimPointerPolicy=n.CLAIM_POINTER_POLICIES.DEFAULT),this._claimPointerPolicy}},load:{value:function(){window.PointerEvent?this._element.addEventListener("pointerdown",this,!0):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.addEventListener("MSPointerDown",this,!0):(this._element.addEventListener("touchstart",this,!0),this._element.addEventListener("mousedown",this,!0)),this._listenToWheelEvent&&this._addWheelEventListener(),this.eventManager.isStoringPointerEvents=!0}},unload:{value:function(){window.PointerEvent?this._element.removeEventListener("pointerdown",this,!0):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.removeEventListener("MSPointerDown",this,!0):(this._element.removeEventListener("touchstart",this,!0),this._element.removeEventListener("mousedown",this,!0)),this._listenToWheelEvent&&this._removeWheelEventListener()}},surrenderPointer:{value:function(){var t=!0;return t&&this.isMoving&&this._releaseInterest(),t}},addEventListener:{value:function(t,e,s){a.addEventListener.call(this,t,e,s),"translate"===t&&(this._shouldDispatchTranslate=!0)}},capturePointerdown:{value:function(t){"mouse"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE?this.captureMousedown(t):("touch"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.captureTouchstart(t)}},capturePointermove:{value:function(t){"mouse"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE?this.captureMousemove(t):("touch"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.captureTouchmove(t)}},handlePointerup:{value:function(t){"mouse"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE?this.handleMouseup(t):("touch"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.handleTouchend(t)}},handlePointercancel:{value:function(t){("touch"===t.pointerType||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.handleTouchcancel(t)}},captureMousedown:{value:function(t){this.enabled&&0===t.button&&(this._observedPointer="mouse",this._start(t.clientX,t.clientY,t.target,t.timeStamp))}},captureMousemove:{value:function(t){this.enabled&&this._handleMove(t)}},handleMouseup:{value:function(t){this.enabled&&this._end(t)}},captureTouchstart:{value:function(t){if(this.enabled&&null===this._observedPointer)if(void 0!==t.pointerId)this._observedPointer=t.pointerId,this._start(t.clientX,t.clientY,t.target,t.timeStamp),this._preventDefaultIfNeeded(t);else{var e=t.targetTouches;if(e&&1===e.length){var a=e[0];this._preventDefaultIfNeeded(t),this._observedPointer=a.identifier,this._start(a.clientX,a.clientY,a.target,t.timeStamp)}}}},captureTouchmove:{value:function(t){if(this.enabled)if(void 0!==t.pointerId)this._handleMove(t);else{var e=this._findObservedTouch(t.changedTouches);e&&this._handleMove(t,e)}}},handleTouchend:{value:function(t){if(this.enabled)if(void 0!==t.pointerId)this._end(t);else{var e=this._findObservedTouch(t.changedTouches);e&&this._end(e)}}},handleTouchcancel:{value:function(t){if(this.enabled)if(void 0!==t.pointerId)this._cancel(t);else{var e=this._findObservedTouch(t.changedTouches);e&&this._cancel(e)}}},captureScroll:{value:function(t){t.target.contains(this.element)&&this._cancel(t)}},_shouldPreventDefault:{value:function(t){return!!t.target.tagName&&-1===n._NATIVE_ELEMENTS.indexOf(t.target.tagName)&&!t.target.isContentEditable}},_preventDefaultIfNeeded:{value:function(t){!t.defaultPrevented&&this._shouldPreventDefault(t)&&t.preventDefault()}},_addWheelEventListener:{value:function(){if(this._element){var t=window.onwheel!==void 0||window.WheelEvent!==void 0?"wheel":"mousewheel";this._element.addEventListener(t,this,!1),this._element.addEventListener(t,this,!0)}}},_removeWheelEventListener:{value:function(){if(this._element){var t=window.onwheel!==void 0||window.WheelEvent!==void 0?"wheel":"mousewheel";this._element.removeEventListener(t,this,!1),this._element.removeEventListener(t,this,!0)}}},_start:{value:function(t,e,a,s){this.pointerStartEventPosition={pageX:t,pageY:e,target:a,timeStamp:s},this._pointerX=t,this._pointerY=e,window.PointerEvent?(document.addEventListener("pointermove",this,!0),document.addEventListener("pointerup",this,!1),document.addEventListener("pointercancel",this,!1)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(document.addEventListener("MSPointerMove",this,!0),document.addEventListener("MSPointerUp",this,!1),document.addEventListener("MSPointerCancel",this,!1)):"mouse"===this._observedPointer?(document.addEventListener("mousemove",this,!0),document.addEventListener("mouseup",this,!1)):(this._element.addEventListener("touchmove",this,!0),this._element.addEventListener("touchend",this,!1),this._element.addEventListener("touchcancel",this,!1)),document.addEventListener("scroll",this,!0),this.isAnimating&&(this.isAnimating=!1,this._dispatchTranslateEnd()),this._isFirstMove=!0}},_findObservedTouch:{value:function(t){for(var e,a=null,s=0,n=t.length;n>s&&null===a;s++)e=t[s],e.identifier===this._observedPointer&&(a=e);return a}},_handleMove:{value:function(t,e){if(e||(e=t),this._isFirstMove){var s=this.eventManager.componentClaimingPointer(this._observedPointer);if(s){var l=!0;if(this.claimPointerPolicy===n.CLAIM_POINTER_POLICIES.MOVE){var i="mouse"===this._observedPointer?this._mouseRadiusThreshold:this._touchRadiusThreshold,c=this.pointerStartEventPosition.pageX-e.clientX,r=this.pointerStartEventPosition.pageY-e.clientY;l=a.isCoordinateOutsideRadius(c,r,i)}if(!l)return t.preventDefault(),void 0}this.eventManager.claimPointer(this._observedPointer,this)}this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(t.preventDefault(),(this.allowTranslateOuterExtreme||this._shouldMove(t,e.clientX,e.clientY))&&(this._isFirstMove?this._firstMove():this._move(e.clientX,e.clientY))):this._releaseInterest()}},_shouldMove:{value:function(t,e,a){var s,n,l,i,c=this._translateY,r=this._translateX,o=!0;return"wheel"===t.type?("vertical"!==this._axis&&(l=20*(t.wheelDeltaY||-t.deltaY||0)/120),"horizontal"!==this._axis&&(i=20*(t.wheelDeltaY||-t.deltaY||0)/120)):("vertical"!==this._axis&&(l=-(this._invertXAxis?this._pointerX-e:e-this._pointerX)),"horizontal"!==this._axis&&(i=-(this._invertYAxis?this._pointerY-a:a-this._pointerY))),i&&(s=this._isNegativeNumber(i),null!==this.minTranslateY&&(o=c!==this.minTranslateY||c===this.minTranslateY&&s),null!==this.maxTranslateY&&o&&(o=c!==this.maxTranslateY||c===this.maxTranslateY&&!s)),l&&(n=this._isNegativeNumber(l),null!==this.minTranslateX&&o&&(o=r!==this.minTranslateX||r===this.minTranslateX&&n),null!==this.maxTranslateX&&o&&(o=r!==this.maxTranslateX||r===this.maxTranslateX&&!n)),o}},_firstMove:{value:function(){this._isFirstMove&&(this._dispatchTranslateStart(this._translateX,this._translateY),this._isFirstMove=!1,this.isMoving=!0)}},_move:{value:function(t,e){var a;this._isSelfUpdate=!0,"vertical"!==this._axis&&(a=this._invertXAxis?this._pointerX-t:t-this._pointerX,this.translateX+=a*this._pointerSpeedMultiplier),"horizontal"!==this._axis&&(a=this._invertYAxis?this._pointerY-e:e-this._pointerY,this.translateY+=a*this._pointerSpeedMultiplier),this._isSelfUpdate=!1,this._pointerX=t,this._pointerY=e,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_end:{value:function(t){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY;var e=t.velocity;this._hasMomentum&&(e.speed>40||this.translateStrideX||this.translateStrideY)?(this.momentumX="vertical"!==this._axis?e.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):0,this.momentumY="horizontal"!==this._axis?e.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):0,this.endX=this.startX-this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY-this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||(this.isMoving=!1,this._dispatchTranslateEnd()),this._releaseInterest()}},_cancel:{value:function(){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY,this.animateMomentum=!1,this._isFirstMove||(this.isMoving=!1,this._dispatchTranslateCancel()),this._releaseInterest()}},_releaseInterest:{value:function(){window.PointerEvent?(document.removeEventListener("pointermove",this,!0),document.removeEventListener("pointerup",this,!1),document.removeEventListener("pointercancel",this,!1)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(document.removeEventListener("MSPointerMove",this,!0),document.removeEventListener("MSPointerUp",this,!1),document.removeEventListener("MSPointerCancel",this,!1)):"mouse"===this._observedPointer?(document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!1)):(this._element.removeEventListener("touchmove",this,!0),this._element.removeEventListener("touchend",this,!1),this._element.removeEventListener("touchcancel",this,!1)),document.removeEventListener("scroll",this,!0),this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._isFirstMove=!1,this.isMoving=!1}},_isAxisMovement:{value:function(t){var e,a,s,n,l,i,c,r=t.velocity,o=.7853981633974483,h=2.356194490192345,g=-2.356194490192345,p=-.7853981633974483;if("both"===this.axis)return!0;if(!r||0===r.speed||isNaN(r.speed)?(i=this.pointerStartEventPosition.pageX-t.clientX,c=this.pointerStartEventPosition.pageY-t.clientY,l=Math.atan2(c,i)):l=r.angle,"horizontal"===this.axis){if(s=o>=l&&l>=p,n=l>=h||g>=l,s||n)return!0}else if("vertical"===this.axis&&(e=p>=l&&l>=g,a=l>=o&&h>=l,e||a))return!0;return!1}},_translateEndTimeout:{value:null},_handleWheelTimeout:{value:null},_isNegativeNumber:{value:function(t){return t=+t,isNaN(t)||(t=1/t),0>t}},captureWheel:{value:function(t){this._shouldMove(t)?this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)||this.eventManager.claimPointer(this._WHEEL_POINTER,this):this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)&&this.eventManager.forfeitPointer(this._WHEEL_POINTER,this)}},handleWheel:{value:function(t){if(this.enabled&&this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)){if(this._translateEndTimeout?window.clearTimeout(this._translateEndTimeout):this._dispatchTranslateStart(),this.translateY=this._translateY-20*(t.wheelDeltaY||-t.deltaY||0)/120,this.isMoving=!0,this._dispatchTranslate(),"function"!=typeof this._handleWheelTimeout){var e=function(){this._translateEndTimeout=null,this._dispatchTranslateEnd(),this.isMoving=!1,this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)&&this.eventManager.forfeitPointer(this._WHEEL_POINTER,this)};this._handleWheelTimeout=e.bind(this)}this._translateEndTimeout=window.setTimeout(this._handleWheelTimeout,400),t.preventDefault()}}},_bezierTValue:{value:function(t,e,a,s,n){var l,i,c,r,o=1-3*s+3*e,h=3*s-6*e,g=3*e,p=.5;for(i=0;10>i;i++)r=p*p,l=3*o*r+2*h*p+g,c=1-p,p-=(3*(c*c*p*e+c*r*s)+r*p-t)/l;return r=p*p,c=1-p,3*(c*c*p*a+c*r*n)+r*p}},_dispatchTranslateStart:{value:function(t,e){var a=document.createEvent("CustomEvent");a.initCustomEvent("translateStart",!0,!0,null),a.translateX=t,a.translateY=e,a.scroll=0,a.pointer=this._observedPointer,this.dispatchEvent(a)}},_dispatchTranslateEnd:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("translateEnd",!0,!0,null),t.translateX=this._translateX,t.translateY=this._translateY,t.scroll=0,this.dispatchEvent(t)}},_dispatchTranslateCancel:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("translateCancel",!0,!0,null),t.translateX=this._translateX,t.translateY=this._translateY,t.scroll=0,this.dispatchEvent(t)}},_dispatchTranslate:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("translate",!0,!0,null),t.translateX=this._translateX,t.translateY=this._translateY,t.scroll=0,t.pointer=this._observedPointer,this.dispatchEvent(t)}},animateBouncingX:{value:!1,enumerable:!1},startTimeBounceX:{value:!1,enumerable:!1},animateBouncingY:{value:!1,enumerable:!1},startTimeBounceY:{value:!1,enumerable:!1},animateMomentum:{value:!1,enumerable:!1},startTime:{value:null,enumerable:!1},startX:{value:null,enumerable:!1},posX:{value:null,enumerable:!1},endX:{value:null,enumerable:!1},startY:{value:null,enumerable:!1},posY:{value:null,enumerable:!1},endY:{value:null,enumerable:!1},translateStrideX:{value:null},translateStrideY:{value:null},translateStrideDuration:{value:330},_animationInterval:{value:function(){var t,e,a,s,n=Date.now(),l=!1;this.animateMomentum&&(t=n-this.startTime,this.__momentumDuration>t?(this.posX=this.startX-(this.momentumX+this.momentumX*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this.posY=this.startY-(this.momentumY+this.momentumY*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this.translateStrideX&&null===this.startStrideXTime&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.posX-this.endX)<.75*this.translateStrideX)&&(this.startStrideXTime=n),this.translateStrideY&&null===this.startStrideYTime&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.posY-this.endY)<.75*this.translateStrideY)&&(this.startStrideYTime=n)):this.animateMomentum=!1),e=Math.round(this.endX/this.translateStrideX),this.startStrideXTime&&n-this.startStrideXTime>0&&(n-this.startStrideXTime<this.translateStrideDuration?(t=this._bezierTValue((n-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),this.posX=this.posX*(1-t)+e*this.translateStrideX*t,l=!0):this.posX=e*this.translateStrideX),e=Math.round(this.endY/this.translateStrideY),this.startStrideYTime&&n-this.startStrideYTime>0&&(n-this.startStrideYTime<this.translateStrideDuration?(t=this._bezierTValue((n-this.startStrideYTime)/this.translateStrideDuration,.275,0,.275,1),this.posY=this.posY*(1-t)+e*this.translateStrideY*t,l=!0):this.posY=e*this.translateStrideY),a=this.posX,s=this.posY,this._isSelfUpdate=!0,this.translateX=a,this.translateY=s,this._shouldDispatchTranslate&&this._dispatchTranslate(),this._isSelfUpdate=!1,this.isAnimating=this.animateMomentum||l,this.isAnimating?this.needsFrame=!0:this._dispatchTranslateEnd()}}},{CLAIM_POINTER_POLICIES:{value:{DEFAULT:"default",MOVE:"move"}}});n.prototype.captureMSPointerDown=n.prototype.capturePointerdown,n.prototype.captureMSPointerMove=n.prototype.capturePointermove,n.prototype.handleMSPointerUp=n.prototype.handlePointerup,n.prototype.handleMSPointerCancel=n.prototype.handlePointercancel,n.prototype.handleMousewheel=n.prototype.handleWheel}});