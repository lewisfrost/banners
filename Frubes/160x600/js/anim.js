var dude = document.getElementsByClassName("dude");
var bg = document.getElementsByClassName("bg");
var tcs = document.getElementsByClassName("tcs");
var blobs = document.getElementsByClassName("blobs");
var pack = document.getElementsByClassName("pack");
var cartoon = document.getElementsByClassName("cartoon");
var tcs = document.getElementsByClassName("tcs");
var txt1 = document.getElementsByClassName("txt1");
var txt2 = document.getElementsByClassName("txt2");
var cta = document.getElementsByClassName("cta");
var logo = document.getElementsByClassName("logo");
var logo2 = document.getElementsByClassName("logo2");
var bubble = document.getElementsByClassName("bubble");
var clicktags = document.getElementsByClassName("banner160x600");
var loopcount = 0;

/* Wait for the Enabler to initialize, then init() */
window.onload = function() {
    addevents();
    startAnim();
	
};

var count=0;

/*clicktag*/
function addevents(){
    document.getElementById("banner160x600").addEventListener("click", trackClick); 
}

function trackClick(){
    window.open(clickTag,'_blank');
}

// MAIN ANIMATION //
function startAnim() {
   console.log("startAnim");
        TweenLite.set(clicktags, {visibility:"visible"});
        TweenLite.set(logo, {visibility:"visible"});
        TweenLite.set(logo2, {visibility:"visible"});
        TweenLite.set(dude, {visibility:"visible"});
        TweenLite.set(bubble, {visibility:"visible"});
        TweenLite.set(bg, {visibility:"visible"});
        TweenLite.set(tcs, {visibility:"visible"});

        TweenLite.set(blobs, {visibility:"visible"});
        TweenLite.set(pack, {visibility:"visible"});
        TweenLite.set(tcs, {visibility:"visible"});
        TweenLite.set(cartoon, {visibility:"visible"});
        TweenLite.set(txt1, {visibility:"visible"});
        TweenLite.set(txt2, {visibility:"visible"});
        TweenLite.set(cta, {visibility:"visible"});

        var Tl = new TimelineMax({ repeat: 1, repeatDelay:2.8 });
	  
        Tl
       .set(logo, { alpha: 1 })
       .set(logo2, { alpha: 1 })
       .set(txt1, { alpha: 1 })
       .set(txt2, { alpha: 1 })



        // scale dude
        .to([logo, logo2, dude, bubble], .5, { ease: Power1.easeInOut, alpha:1 })
        .from("#dudeBubble", 3, { ease: Power1.easeInOut, scale:.41, y:100,x:35 })
        .to([bubble], 2, { ease: Power1.easeInOut, scale:3, y:-50},"-=2.5")

        // frame 2
        .to([bg], 1, { ease: Power4.easeOut, alpha: 1}, "-=1")
        .to( pack, .5, { ease: Power4.easeOut, alpha: 1}, "-=.5")
        .from( pack, 2, {ease:Elastic. easeOut.config(1, 0.4),scale:0}, "-=.5")


  
        .to( pack, 1, { ease: Power4.easeInOut, x: 300 })

        .to( pack, 1, { ease: Power4.easeInOut, x: 300 },"+=.5")
        .from( cartoon, 1, { ease: Power4.easeInOut, x: -160 },"-=2.5")
        .to( tcs, 1, { ease: Power4.easeInOut, alpha:1 },"-=2")
        .from( txt1, 1, { ease: Power4.easeInOut, x: -220 },"-=4.5")
        .from( txt2, 1, { ease: Power4.easeInOut, x: 220 },"-=4.5")
        .to( cta, .5, { ease: Power4.easeOut, alpha: 1 }, "-=.5")
        .from( cta, 2, {ease:Elastic. easeOut.config(1, 0.4),scale:0}, "-=.5")
  }

  function doEndFade() {
      if (loopcount == 0) {
          console.log("doEnd")
		  
          // do any special thing at the end.
      }
      loopcount+=1;
  }
