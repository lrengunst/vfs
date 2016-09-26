montageDefine("300a273","ui/repetition.reel/repetition",{dependencies:["../../core/core","../component","../../core/template","../../core/range-controller","../../core/promise","../../core/browser","../../composer/press-composer","collections/map","collections/set","../../core/deprecate","../../core/logger","frb/observers"],factory:function(e,t){var n=e("../../core/core").Montage,i=e("../component").Component;e("../../core/template").Template;var r=e("../../core/range-controller").RangeController,a=e("../../core/promise").Promise;e("../../core/browser").browser;var s=e("../../composer/press-composer").PressComposer,o=e("collections/map"),l=e("collections/set"),c=e("../../core/deprecate").deprecationWarning,u=e("../../core/logger").logger("repetition").color.magenta(),h=e("frb/observers"),d=h.observeProperty,p=h.observeKey,m=60,g=t.Iteration=n.specialize({repetition:{value:null},controller:{value:null},_object:{value:null},object:{get:function(){return this._object},set:function(e){var t;this._object!==e&&(this._object=e,t=-1!==this.repetition.contentController.selection.indexOf(e),this._selected!==t&&(this.selected=t))}},_fragment:{value:null},_childComponents:{value:null},index:{value:null},_drawnIndex:{value:null},active:{value:null},_noTransition:{value:null},_templateDocumentPart:{value:null},isDirty:{value:!1},_selected:{value:null},selected:{get:function(){return this._selected},set:function(e){e=!!e,this.object&&this.repetition&&this.repetition.contentController&&(e?this.repetition.contentController.selection.add(this.object):this.repetition.contentController.selection.delete(this.object)),this._selected!==e&&(this._selected=e,this.repetition._addDirtyClassListIteration(this),this.repetition.needsDraw=!0)}},constructor:{value:function g(){this.super(),u.isDebug&&u.debug("Iteration:%s create iteration %O",Object.hash(this),this),this.repetition=null,this.controller=null,this.object=null,this._fragment=null,this._childComponents=null,this.index=null,this._drawnIndex=null,this.active=!1,this.defineBinding("active",{"<->":"repetition.activeIterations.has(())"}),this._noTransition=!1,this.addOwnPropertyChangeListener("active",this),this.addOwnPropertyChangeListener("_noTransition",this),this.addPathChangeListener("index.defined() && _childComponents.defined()",this,"handleComponentModelChange"),this.cachedFirstElement=null}},_timeoutBecomeActiveID:{value:null},_shouldBecomeActive:{value:!1},shouldBecomeActive:{set:function(e){if(this._timeoutBecomeActiveID&&(clearTimeout(this._timeoutBecomeActiveID),this._timeoutBecomeActiveID=null),e){var t=this;this._shouldBecomeActive=!0,this._timeoutBecomeActiveID=setTimeout(function(){t._shouldBecomeActive&&(t.active=!0),t._shouldBecomeActive=!1},m)}else this._shouldBecomeActive=!1},get:function(){return this._shouldBecomeActive}},initWithRepetition:{value:function(e){return this.repetition=e,this}},recycle:{value:function(){this.index=null,this.object=null,this._noTransition=!0}},injectIntoDocument:{value:function(e){null!==this._drawnIndex?(u.isDebug&&u.debug("Iteration:%s retracting from index %s and injecting at %s",Object.hash(this),this._drawnIndex,e),this.retractFromDocument()):u.isDebug&&u.debug("Iteration:%s injecting at index %s",Object.hash(this),e);var t=this,n=this.repetition,i=n.element,r=n._boundaries,a=i.ownerDocument.createTextNode(""),s=r[e];if(r.splice(e,0,a),i.insertBefore(a,s),i.insertBefore(this._fragment,s),n._drawnIterations.splice(e,0,this),n._updateDrawnIndexes(e),n._addDirtyClassListIteration(this),!this._elementsWillBeAddedToMap){var o=this._childComponents.length,l=function(e){e.target.removeEventListener("firstDraw",l,!1),o--,o||t.forEachElement(function(e){n._iterationForElement.set(e,t)})};if(this._childComponents.length>0)for(var c=0;this._childComponents.length>c;c++){var h=this._childComponents[c];h.addEventListener("firstDraw",l,!1),h.needsDraw=!0,h._completedFirstDraw===!0&&console.error("Repetiton:%s child component %O has already drawn.",Object.hash(this),h)}else this.forEachElement(function(e){n._iterationForElement.set(e,t)});this._elementsWillBeAddedToMap=!0}}},_elementsWillBeAddedToMap:{value:!1},retractFromDocument:{value:function(){u.isDebug&&u.debug("Iteration:%s retractFromDocument drawnIndex: %s",Object.hash(this),this._drawnIndex);var e=this._drawnIndex,t=this.repetition,n=t.element,i=t._boundaries[e],r=t._boundaries[e+1];t._boundaries.splice(e,1);for(var a=this._fragment,s=i.nextSibling;s!=r;){var o=s.nextSibling;n.removeChild(s),a.appendChild(s),s=o}n.removeChild(i),this._drawnIndex=null,t._drawnIterations.splice(e,1),t._updateDrawnIndexes(e)}},handleComponentModelChange:{value:function(e){e?this._childComponents.forEach(this.repetition.addChildComponent,this.repetition):this._childComponents&&this._childComponents.forEach(this.repetition.removeChildComponent,this.repetition)}},handlePropertyChange:{value:function(){this.repetition&&(this.repetition._addDirtyClassListIteration(this),this.repetition.needsDraw=!0)}},forEachElement:{value:function(e,t){var n=this.repetition,i=this._drawnIndex;if(null!=i)for(var r=n._boundaries[i];r!==n._boundaries[i+1];r=r.nextSibling)1===r.nodeType&&e.call(t,r)}},firstElement:{get:function(){var e=this.repetition,t=this._drawnIndex;if(null!=t)for(var n=e._boundaries[t];n!==e._boundaries[t+1];n=n.nextSibling)if(1===n.nodeType)return this.cachedFirstElement=n,n}},isComponentTreeLoaded:{value:function(){return null!==this._fragment}},cachedFirstElement:{value:null}});t.Repetition=i.specialize({initWithContent:{value:function(e){return this.object=e,this}},initWithContentController:{value:function(e){return this.contentController=e,this}},content:{get:function(){return this.contentController?this.contentController.content:null},set:function(e){this.contentController=(new r).initWithContent(e)}},contentController:{value:null},isSelectionEnabled:{value:null},selectedIterations:{value:null},selectedIndexes:{value:null},activeIterations:{value:null},iterations:{value:null},currentIteration:{value:null},objectAtCurrentIteration:{value:null},hasTemplate:{value:!1},_iterationTemplate:{value:null},clonesChildComponents:{value:!0},__pressComposer:{value:null},_pressComposer:{get:function(){return this.__pressComposer||(this.__pressComposer=new s,this.__pressComposer.lazyLoad=!0,this.addComposerForElement(this.__pressComposer,this.element)),this.__pressComposer}},_cancelSelectionRangeChangeListener:{value:null},_selection:{value:null},selection:{get:function(){return this._selection},set:function(e){this.contentController?(this.contentController.selection!==e&&(this.contentController.selection=e),this._selection!==this.contentController.selection&&(this._selection=this.contentController.selection),this._cancelSelectionRangeChangeListener&&this._cancelSelectionRangeChangeListener(),e?(this._cancelSelectionRangeChangeListener=this.contentController.selection.addRangeChangeListener(this,"selection"),this.handleSelectionRangeChange(e,[])):this._cancelSelectionRangeChangeListener=null):this._selection=e}},handleSelectionRangeChange:{value:function(e,t){var n,i,r,a,s,l,c=this.iterations.length;if(1>=e.length&&1>=t.length){if(t.length)for(r=t[0],s=0;c>s;s++)this.iterations[s].object===r&&(this.iterations[s].selected=!1);if(e.length)for(r=e[0],s=0;c>s;s++)this.iterations[s].object===r&&(this.iterations[s].selected=!0)}else{for(n=new o,s=0;c>s;s++)a=this.iterations[s],r=a.object,(i=n.get(r))||(i=[],n.set(r,i)),i.push(a);for(s=0;t.length>s;s++)if(i=n.get(t[s]))for(l=0;i.length>l;l++)i[l].selected=!1;for(s=0;e.length>s;s++)if(i=n.get(e[s]))for(l=0;i.length>l;l++)i[l].selected=!0}}},_visibleIndexes:{value:null},visibleIndexes:{get:function(){return this._visibleIndexes},set:function(e){this._visibleIndexes!==e&&(this._visibleIndexes&&this._visibleIndexes.removeRangeChangeListener&&this._visibleIndexes.removeRangeChangeListener(this,"visibleIndexes"),this._visibleIndexes=e,this._visibleIndexes&&this._visibleIndexes.addRangeChangeListener&&this._visibleIndexes.addRangeChangeListener(this,"visibleIndexes"),this._updateOrganizedContent())}},handleVisibleIndexesRangeChange:{value:function(e,t,n){var i,r;if(this.__controllerOrganizedContent){for(i=[],r=0;e.length>r;r++)i.push(this.__controllerOrganizedContent[e[r]]);this.organizedContent.swap(n,t.length,i),this._isListeningToOrganizedContentChanges&&(this.handleOrganizedContentRangeChange(i.length,t.length,n),this.needsDraw=!0)}}},__controllerOrganizedContent:{value:null},_controllerOrganizedContent:{get:function(){return this.__controllerOrganizedContent},set:function(e){this.__controllerOrganizedContent!==e&&(this.__controllerOrganizedContent&&this.__controllerOrganizedContent.removeRangeChangeListener&&this.__controllerOrganizedContent.removeRangeChangeListener(this,"controllerOrganizedContent"),this.__controllerOrganizedContent=e,this.__controllerOrganizedContent&&this.__controllerOrganizedContent.addRangeChangeListener&&this.__controllerOrganizedContent.addRangeChangeListener(this,"controllerOrganizedContent"),this._updateOrganizedContent())}},handleControllerOrganizedContentRangeChange:{value:function(e,t,n){this._visibleIndexes?this._updateOrganizedContent():(this.organizedContent.swap(n,t.length,e),this._isListeningToOrganizedContentChanges&&(this.handleOrganizedContentRangeChange(e.length,t.length,n),this.needsDraw=!0))}},_updateOrganizedContent:{value:function(){var e,t;if(this.__controllerOrganizedContent)if(this._visibleIndexes){for(this.organizedContent.length>this._visibleIndexes.length&&(this.organizedContent.length=this._visibleIndexes.length,this._isListeningToOrganizedContentChanges&&this.handleOrganizedContentRangeChange(0,this.organizedContent.length-this._visibleIndexes.length,this._visibleIndexes.length)),e=this.organizedContent.length,t=0;this._visibleIndexes.length>t;t++)this.organizedContent[t]!==this.__controllerOrganizedContent[this._visibleIndexes[t]]&&(this.organizedContent[t]=this.__controllerOrganizedContent[this._visibleIndexes[t]],this._isListeningToOrganizedContentChanges&&this.handleOrganizedContentRangeChange(1,e>t?1:0,t));this._isListeningToOrganizedContentChanges&&(this.needsDraw=!0)}else e=this.organizedContent.length,this.organizedContent.swap(0,e,this.__controllerOrganizedContent),this._isListeningToOrganizedContentChanges&&(this.handleOrganizedContentRangeChange(this.__controllerOrganizedContent.length,e,0),this.needsDraw=!0);else e=this.organizedContent.length,this.organizedContent=[],this._isListeningToOrganizedContentChanges&&(this.handleOrganizedContentRangeChange(0,e,0),this.needsDraw=!0)}},constructor:{value:function(){this.super(),this.contentController=null,this.organizedContent=[],this.defineBinding("_controllerOrganizedContent",{"<-":"contentController.organizedContent"}),this.isSelectionEnabled=!1,this.defineBinding("selection",{"<-":"contentController.selection"}),this.defineBinding("selectedIterations",{"<-":"iterations.filter{selected}"}),this.defineBinding("selectedIndexes",{"<-":"selectedIterations.map{index}"}),this._iterationTemplate=null,this.addPathChangeListener(this._setupRequirements,this,"_handleSetupRequirementsChange"),this.addPathChangeListener("innerTemplate",this,"_handleInnerTemplateChange"),this.iterations=[],this._drawnIterations=[],this._freeIterations=[],this._contentForIteration=o(),this._iterationForElement=o(),this.currentIteration=null,this._templateId=null,this._iterationCreationPromise=a.resolve(),this._boundaries=[],this._dirtyClassListIterations=l(),this._requestedIterations=0,this._createdIterations=0,this._canDrawInitialContent=!1,this._initialContentDrawn=!1,this.addOwnPropertyChangeListener("isSelectionEnabled",this),this._selectionPointer=null,this.activeIterations=[]}},_setupRequirements:{value:"[!_iterationTemplate.defined(),!_newDomContent.defined(),!_shouldClearDomContentOnNextDraw,_isComponentExpanded,_ownerDocumentPart.defined()].every{}"},_handleSetupRequirementsChange:{value:function(e){e&&this._setupIterationTemplate()}},_handleInnerTemplateChange:{value:function(e){this._iterationTemplate&&this._teardownIterationTemplate(),e&&this.getPath(this._setupRequirements)&&this._setupIterationTemplate()}},cleanupDeletedComponentTree:{value:function(e){var t=this._innerTemplate;this._innerTemplate=null,t&&this._teardownIterationTemplate(),e&&this.cancelBindings()}},expandComponent:{value:function(){return this._isComponentExpanded=!0,a.resolve()}},_buildIterationTemplate:{value:function(){var e,t,i,r;return e=this.innerTemplate.clone(),t=e.getSerialization(),i=t.getSerializationObject(),r=n.getInfoForObject(this).label,this._iterationLabel=r+":iteration",i[this._iterationLabel]={},e.setObjects(i),this.innerTemplate.hasParameters()&&this._expandIterationTemplateParameters(e),window._montage_le_flag&&(e.refresher=this,this._leTagIterationTemplate(e)),e}},_rebuildIterationTemplate:{value:function(){var e,t=this._iterationTemplate,n=this.iterations;this._purgeFreeIterations();for(var i,r=0;i=n[r];r++)i.isDirty=!0;this._innerTemplate=null,e=this._buildIterationTemplate(),t.replaceContentsWithTemplate(e)}},refreshTemplate:{value:function(){this._rebuildIterationTemplate()}},_isListeningToOrganizedContentChanges:{value:!1},_setupIterationTemplate:{value:function(){this._iterationTemplate=this._buildIterationTemplate();for(var e,t=this.childComponents,n=t.length-1;e=t[n--];)e.detachFromParentComponent(),e.needsDraw=!1,e.cleanupDeletedComponentTree(!0);this.handleOrganizedContentRangeChange(this.organizedContent.length,0,0),this._isListeningToOrganizedContentChanges=!0,this._canDrawInitialContent=!0,this.needsDraw=!0}},_leTagIterationTemplate:{value:function(e){var t=e.document.body;if(t.children.length>0){var n=this.ownerComponent._montage_metadata.moduleId,i=this._montage_metadata.label;this._leTagStarArgument(n,i,t)}}},_teardownIterationTemplate:{value:function(){this._isListeningToOrganizedContentChanges=!1,this.handleOrganizedContentRangeChange(0,this.organizedContent.length,0),this._purgeFreeIterations(),this._iterationTemplate=null,this._contentForIteration.clear(),this._iterationForElement.clear(),this.currentIteration=null,this._templateId=null,this._requestedIterations=0,this._createdIterations=0,this._canDrawInitialContent=!1,this._selectionPointer=null,this.activeIterations.clear(),this._dirtyClassListIterations.clear()}},_purgeFreeIterations:{value:function(){for(var e=0;this._freeIterations.length>e;e++)for(var t=this._freeIterations[e],n=0;t._childComponents.length>n;n++){var i=t._childComponents[n];this.removeChildComponent(i),i.cleanupDeletedComponentTree(!0)}this._freeIterations.clear()}},_expandIterationTemplateParameters:{value:function(e){for(var t,n,i,r,a,s,o,l,c,u=this;e.hasParameters();){u=u.ownerComponent,t=u._ownerDocumentPart.template,r=u._ownerDocumentPart.objects,s=e.expandParameters(u),i=e.getSerialization().getExternalObjectLabels(),a=e.getInstances(),l=s.labels,n=s.labelsCollisions;for(var h,d=0;h=l[d];d++)o=n&&h in n?n[h]:h,i.indexOf(o)>=0?a[o]=r[h]:(c=t.getObjectMetadata(h),c.owner||(c.owner=r.owner),e.setObjectMetadata(o,c.require,c.label,c.owner))}}},_iterationLabel:{value:null},_iterationCreationPromise:{value:null},_createIteration:{value:function(){var e=this,t=(new this.Iteration).initWithRepetition(this);return this._iterationCreationPromise=this._iterationCreationPromise.then(function(){var n,i,r=e.element.ownerDocument;return e.currentIteration=t,n=e._iterationTemplate.getInstances(),n=Object.create(n),n[e._iterationLabel]=t,i=e._iterationTemplate.instantiateWithInstances(n,r).then(function(n){n.parentDocumentPart=e._ownerDocumentPart,t._templateDocumentPart=n,n.loadComponentTree().then(function(){u.isDebug&&u.debug("Iteration:%s component tree loaded.",Object.hash(t)),t._fragment=n.fragment,t._childComponents=n.childComponents,e.constructIteration(t)}).done(),e.currentIteration=null}),i.done(),i.then(null,function(){})}),this._requestedIterations++,t}},constructIteration:{value:function(){this._createdIterations++,this._createdIterations>=this._requestedIterations&&(this.needsDraw=!0,this._canDraw=!0)}},observeProperty:{value:function(e,t,n){return"contentAtCurrentIteration"===e||"objectAtCurrentIteration"===e?("contentAtCurrentIteration"===e?c("contentAtCurrentIteration",":iteration.object"):"objectAtCurrentIteration"===e&&c("objectAtCurrentIteration",":iteration.object"),p(this._contentForIteration,this.currentIteration,t,n)):"currentIteration"===e?(c("currentIteration",":iteration"),t(this.currentIteration)):d(this,e,t,n)}},makePropertyObservable:{value:function(e){return"currentIteration"!==e?n.makePropertyObservable.call(this,e):void 0}},_controllerIterations:{value:null},_drawnIterations:{value:null},_freeIterations:{value:null},_contentForIteration:{value:null},handleOrganizedContentRangeChange:{value:function(e,t,n){var i,r,a,s,o=n,l=this.iterations,c=this._contentForIteration,h=Math.min(e,t),d=t-h,p=e-h,m=this.organizedContent;for(u.isDebug&&(u.debug("Repetition:%s content changed +%s@%s %O -%s %O ",Object.hash(this),e?e:0,n,t?t:0),u.debug("Repetition:%s +%s -%s iterations",Object.hash(this),p,d)),this._iterationTemplate.isDirty&&this._iterationTemplate.refresh(),a=0;h>a;a++,n++)l[n].object=m[n],c.set(l[n],m[n]);if(d>0)for(i=l.splice(n,d),a=0;d>a;a++)r=i[a],r.recycle(),r.isDirty||this._freeIterations.push(r);if(p>0){if(u.isDebug)var g=[];for(;p>this._freeIterations.length;)this._freeIterations.push(this._createIteration()),u.isDebug&&g.push(this._freeIterations[this._freeIterations.length-1]);var v=Array(p);for(a=h,s=0;e>a;a++,s++){var f=this._freeIterations.pop();u.isDebug&&(g.has(f)||u.debug("Repetition:%s reusing %s",Object.hash(this),Object.hash(f)));var _=m[o+a];f.object=_,c.set(f,_),v[s]=f}l.swap(n,0,v)}(d>0||p>0)&&this._updateIndexes(n)}},_updateIndexes:{value:function(e){for(var t=this.iterations;t.length>e;e++)t[e].index=e}},_addDirtyClassListIteration:{value:function(e){e.forEachElement(function(t){var n;t&&(n=t.component)?(n.classList[e.active?"add":"remove"]("active"),n.classList[e.selected?"add":"remove"]("selected"),n.classList.remove("no-transition")):this._dirtyClassListIterations.add(e)},this)}},canDraw:{value:function(){var e=this.canDrawGate.value;return e=e&&this._requestedIterations<=this._createdIterations,e=e&&(this._initialContentDrawn||this._canDrawInitialContent)}},_boundaries:{value:null},_dirtyClassListIterations:{value:null},_requestedIterations:{value:null},_createdIterations:{value:null},_canDrawInitialContent:{value:null},_initialContentDrawn:{value:null},draw:{value:function(){this._initialContentDrawn||(this._drawInitialContent(),this._initialContentDrawn=!0);for(var e=this._drawnIterations.length-1;e>=0;e--)null===this._drawnIterations[e].index&&this._drawnIterations[e].retractFromDocument();for(var e=0;this.iterations.length>e;e++){var t=this.iterations[e];t._drawnIndex!==t.index&&t.isComponentTreeLoaded()&&t.injectIntoDocument(e)}var n=this._dirtyClassListIterations.toArray();this._dirtyClassListIterations.clear(),n.forEach(function(e){e.isComponentTreeLoaded()&&e.forEachElement(function(t){t.component||(t.classList[e.active?"add":"remove"]("active"),t.classList[e.selected?"add":"remove"]("selected"),t.classList.remove("no-transition"))},this)},this)}},_drawInitialContent:{value:function(){for(var e=this.element,t=e.childNodes.length,n=0;t>n;n++)e.removeChild(e.firstChild);var i=e.ownerDocument.createTextNode("");e.appendChild(i),this._boundaries.push(i)}},_updateDrawnIndexes:{value:function(e){for(var t=this._drawnIterations;t.length>e;e++)t[e]._drawnIndex=e}},_selectionPointer:{value:null},_startX:{value:0},_startY:{value:0},_currentActiveIteration:{value:null},handleIsSelectionEnabledChange:{value:function(e){e?this._enableSelectionTracking():this._disableSelectionTracking()}},_enableSelectionTracking:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1)}},_disableSelectionTracking:{value:function(){this._pressComposer.removeEventListener("pressStart",this,!1)}},handlePressStart:{value:function(e){var t=this._findIterationContainingElement(e.targetElement);t&&(this._startX=e.clientX,this._startY=e.clientY,this.__pressComposer.addEventListener("press",this,!1),this.__pressComposer.addEventListener("pressCancel",this,!1),t.shouldBecomeActive=!0,this._currentActiveIteration=t)}},_ignoreSelection:{value:function(){this._currentActiveIteration&&(this._currentActiveIteration.shouldBecomeActive=!1,this._currentActiveIteration=null),this.activeIterations.clear(),this._startX=0,this._startY=0,this.__pressComposer.removeEventListener("press",this,!1),this.__pressComposer.removeEventListener("pressCancel",this,!1)}},handlePressCancel:{value:function(){this._ignoreSelection()}},handlePress:{value:function(e){var t=this._findIterationContainingElement(e.targetElement);t&&this._currentActiveIteration===t&&(t.active=!1,t.selected||(t.selected=!0)),this._ignoreSelection()}},_findIterationContainingElement:{value:function(e){for(var t;e;){if(e===this.element)return this._iterationForElement.get(t);t=e,e=e.parentNode}}},Iteration:{value:g,serializable:!1}})}});