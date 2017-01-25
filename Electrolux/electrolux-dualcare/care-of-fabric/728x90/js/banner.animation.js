"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg1.jpg","images/bg2.jpg","images/bg3.jpg","images/bg4.jpg","images/logo.png","images/logo-text.png","images/cta.png","images/cta-shine.png","images/frame1-copy.png","images/frame2-copy.png","images/frame3-copy.png","images/frame4-copy.png","images/frame5-copy.png","images/frame5-copy1.png","images/frame6-copy.png","images/product.png"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.bg1=this.smartObject({backgroundImage:"images/bg1.jpg",parent:this.banner}),this.bg2=this.smartObject({backgroundImage:"images/bg2.jpg",parent:this.banner}),this.bg3=this.smartObject({backgroundImage:"images/bg3.jpg",parent:this.banner}),this.bg4=this.smartObject({backgroundImage:"images/bg4.jpg",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.png",parent:this.banner,zIndex:1}),this.logotext=this.smartObject({backgroundImage:"images/logo-text.png",parent:this.banner,zIndex:3}),this.cta=this.smartObject({backgroundImage:"images/cta.png",parent:this.banner,zIndex:5,overflow:"hidden"}),this.shine=this.smartObject({backgroundImage:"images/cta-shine.png",parent:this.cta,backgroundRepeat:"repeat-y",height:100,zIndex:6}),this.frame1copy=this.smartObject({backgroundImage:"images/frame1-copy.png",parent:this.banner,zIndex:2}),this.frame2copy=this.smartObject({backgroundImage:"images/frame2-copy.png",parent:this.banner,zIndex:2}),this.frame3copy=this.smartObject({backgroundImage:"images/frame3-copy.png",parent:this.banner,zIndex:2}),this.frame4copy=this.smartObject({backgroundImage:"images/frame4-copy.png",parent:this.banner,zIndex:2}),this.frame5copy=this.smartObject({backgroundImage:"images/frame5-copy.png",parent:this.banner,zIndex:2}),this.frame5copy1=this.smartObject({backgroundImage:"images/frame5-copy1.png",parent:this.banner,zIndex:2}),this.frame6copy=this.smartObject({backgroundImage:"images/frame6-copy.png",parent:this.banner,zIndex:1}),this.dryer=this.smartObject({backgroundImage:"images/product.png",parent:this.banner,zIndex:0})},Banner.prototype.setup=function(){this.bg1.set({autoAlpha:1}),this.bg2.set({autoAlpha:0}),this.bg3.set({autoAlpha:0}),this.bg4.set({autoAlpha:0}),this.logo.set({left:365}),this.logotext.set({autoAlpha:0,left:437,top:35}),this.frame1copy.centerVertical(),this.frame1copy.set({left:455}),this.frame2copy.centerVertical(),this.frame2copy.set({left:465,autoAlpha:0}),this.frame3copy.centerVertical(),this.frame3copy.set({left:465,autoAlpha:0}),this.frame4copy.centerVertical(),this.frame4copy.set({left:155,autoAlpha:0}),this.frame5copy.centerVertical(),this.frame5copy.set({left:435,autoAlpha:0}),this.frame5copy1.set({top:47,left:603,autoAlpha:0}),this.frame6copy.centerVertical(),this.frame6copy.set({left:120,autoAlpha:0}),this.dryer.set({top:200,left:40,autoAlpha:0}),this.cta.centerHorizontal(),this.cta.set({top:33,left:585,autoAlpha:0}),this.shine.set({autoAlpha:.3,top:5,left:50,rotation:45})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){this.tl=(new TimelineLite).addLabel("start",0).add([TweenLite.to(this.bg1,.5,{autoAlpha:0,delay:2}),TweenLite.to(this.frame1copy,.5,{autoAlpha:0,delay:2}),TweenLite.to(this.bg2,.5,{autoAlpha:1,delay:2.5}),TweenLite.to(this.frame2copy,.5,{autoAlpha:1,delay:3}),TweenLite.to(this.frame2copy,.5,{autoAlpha:0,delay:5.5}),TweenLite.to(this.bg2,.5,{autoAlpha:0,delay:5.5}),TweenLite.to(this.bg3,.5,{autoAlpha:1,delay:6}),TweenLite.to(this.frame3copy,.5,{autoAlpha:1,delay:6.5}),TweenLite.to(this.bg3,.5,{autoAlpha:0,delay:9}),TweenLite.to(this.frame3copy,.5,{autoAlpha:0,delay:9}),TweenLite.to(this.dryer,.5,{scale:1.2,top:10,autoAlpha:1,delay:9.5}),TweenLite.to(this.frame4copy,.5,{autoAlpha:1,delay:9.5}),TweenLite.to(this.frame4copy,.5,{autoAlpha:0,delay:11.5}),TweenLite.to(this.dryer,.5,{autoAlpha:0,delay:11.5}),TweenLite.to(this.frame5copy,.5,{autoAlpha:1,delay:12}),TweenLite.to(this.frame5copy1,.5,{autoAlpha:1,delay:12.5}),TweenLite.to(this.bg4,.5,{autoAlpha:1,delay:12}),TweenLite.to(this.frame5copy,.5,{autoAlpha:0,delay:15}),TweenLite.to(this.frame5copy1,.5,{autoAlpha:0,delay:15}),TweenLite.to(this.bg4,.5,{autoAlpha:0,delay:15}),TweenLite.to(this.dryer,.5,{autoAlpha:1,top:10,left:30,delay:15.5}),TweenLite.to(this.logotext,.5,{autoAlpha:1,delay:15.5}),TweenLite.to(this.frame6copy,.5,{autoAlpha:1,delay:16}),TweenLite.to(this.cta,.5,{autoAlpha:1,delay:16}),TweenLite.to(this.shine,.5,{x:-250,delay:17})])};