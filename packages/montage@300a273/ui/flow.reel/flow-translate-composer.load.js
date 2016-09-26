montageDefine("300a273","ui/flow.reel/flow-translate-composer",{dependencies:["../../core/core","../../composer/translate-composer","../../core/event/event-manager","../../core/geometry/point","../../core/dom"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../../composer/translate-composer").TranslateComposer),i=(e("../../core/event/event-manager").defaultEventManager,e("../../core/geometry/point").Point),r=e("../../core/dom").convertPointFromPageToNode;t.FlowTranslateComposer=n.specialize({constructor:{value:function(){this.super(),this.handleMousewheel=this.handleWheel}},stealChildrenPointer:{value:!0},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},startTranslateSpeed:{value:500},startTranslateRadius:{value:8},_startPageX:{value:null},_startPageY:{value:null},_pageX:{value:null},_pageY:{value:null},_pointerStartX:{value:null},_pointerStartY:{value:null},_contentOffsetX:{value:null},_contentOffsetY:{value:null},_superStart:{value:n.prototype._start},_start:{value:function(e,t,n,a){this._superStart(e,t,n,a);var o=window.getComputedStyle(this._element,null),s=this.convertCssPixelsPropertyStringToNumber(o.getPropertyValue("border-left-width")),l=this.convertCssPixelsPropertyStringToNumber(o.getPropertyValue("border-top-width")),u=this.convertCssPixelsPropertyStringToNumber(o.getPropertyValue("padding-left")),c=this.convertCssPixelsPropertyStringToNumber(o.getPropertyValue("padding-top")),h=r(this._element,(new i).init(e,t));this._pointerStartX=this._pointerX=h.x-s-u,this._pointerStartY=this._pointerY=h.y-l-c,this._contentOffsetX=this._startPageX-this._pointerStartX,this._contentOffsetY=this._startPageY-this._pointerStartY,this._computePointedElement(),this._startPageX=this._pageX=e,this._startPageY=this._pageY=t,this._startScroll=this._scroll,this._previousScrollDelta=0,this._scrollEnd=null}},_analyzeMovement:{value:function(e){var t,n,i,r=e.velocity;r&&(t=r.speed,t>=this.startTranslateSpeed?this._stealPointer():(n=this.startPageX-e.pageX,i=this.startPageY-e.pageY,n*n+i*i>this.startTranslateRadius*this.startTranslateRadius&&this._stealPointer()))}},_dispatchTranslateStart:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateStart",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_dispatchTranslateCancel:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateCancel",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_move:{value:function(e,t){this._isFirstMove&&(this._dispatchTranslateStart(),this._isFirstMove=!1),this._pageX=e,this._pageY=t,this._updateLinearScroll(),this._shouldDispatchTranslate&&this._dispatchTranslate()}},_end:{value:function(e){if(this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)){this.startTime=Date.now(),this.endX=this.startX=this._pageX,this.endY=this.startY=this._pageY;var t=e.velocity;this._hasMomentum&&(t.speed>40||this.translateStrideX||this.translateStrideY)?(this.momentumX="vertical"!=this._axis?t.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):0,this.momentumY="horizontal"!=this._axis?t.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):0,this.endX=this.startX+this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY+this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||this._dispatchTranslateEnd()}this._releaseInterest()}},_translateEndTimeout:{value:null},_mousewheelStrideTimeout:{value:null},_previousDeltaY:{value:0},_listenToWheelEvent:{value:!0},captureWheel:{value:function(){this.eventManager.componentClaimingPointer(this._WHEEL_POINTER)||this.eventManager.claimPointer(this._WHEEL_POINTER,this.component)}},handleWheel:{value:function(e){var t=this;if(this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this.component)){var n=this._pageY,i=e.wheelDeltaY||-e.deltaY||0;this.translateStrideX?(window.clearTimeout(this._mousewheelStrideTimeout),(null===this._mousewheelStrideTimeout||Math.abs(i)>Math.abs(this._previousDeltaY*(null===this._mousewheelStrideTimeout?2:4)))&&(i>1?this.callDelegateMethod("previousStride",this):-1>i&&this.callDelegateMethod("nextStride",this)),this._mousewheelStrideTimeout=window.setTimeout(function(){t._mousewheelStrideTimeout=null,t._previousDeltaY=0},70),t._previousDeltaY=i,this._shouldPreventDefault(e)&&e.preventDefault()):(null===this._translateEndTimeout&&this._dispatchTranslateStart(),this._pageY=this._pageY+20*i/100,this._updateScroll(),this._dispatchTranslate(),window.clearTimeout(this._translateEndTimeout),this._translateEndTimeout=window.setTimeout(function(){t._dispatchTranslateEnd(),t._translateEndTimeout=null},400),n!==this._pageY&&this._shouldPreventDefault(e)&&e.preventDefault()),this.eventManager.forfeitPointer(this._WHEEL_POINTER,this.component)}}},_scroll:{value:0},scroll:{get:function(){return this._scroll},set:function(e){null!==this.minScroll&&this.minScroll>e&&(e=this.minScroll),null!==this.maxScroll&&e>this.maxScroll&&(e=this.maxScroll),this._scroll=e}},minScroll:{value:null},maxScroll:{value:null},_flow:{value:null},flow:{get:function(){return this._flow},set:function(e){this._flow=e,this.component=e}},_updateScroll:{value:function(){this._updateLinearScroll()}},_updateLinearScroll:{value:function(){var e=this._flow,t=e.isCameraEnabled?500/e._height:1,n=(this._pageX-this._startPageX)*this._linearScrollingVector[0]*t*e._sceneScaleX.denominator/e._sceneScaleX.numerator,i=(this._pageY-this._startPageY)*this._linearScrollingVector[1]*t*e._sceneScaleY.denominator/e._sceneScaleY.numerator,r=this._linearScrollingVector[0]*this._linearScrollingVector[0]+this._linearScrollingVector[1]*this._linearScrollingVector[1],a=(n+i)/r;this.scroll+=a-this._previousScrollDelta,this._previousScrollDelta=a}},frame:{value:function(){this.isAnimating&&this._animationInterval()}},convertCssPixelsPropertyStringToNumber:{value:function(e){return"string"==typeof e?"px"===e.substr(-2)?1*e.substr(0,e.length-2):0:0}},_rayPointDistance:{value:function(e,t){var n,i,r,a,o;return n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],n>=0?(i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n/=i,r=e[0]*n-t[0],a=e[1]*n-t[1],o=e[2]*n-t[2],Math.sqrt(r*r+a*a+o*o)):!1}},_closerIndex:{value:null},_computePointedElement:{value:function(){var e=this._flow._splinePaths,t=e.length;if(t){var n,i,r,a,o,s,l,u,c,h=this._flow,d=h._viewpointTargetPoint[0]-h._viewpointPosition[0],p=h._viewpointTargetPoint[2]-h._viewpointPosition[2],v=Math.atan2(d,p),m=p*Math.cos(-v)-d*Math.sin(-v),f=Math.atan2(h._viewpointTargetPoint[1]-h._viewpointPosition[1],m),g=.5*this._element.clientWidth-this._pointerX,_=this._pointerY-.5*this._element.clientHeight,b=.5*this._element.offsetHeight/Math.tan(h._viewpointFov*h._doublePI*(1/720)),y=[],E=h._visibleIndexes,w=E.length,P=h._sceneScale,M=null,T=1e100;for(i=b*Math.cos(f)-_*Math.sin(f),_=b*Math.sin(f)+_*Math.cos(f),n=i*Math.cos(v)-g*Math.sin(v),g=i*Math.sin(v)+g*Math.cos(v),l=[g,_,n],c=0;e.length>c;c++)for(c=0;e.length>c;c++)y[c]=e[c].transform([P.x.numerator/P.x.denominator,0,0,0,0,P.y.numerator/P.y.denominator,0,0,0,0,P.z.numerator/P.z.denominator,0,-h._viewpointPosition[0]+.5*h._firstIterationWidth+h._firstIterationOffsetLeft,-h._viewpointPosition[1]+.5*h._firstIterationHeight+h._firstIterationOffsetTop,-h._viewpointPosition[2],1]);for(c=0;w>c;c++)u=this._flow.offset(E[c]),r=u.pathIndex,a=u.slideTime,s=y[r]._convertSplineTimeToBezierIndexTime(a),null!==s&&(pos=y[r].getPositionAtIndexTime(s),o=this._rayPointDistance(l,pos),o!==!1&&T>o&&(T=o,M=E[c]));this._closerIndex=M}}},_previousScrollDelta:{value:0},_startScroll:{value:0},_translateStride:{value:null},translateStride:{get:function(){return this._translateStride},set:function(e){this._translateStride=e,this.translateStrideX=e}},_scrollEnd:{value:null},_scrollStart:{value:null},_hasMomentum:{value:!0},isLimitedToSingleStride:{value:!1},_animationInterval:{value:function(){var e,t,n,i,r,a,o=Date.now(),s=!1;r=this.minScroll,a=this.maxScroll,this.minScroll=null,this.maxScroll=null,null===this._scrollEnd&&(this._scrollStart=this.scroll,this._pageX=this.endX,this._pageY=this.endY,this._updateScroll(),this._scrollEnd=this.scroll,this.isLimitedToSingleStride&&this.translateStrideX&&(this._scrollEnd>Math.floor(this._scrollStart)+this.translateStrideX&&(this._scrollEnd=Math.floor(this._scrollStart)+this.translateStrideX),this._scrollEnd<Math.ceil(this._scrollStart)-this.translateStrideX&&(this._scrollEnd=Math.ceil(this._scrollStart)-this.translateStrideX)),this._pageX=this.startX,this._pageY=this.startY,this._updateScroll()),this.animateMomentum?(e=o-this.startTime,this.__momentumDuration>e?(this._pageX=this.startX+(this.momentumX+this.momentumX*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this._pageY=this.startY+(this.momentumY+this.momentumY*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this._updateScroll(),this.translateStrideX&&null===this.startStrideXTime&&(this.__momentumDuration-e<this.translateStrideDuration||Math.abs(this.scroll-this._scrollEnd)<.75*this.translateStrideX)&&(this.startStrideXTime=o,this._strideStartScroll=this._scroll)):this.animateMomentum=!1):null===this.startStrideXTime&&(this.startStrideXTime=this.startTime,this._strideStartScroll=this._scrollStart),i=this.scroll,this.startStrideXTime&&o-this.startStrideXTime>0&&(n=Math.round(this._scrollEnd/this.translateStrideX),o-this.startStrideXTime<this.translateStrideDuration?(e=this._bezierTValue((o-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),t=(o-this.startStrideXTime)/this.translateStrideDuration,i=i*(1-t)+(n*this.translateStrideX*e+this._strideStartScroll*(1-e))*t,s=!0):(i=n*this.translateStrideX,this.animateMomentum=!1)),this.minScroll=r,this.maxScroll=a,r>i&&(i=r,this.animateMomentum=!1,s=!1),i>a&&(i=a,this.animateMomentum=!1,s=!1),this.scroll=i,this.isAnimating=this.animateMomentum||s,this.isAnimating?this.needsFrame=!0:(this._dispatchTranslateEnd(),this._scrollEnd=null)}}})}});