-function(){"use strict";var b;var c=[],e=function(a){a=c.indexOf(a);0<=a&&c.splice(a,1)};document.addEventListener("click",function(a){for(var d=0;d<c.length;d++)if(25>Math.abs(a.clientX-c[d].l)&&25>Math.abs(a.clientY-c[d].m)||25>Math.abs(a.screenX-c[d].v)&&25>Math.abs(a.screenY-c[d].w))c.splice(d,1),a.stopPropagation(),a.preventDefault()},!0);var f=function(){};goog.inherits(f,HTMLElement);b=f.prototype;b.createdCallback=function(){this.j=this.i=0;this.f=this.b=this.g=this.c=null;this.a=!0};
b.attachedCallback=function(){this.b||(this.c=this.h.bind(this),this.g=this.u.bind(this),this.b=this.s.bind(this),this.f=this.o.bind(this));this.addEventListener("click",this.c,!1);this.addEventListener("touchstart",this.g,!1)};b.detachedCallback=function(){this.removeEventListener("click",this.c,!1);this.removeEventListener("touchstart",this.g,!1)};b.h=function(){if(this.a){var a;a=document.createEvent("Event");a.initEvent("action",!0,!0);this.dispatchEvent(a)}this.a=!0};
b.u=function(a){this.addEventListener("touchmove",this.b,!1);this.addEventListener("touchend",this.f,!1);a=a.touches[0];this.i=a.clientX;this.j=a.clientY};b.o=function(a){this.h();this.removeEventListener("touchmove",this.b,!1);this.removeEventListener("touchend",this.f,!1);a=a.changedTouches[0];a={l:a.clientX,m:a.clientY,v:a.screenX,w:a.screenY};c.push(a);setTimeout(e.bind(null,a),2500)};b.s=function(a){a=a.touches[0];this.a=this.a&&10>=Math.abs(this.i-a.clientX)&&10>=Math.abs(this.j-a.clientY)};
b.attributeChangedCallback=null;document.registerElement("gwd-taparea",{prototype:f.prototype});}()