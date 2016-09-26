montageDefine("17d80b2","ui/video.reel/video",{dependencies:["montage/core/core","montage/ui/component","montage/composer/press-composer","montage/core/media-controller","montage/ui/base/abstract-video"],factory:function(t,a){var l=t("montage/core/core").Montage;t("montage/ui/component").Component;var e=t("montage/composer/press-composer").PressComposer;t("montage/core/media-controller").MediaController;var s=t("montage/ui/base/abstract-video").AbstractVideo;a.Video=l.create(s,{constructor:{value:function(){s.constructor.call(this),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange")}},enterDocument:{value:function(t){s.enterDocument&&s.enterDocument.call(this,t),t&&(this.setupFirstPlay(),this.addOwnPropertyChangeListener("src",this),this.addOwnPropertyChangeListener("posterSrc",this))}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},handlePlayAction:{value:function(){this.loadMedia(),this.videoController.play(),this.classList.remove("digit-Video--firstPlay")}},handleVideoPress:{value:function(){this.videoController.status===this.videoController.EMPTY&&(this.loadMedia(),this.classList.remove("digit-Video--firstPlay"),this._pressComposer.unload(),this._pressComposer.removeEventListener("pressStart",this,!1),this._pressComposer.removeEventListener("press",this,!1),this._pressComposer.removeEventListener("pressCancel",this,!1),this._pressComposer=null)}},handleTouchstart:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("touchend",this,!1)}},handleTouchend:{value:function(){this.setHideControlsTimeout()}},handleMousedown:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("mouseup",this,!1)}},handleMouseup:{value:function(){this.setHideControlsTimeout()}},handleControllerStatusChange:{value:function(t){this.videoController&&(this._firstPlay||t===this.videoController.PLAYING?this._firstPlay&&t===this.videoController.PLAYING&&this.doFirstPlay():(this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls")))}},handleSrcChange:{value:function(){var t=this.mediaElement,a=document.createElement("video");a.className=t.className,this.element.replaceChild(a,t),this.mediaElement=a,this.setupFirstPlay()}},handlePostersrcChange:{value:function(){this.showPoster()}},setupFirstPlay:{value:function(){this.element.removeEventListener("touchstart",this,!1),this.element.removeEventListener("mousedown",this,!1),this._firstPlay=!0,this.videoController.stop(),this.classList.add("digit-Video--firstPlay"),this.classList.remove("digit-Video--showControls"),this._pressComposer=e.create(),this._pressComposer.identifier="video",this.addComposerForElement(this._pressComposer,this.mediaElement),this.showPoster()}},draw:{value:function(){s.draw&&s.draw.call(this),this.supportsFullScreen?this.isFullScreen?this.element.classList.add("fullscreen"):this.element.classList.remove("fullscreen"):this.element.classList.remove("fullscreen")}},doFirstPlay:{value:function(){this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("mousedown",this,!1),this._firstPlay=!1}},setHideControlsTimeout:{value:function(){var t=this;this.clearHideControlsTimeout(),this._hideControlsTimeout=setTimeout(function(){t.classList.remove("digit-Video--showControls")},2500)}},clearHideControlsTimeout:{value:function(){this._hideControlsTimeout&&clearTimeout(this._hideControlsTimeout)}},_firstPlay:{value:!0},_hideControlsTimeout:{value:null}})}});