"use strict";Banner.prototype.loader=function(){function n(){i.onInit(),Enabler.isPageLoaded()?e():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,e)}function e(){i.onPolite(),Enabler.isVisible()?t():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,t)}function t(){i.onVisible()}var i=this;Enabler.isInitialized()?n():Enabler.addEventListener(studio.events.StudioEvent.INIT,n)},Banner.prototype.politeLoad=function(n,e){for(var t=0,i=function(){++t===n.length&&e&&e()},o=0;o<n.length;o++)Enabler.loadScript(n[o],i)},Banner.prototype.bindEvents=function(){this.banner.addEventListener("click",function(n){Enabler.exit("clickthrough")}),this.banner.addEventListener("touchend",function(n){Enabler.exit("clickthrough")})};