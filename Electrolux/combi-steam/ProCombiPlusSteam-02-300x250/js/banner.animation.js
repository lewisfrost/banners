"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg-a.jpg","images/bg-b.jpg","images/copy-a.png","images/copy-b.png","images/copy-c.png","images/cta.jpg"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bgA=this.smartObject({backgroundImage:"images/bg-a.jpg",parent:this.banner,zIndex:2}),this.bgB=this.smartObject({backgroundImage:"images/bg-b.jpg",parent:this.banner,zIndex:1}),this.steam=this.smartObject({parent:this.banner,zIndex:3}),this.copyA=this.smartObject({backgroundImage:"images/copy-a.png",backgroundPosition:"center 80px",width:this.bannerWidth,height:this.bannerHeight,parent:this.banner,zIndex:3}),this.copyB=this.smartObject({backgroundImage:"images/copy-b.png",parent:this.banner,zIndex:3}),this.copyC=this.smartObject({backgroundImage:"images/copy-c.png",backgroundPosition:"right",left:"none",parent:this.banner,zIndex:3}),this.cta=this.smartObject({backgroundImage:"images/cta.jpg",parent:this.banner,zIndex:4}),this.line=this.smartObject({backgroundColor:"#cf2033",height:2,width:this.bannerWidth,top:"none",parent:this.banner,zIndex:5})},Banner.prototype.setup=function(){this.bgA.set({autoAlpha:0}),this.bgB.set({autoAlpha:0}),this.cta.set({height:0}),this.line.set({autoAlpha:0,bottom:0}),this.copyA.center(),this.copyA.set({autoAlpha:0}),this.copyB.set({width:0,left:19,top:59}),this.copyC.set({width:0,top:37,right:1}),this.steam.set({autoAlpha:0}),this.movement=this.bannerWidth/2-18,this.steamAmount=50,this.steamCanvas=new Steam(this.steam,"canvasSteam","images/steam.png",this.bannerWidth,this.bannerHeight,{x:this.bannerWidth/2,y:this.bannerHeight/2*1.2},this.steamAmount),this.steamCanvas.start(!0)},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){function t(t,e){t.set({backgroundPosition:"right",left:"auto",right:e})}Banner.timeline=(new TimelineLite).add(TweenLite.to([this.bgA,this.line,this.steam],2,{autoAlpha:1,delay:.5})).add([TweenLite.to(this.copyA,1,{autoAlpha:1}),TweenLite.to(this.bgB,1,{autoAlpha:1})]).add([TweenLite.to([this.bgA,this.copyA],2,{height:0,delay:1,ease:Expo.easeInOut}),TweenLite.to(this.line,2,{y:-this.bannerHeight,delay:1,ease:Expo.easeInOut}),TweenLite.to(this.copyB,2,{width:145,delay:2,ease:Expo.easeInOut})]).call(t,[this.copyB,142]).add([TweenLite.to(this.copyB,2,{width:0,delay:1,ease:Expo.easeInOut}),TweenLite.to([this.bgB],3,{x:-160,y:-46,delay:1.3,ease:Expo.easeInOut}),TweenLite.to(this.copyC,2,{width:145,delay:2.8,ease:Expo.easeInOut})]).add([TweenLite.to(this.cta,2,{height:this.bannerHeight,delay:1,ease:Expo.easeInOut}),TweenLite.to(this.line,2,{y:0,delay:1,ease:Expo.easeInOut})])};