"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/blur.png","images/logo.png","images/cta.png","images/cta-shine.png","images/frame1-copy.png","images/frame2-copy.png","images/frame3-copy.png","images/frame4-copy.png","images/frame5-copy.png","images/product.png"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",parent:this.banner}),this.blur=this.smartObject({backgroundImage:"images/blur.png",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.png",parent:this.banner,zIndex:1}),this.cta=this.smartObject({backgroundImage:"images/cta.png",parent:this.banner,zIndex:2,overflow:"hidden"}),this.shine=this.smartObject({backgroundImage:"images/cta-shine.png",parent:this.cta,backgroundRepeat:"repeat-y",height:100,zIndex:3}),this.frame1copy=this.smartObject({backgroundImage:"images/frame1-copy.png",parent:this.banner}),this.frame2copy=this.smartObject({backgroundImage:"images/frame2-copy.png",parent:this.banner}),this.frame3copy=this.smartObject({backgroundImage:"images/frame3-copy.png",parent:this.banner}),this.frame4copy=this.smartObject({backgroundImage:"images/frame4-copy.png",parent:this.banner}),this.frame5copy=this.smartObject({backgroundImage:"images/frame5-copy.png",parent:this.banner}),this.dryer=this.smartObject({backgroundImage:"images/product.png",parent:this.banner,zIndex:0})},Banner.prototype.setup=function(){this.bg.set({left:-570,top:-50,scale:.9}),this.logo.centerHorizontal(),this.logo.set({top:480}),this.blur.set({autoAlpha:0}),this.frame1copy.centerHorizontal(),this.frame2copy.centerHorizontal(),this.frame3copy.centerHorizontal(),this.frame4copy.centerHorizontal(),this.frame1copy.set({top:30}),this.frame2copy.set({top:35,autoAlpha:0}),this.frame3copy.set({top:120,autoAlpha:0}),this.frame4copy.set({top:120,autoAlpha:0}),this.frame5copy.set({top:50,left:28,autoAlpha:0}),this.dryer.centerHorizontal(),this.dryer.set({top:305,autoAlpha:0}),this.cta.set({top:250,left:25,autoAlpha:0}),this.shine.set({autoAlpha:1,top:-40,left:150,rotation:45})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){this.tl=(new TimelineLite).addLabel("start",0).add([TweenLite.to(this.bg,1.5,{left:-160,ease:Quad.easeInOut,delay:2}),TweenLite.to(this.frame1copy,.5,{autoAlpha:0,delay:2}),TweenLite.to(this.frame2copy,.5,{autoAlpha:1,delay:2.6}),TweenLite.to(this.frame2copy,.5,{autoAlpha:0,delay:5.2}),TweenLite.to(this.blur,.5,{autoAlpha:1,delay:5}),TweenLite.to(this.dryer,.5,{autoAlpha:1,scale:1,top:288,delay:5.5}),TweenLite.to(this.frame3copy,.5,{autoAlpha:1,delay:6}),TweenLite.to(this.frame3copy,.5,{autoAlpha:0,delay:8}),TweenLite.to(this.frame4copy,.5,{autoAlpha:1,delay:8.5}),TweenLite.to(this.frame4copy,.5,{autoAlpha:0,delay:10.5}),TweenLite.to(this.bg,.5,{autoAlpha:0,delay:10.5}),TweenLite.to(this.blur,.5,{autoAlpha:0,delay:11}),TweenLite.to(this.dryer,.5,{scale:.8,top:305,ease:Quad.easeInOut,delay:11}),TweenLite.to(this.frame5copy,.5,{autoAlpha:1,delay:11.5}),TweenLite.to(this.cta,.5,{autoAlpha:1,delay:11.5}),TweenLite.to(this.shine,.5,{x:-250,delay:13.5})])};