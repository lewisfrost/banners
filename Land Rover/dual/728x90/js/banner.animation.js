'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function() {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/copy1.png',
    'images/copy2.png',
    'images/copy3.png',
    'images/copy4.png',
    'images/copy5.png',
    'images/car.jpg',
    'images/cta.png',
    'images/logo.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function() {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function() {
  this.black = this.smartObject({
    backgroundColor: '#FFF',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,

  });

  this.white = this.smartObject({
    backgroundColor: '#FFF',
    height: this.bannerHeight,
    width: 400,
    parent: this.banner,
    zIndex: 998
  });

  this.copy1 = this.smartObject({
    backgroundImage: 'images/copy1.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.copy2 = this.smartObject({
    backgroundImage: 'images/copy2.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.copy3 = this.smartObject({
    backgroundImage: 'images/copy3.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.copy4 = this.smartObject({
    backgroundImage: 'images/copy4.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.copy5 = this.smartObject({
    backgroundImage: 'images/copy5.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.car = this.smartObject({
    backgroundImage: 'images/car.jpg',
    parent: this.banner,
    zIndex:50
  });
    
    this.car2 = this.smartObject({
    backgroundImage: 'images/car.jpg',
    parent: this.banner,
    zIndex:50
  });

  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    parent: this.banner,
    zIndex:999
  });

  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    parent: this.banner,
    zIndex:1000
  });

};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function() {

  this.white.set({left:370});
  this.copy1.set({autoAlpha: 0, top: 20, left:385});
  this.copy2.set({autoAlpha: 0, top: 20, left:385});
  this.copy3.set({autoAlpha: 0, top: 20, left:385});
  this.copy4.set({autoAlpha: 0, top: 35, left:385});
  this.copy5.set({autoAlpha: 0, top: 20, left:385});
  this.cta.set({autoAlpha: 0, top: 63, left:385});
  this.car.set({autoAlpha: 0, top: -40, left:-135});
  this.car2.set({autoAlpha: 0, top: -40, left:-495});
  this.logo.set({autoAlpha: 1, top: 20, left:638});
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function() {
  TweenLite.to('.preloader', 1, {autoAlpha: 0});
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function() {
  this.tl = new TimelineLite()
    .addLabel('start', 0)
    .add([
      TweenLite.to(this.car, 0.5, {autoAlpha:1, delay:1}),
      TweenLite.to(this.copy1, 0.5, {autoAlpha:1, delay:1}),
      TweenLite.to(this.copy1, 0.8, {autoAlpha:0, delay:3.7}),
      TweenLite.to(this.car2, 0.5, {autoAlpha: 1, delay:3.7}),
      TweenLite.to(this.copy2, 0.8, {autoAlpha:1, delay:4.2}),
      TweenLite.to(this.copy2, 0.8, {autoAlpha:0, delay:7.2}),
      TweenLite.to(this.car, 0.8, {left:-315, delay:7.2}),
      TweenLite.to(this.car2, 0.5, {autoAlpha: 0, delay:8}),
      TweenLite.to(this.copy3, 0.8, {autoAlpha:1, delay:8}),
      TweenLite.to(this.copy4, 0.8, {autoAlpha:1, delay:9.5}),
      TweenLite.to(this.car, 0.8, {scale:0.7, delay:9.5}),
      TweenLite.to(this.copy3, 0.8, {autoAlpha:0, delay:12.2}),
      TweenLite.to(this.copy4, 0.8, {autoAlpha:0, delay:12.2}),
      TweenLite.to(this.copy5, 0.8, {autoAlpha:1, delay:13}),
      TweenLite.to(this.cta, 0.8, {autoAlpha:1, delay:13.5})

    ])

};