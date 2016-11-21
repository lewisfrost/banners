"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg-a.jpg","images/bg-b.jpg","images/copy-a.png","images/copy-b.png","images/copy-c.png","images/logo.png"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bgA=this.smartObject({backgroundImage:"images/bg-a.jpg",parent:this.banner}),this.bgB=this.smartObject({backgroundImage:"images/bg-b.jpg",parent:this.banner}),this.copyA=this.smartObject({backgroundImage:"images/copy-a.png",parent:this.banner}),this.copyB=this.smartObject({backgroundImage:"images/copy-b.png",parent:this.banner}),this.copyC=this.smartObject({backgroundImage:"images/copy-c.png",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.png",left:"none",top:"none",parent:this.banner})},Banner.prototype.setup=function(){this.bgA.set({autoAlpha:0}),this.bgB.set({autoAlpha:0}),this.copyA.centerHorizontal(),this.copyA.set({autoAlpha:0,top:28}),this.copyB.centerHorizontal(),this.copyB.set({autoAlpha:0,top:28}),this.copyC.centerHorizontal(),this.copyC.set({autoAlpha:0,top:12}),this.logo.set({autoAlpha:0,bottom:13,right:13})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){Banner.timeline=(new TimelineLite).addLabel("start",0).add([TweenLite.to([this.bgA,this.logo],2,{autoAlpha:1,delay:.5}),TweenLite.to(this.bgA,6,{y:-80,delay:.5,ease:Quad.easeOut}),TweenLite.to(this.copyA,3,{autoAlpha:1,delay:1}),TweenLite.to(this.copyA,1,{autoAlpha:0,delay:4}),TweenLite.to([this.bgB,this.copyB],1,{autoAlpha:1,delay:6})]).to(this.copyB,1,{autoAlpha:0,delay:2}).to(this.copyC,1,{autoAlpha:1})};