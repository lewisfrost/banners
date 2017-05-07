"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg-a.jpg","images/bg-b.jpg","images/copy-a.png","images/copy-b.png","images/copy-c.png","images/copy-d.png","images/cta.jpg"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.bgA=this.smartObject({backgroundImage:"images/bg-a.jpg",backgroundSize:"548px 600px",backgroundPosition:"center top",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner,zIndex:2}),this.bgB=this.smartObject({top:"none",parent:this.banner,zIndex:1}),this.bgBInner=this.smartObject({backgroundImage:"images/bg-b.jpg",backgroundPosition:"bottom",top:"none",parent:this.bgB}),this.copyA=this.smartObject({backgroundImage:"images/copy-a.png",backgroundPosition:"center 215px",parent:this.banner,height:this.bannerHeight,width:this.bannerWidth,zIndex:3}),this.copyB=this.smartObject({backgroundImage:"images/copy-b.png",parent:this.banner,zIndex:3}),this.copyC=this.smartObject({backgroundImage:"images/copy-c.png",parent:this.banner,zIndex:3}),this.copyD=this.smartObject({backgroundImage:"images/copy-d.png",parent:this.banner,zIndex:3}),this.cta=this.smartObject({backgroundImage:"images/cta.jpg",parent:this.banner,zIndex:4}),this.line=this.smartObject({backgroundColor:"#cf2033",height:2,width:this.bannerWidth,top:"none",parent:this.banner,zIndex:5})},Banner.prototype.setup=function(){this.bgA.set({autoAlpha:0}),this.bgB.set({autoAlpha:0,height:this.bannerHeight,bottom:0,scale:1.3,x:-171,y:68}),this.bgBInner.set({bottom:0,x:-740,y:-65,scale:1.6,scaleX:1.7,rotationX:-25,rotationY:-40,rotationZ:-18,transformOrigin:"33% 61%"}),this.cta.set({height:0,bottom:0}),this.copyA.center(),this.copyA.set({autoAlpha:0}),this.line.set({autoAlpha:0,bottom:0}),this.copyB.set({width:0,left:3,top:470}),this.copyC.set({width:0,left:3,top:470}),this.copyD.set({height:0,left:10,top:125})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){function e(e,t){e.set({backgroundPosition:"right",left:"auto",right:t})}function t(e,t){e.set({backgroundPosition:"bottom",top:"auto",bottom:t})}Banner.timeline=(new TimelineLite).addLabel("start",0).add(TweenLite.to([this.bgA,this.line],2,{autoAlpha:1,delay:.5})).add([TweenLite.to(this.copyA,1,{autoAlpha:1}),TweenLite.to(this.bgB,1,{autoAlpha:1})]).add([TweenLite.to(this.bgA,2,{height:0,delay:1,ease:Power2.easeInOut}),TweenLite.to(this.copyA,2,{height:0,delay:1,ease:Power2.easeInOut}),TweenLite.to(this.line,2,{y:-this.bannerHeight,delay:1,ease:Power2.easeInOut})]).add([TweenLite.to(this.copyB,1,{width:160,ease:Power2.easeInOut})]).call(e,[this.copyB,-3]).add([TweenLite.to(this.copyB,1,{width:0,delay:2,ease:Power2.easeInOut}),TweenLite.to(this.bgBInner,2,{x:-200,delay:2.5,ease:Power2.easeInOut})]).add([TweenLite.to(this.copyC,1,{width:155,ease:Power2.easeInOut})]).call(e,[this.copyC,2]).add([TweenLite.to(this.copyC,1,{width:0,delay:2,ease:Power2.easeInOut})]).add([TweenLite.to(this.bgBInner,2,{rotationX:0,rotationY:0,rotationZ:0,x:-332,y:307,scale:.32,ease:Power2.easeInOut,force3D:!0})]).add([TweenLite.to(this.copyD,1,{height:65,ease:Power2.easeInOut})]).call(t,[this.copyD,410]).add([TweenLite.to(this.copyD,1,{height:0,delay:2,ease:Power2.easeInOut})]).add([TweenLite.to(this.cta,2,{height:this.bannerHeight,ease:Power2.easeInOut}),TweenLite.to(this.line,2,{y:0,ease:Power2.easeInOut})])};