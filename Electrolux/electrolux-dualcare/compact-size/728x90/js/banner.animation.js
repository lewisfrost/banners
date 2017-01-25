"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/logo.png","images/logo-text.png","images/cta.png","images/cta-corners.png","images/cta-shine.png","images/frame1-copy.png","images/frame2-copy.png","images/frame3-copy.png","images/frame4-copy.png","images/frame5-copy.png","images/product.png"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.png",parent:this.banner,zIndex:1}),this.logotext=this.smartObject({backgroundImage:"images/logo-text.png",parent:this.banner,zIndex:2}),this.cta=this.smartObject({backgroundImage:"images/cta.png",parent:this.banner,zIndex:2,overflow:"hidden"}),this.shine=this.smartObject({backgroundImage:"images/cta-shine.png",parent:this.cta,backgroundRepeat:"repeat-y",height:100,zIndex:3}),this.corners=this.smartObject({backgroundImage:"images/cta-corners.png",parent:this.cta,zIndex:4}),this.frame1copy=this.smartObject({backgroundImage:"images/frame1-copy.png",parent:this.banner,zIndex:2}),this.frame2copy=this.smartObject({backgroundImage:"images/frame2-copy.png",parent:this.banner,zIndex:2}),this.frame3copy=this.smartObject({backgroundImage:"images/frame3-copy.png",parent:this.banner,zIndex:2}),this.frame4copy=this.smartObject({backgroundImage:"images/frame4-copy.png",parent:this.banner}),this.frame5copy=this.smartObject({backgroundImage:"images/frame5-copy.png",parent:this.banner}),this.dryer=this.smartObject({backgroundImage:"images/product.png",parent:this.banner,zIndex:0})},Banner.prototype.setup=function(){this.bg.set({autoAlpha:1,left:-415,top:-150}),this.logo.set({left:379}),this.logotext.set({autoAlpha:0,left:457,top:35}),this.frame1copy.centerVertical(),this.frame1copy.set({left:475}),this.frame2copy.centerVertical(),this.frame2copy.set({left:475,autoAlpha:0}),this.frame3copy.centerVertical(),this.frame3copy.set({left:160,autoAlpha:0}),this.frame4copy.centerVertical(),this.frame4copy.set({left:160,autoAlpha:0}),this.frame5copy.centerVertical(),this.frame5copy.set({left:110,autoAlpha:0}),this.dryer.set({top:200,left:60,autoAlpha:0}),this.cta.set({top:33,left:605,autoAlpha:0}),this.shine.set({autoAlpha:1,top:-40,left:150,rotation:45})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){this.tl=(new TimelineLite).addLabel("start",0).add([TweenLite.to(this.bg,1.5,{scale:.6,left:-150,top:-285,delay:2}),TweenLite.to(this.frame1copy,.5,{autoAlpha:0,delay:2}),TweenLite.to(this.frame2copy,.5,{autoAlpha:1,delay:2.6}),TweenLite.to(this.frame2copy,.5,{autoAlpha:0,delay:5}),TweenLite.to(this.bg,.5,{autoAlpha:0,delay:5}),TweenLite.to(this.logotext,.5,{autoAlpha:1,delay:5.5}),TweenLite.to(this.dryer,.5,{scale:1.2,top:10,autoAlpha:1,delay:5.5}),TweenLite.to(this.frame3copy,.5,{autoAlpha:1,delay:6}),TweenLite.to(this.frame3copy,.5,{autoAlpha:0,delay:8}),TweenLite.to(this.frame4copy,.5,{autoAlpha:1,delay:8.5}),TweenLite.to(this.frame4copy,.5,{autoAlpha:0,delay:10.5}),TweenLite.to(this.dryer,.5,{scale:1.2,top:10,left:20,delay:11}),TweenLite.to(this.frame5copy,.5,{autoAlpha:1,delay:11.5}),TweenLite.to(this.cta,.5,{autoAlpha:1,delay:11.5}),TweenLite.to(this.shine,.5,{x:-250,delay:13.5})])};