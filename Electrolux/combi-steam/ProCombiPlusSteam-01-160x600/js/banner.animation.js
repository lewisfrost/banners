"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/copy-a.png","images/copy-b.png","images/copy-c.png","images/cta.jpg"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",parent:this.banner}),this.steam=this.smartObject({parent:this.banner}),this.copyA=this.smartObject({backgroundImage:"images/copy-a.png",backgroundPosition:"center 220px",width:this.bannerWidth,height:this.bannerHeight,parent:this.banner}),this.copyB=this.smartObject({backgroundImage:"images/copy-b.png",parent:this.banner}),this.copyC=this.smartObject({backgroundImage:"images/copy-c.png",parent:this.banner}),this.line=this.smartObject({backgroundColor:"#cf2033",height:2,width:this.bannerWidth,top:"none",parent:this.banner,zIndex:12}),this.cta=this.smartObject({backgroundImage:"images/cta.jpg",parent:this.banner,zIndex:11})},Banner.prototype.setup=function(){this.bg.center(),this.bg.set({autoAlpha:0}),this.steam.set({autoAlpha:0}),this.copyA.set({autoAlpha:0}),this.line.set({autoAlpha:0,bottom:0}),this.copyB.set({top:10,width:0}),this.copyC.set({top:0,width:0}),this.cta.set({height:0,top:0}),this.steamAmount=50,this.steamCanvas=new Steam(this.steam,"canvasSteam","images/steam.png",this.bannerWidth,this.bannerHeight,{x:this.bannerWidth/2,y:this.bannerHeight/2*1.2},this.steamAmount),this.steamCanvas.start(!0)},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){function t(t,e){t.set({backgroundPosition:"right",left:"auto",right:e})}Banner.timeline=(new TimelineLite).add(TweenLite.to([this.bg,this.line,this.steam],2,{autoAlpha:1,delay:.5})).add([TweenLite.to(this.copyA,1,{autoAlpha:1})]).add([TweenLite.to(this.line,2,{y:-this.bannerHeight,delay:3,ease:Expo.easeInOut}),TweenLite.to(this.copyA,2,{height:0,delay:3,ease:Expo.easeInOut})]).add([TweenLite.to(this.copyB,2,{width:134,ease:Expo.easeInOut})]).add("one").call(t,[this.copyB,26]).add([TweenLite.to(this.copyB,2,{width:0,delay:2,ease:Expo.easeInOut})]).add([TweenLite.to(this.copyC,2,{width:144,ease:Expo.easeInOut})]).add("two").call(t,[this.copyC,16]).add([TweenLite.to(this.copyC,2,{width:0,delay:2,ease:Expo.easeInOut})]).add([TweenLite.to(this.bg,1,{x:0,ease:Expo.easeInOut}),TweenLite.to(this.copyC,1,{x:0,ease:Expo.easeInOut})]).add([TweenLite.to(this.cta,2,{height:this.bannerHeight,ease:Expo.easeInOut}),TweenLite.to(this.line,2,{y:0,ease:Expo.easeInOut})])};