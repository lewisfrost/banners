"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/days.png","images/line1.png","images/line2.png","images/logo.png","images/play.png","images/play2.png","images/player1.png","images/players.png","images/sun.png","images/espn.png"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.black=this.smartObject({backgroundImage:"images/bg.jpg",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner}),this.red1=this.smartObject({backgroundColor:"#EC174C",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner,zIndex:2}),this.red2=this.smartObject({backgroundColor:"#EC174C",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner,zIndex:4}),this.blue1=this.smartObject({backgroundColor:"#006BB5",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner,zIndex:1}),this.blue2=this.smartObject({backgroundColor:"#006BB5",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner,zIndex:3}),this.blue3=this.smartObject({backgroundColor:"#006BB5",height:this.bannerHeight,width:this.bannerWidth,parent:this.banner,zIndex:5}),this.boarder=this.smartObject({backgroundImage:"images/border.png",parent:this.banner,zIndex:5}),this.channel=this.smartObject({backgroundImage:"images/espn.png",parent:this.banner}),this.days=this.smartObject({backgroundImage:"images/days.png",parent:this.banner}),this.line1=this.smartObject({backgroundImage:"images/line1.png",top:"none",parent:this.banner,zIndex:999}),this.line2=this.smartObject({backgroundImage:"images/line2.png",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.png",parent:this.banner,zIndex:50}),this.play=this.smartObject({backgroundImage:"images/play.png",parent:this.banner,zIndex:51}),this.play2=this.smartObject({backgroundImage:"images/play2.png",parent:this.banner,zIndex:52}),this.player1=this.smartObject({backgroundImage:"images/player1.png",parent:this.banner,zIndex:2}),this.players=this.smartObject({backgroundImage:"images/players.png",parent:this.banner}),this.sund=this.smartObject({backgroundImage:"images/sun.png",parent:this.banner})},Banner.prototype.setup=function(){this.black.set({autoAlpha:1}),this.red1.set({autoAlpha:0}),this.red2.set({autoAlpha:0}),this.blue1.set({autoAlpha:0}),this.blue2.set({autoAlpha:0}),this.blue3.set({autoAlpha:0}),this.boarder.set({autoAlpha:1}),this.days.set({autoAlpha:0,top:35,left:434}),this.line1.centerHorizontal(),this.line1.centerVertical(),this.line1.set({autoAlpha:0,scale:50}),this.line2.centerHorizontal(),this.line2.set({autoAlpha:0,top:29}),this.channel.set({autoAlpha:0,top:50,width:0,left:390}),this.logo.centerVertical(),this.logo.set({autoAlpha:1,left:464}),this.play.centerVertical(),this.play.set({autoAlpha:0,left:352,scale:50}),this.play2.centerVertical(),this.play2.set({autoAlpha:0,left:352,scale:1}),this.player1.set({autoAlpha:0,left:0,top:0,scale:.2}),this.players.set({autoAlpha:0,left:0,top:1}),this.sund.set({autoAlpha:0,top:35,left:484})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){this.tl=new TimelineMax({repeat:3}).addLabel("start",0).add([TweenLite.to(this.days,.2,{autoAlpha:1,delay:1.5,left:496}),TweenLite.to(this.sund,.2,{autoAlpha:1,delay:1.5,left:427}),TweenLite.to(this.logo,.2,{autoAlpha:0,delay:3.5}),TweenLite.to(this.sund,.2,{autoAlpha:0,delay:3.5}),TweenLite.to(this.days,.2,{autoAlpha:0,delay:3.5}),TweenLite.to(this.line1,.2,{autoAlpha:1,scale:1,ease:Quad.easeIn,delay:3.5}),TweenLite.to(this.player1,.2,{autoAlpha:1,scale:1,delay:4}),TweenLite.to(this.players,.2,{autoAlpha:1,delay:4.5}),TweenLite.to(this.line1,.2,{autoAlpha:1,scale:0,delay:5.5}),TweenLite.to(this.line2,.2,{autoAlpha:1,delay:6}),TweenLite.to(this.boarder,.2,{autoAlpha:0,delay:8}),TweenLite.to(this.player1,.2,{autoAlpha:0,delay:8}),TweenLite.to(this.players,.2,{autoAlpha:0,delay:8}),TweenLite.to(this.line2,.2,{autoAlpha:0,delay:8}),TweenLite.to(this.blue1,.2,{autoAlpha:1,delay:8.6}),TweenLite.to(this.logo,.2,{autoAlpha:1,left:307,scale:.9,delay:8.6}),TweenLite.to(this.play,.2,{autoAlpha:1,scale:1,delay:8.6}),TweenLite.to(this.logo,.2,{scale:1.1,delay:8.9}),TweenLite.to(this.logo,.2,{scale:1,delay:9.1}),TweenLite.to(this.blue1,.2,{autoAlpha:1,delay:9.3}),TweenLite.to(this.red1,.2,{autoAlpha:1,delay:9.6}),TweenLite.to(this.blue2,.3,{autoAlpha:1,delay:9.9}),TweenLite.to(this.red2,.3,{autoAlpha:1,delay:10.2}),TweenLite.to(this.blue3,.2,{autoAlpha:1,delay:10.5}),TweenLite.to(this.blue3,.2,{autoAlpha:0,delay:10.8}),TweenLite.to(this.blue2,.2,{autoAlpha:0,delay:10.8}),TweenLite.to(this.blue1,.2,{autoAlpha:0,delay:10.8}),TweenLite.to(this.red2,.2,{autoAlpha:0,delay:10.8}),TweenLite.to(this.red1,.2,{autoAlpha:0,delay:10.8}),TweenLite.to(this.boarder,.2,{autoAlpha:1,delay:10.8}),TweenLite.to(this.play,.2,{autoAlpha:0,scale:1,delay:10.8}),TweenLite.to(this.play2,.2,{autoAlpha:1,scale:1,delay:10.8}),TweenLite.to(this.logo,.2,{left:464,scale:1,delay:11.9}),TweenLite.to(this.play2,.2,{left:1e3,delay:11.9})])};