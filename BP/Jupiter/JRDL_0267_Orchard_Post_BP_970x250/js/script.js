var tw = TweenLite;

var imgArr1 = ['flip1','flip2','flip3','flip4','flip5','flip6','flip7','flip8','flip9','flip10','flip11','flip12','flip13','flip14','flip15','flip16','flip17',
               'flip18','flip19','flip20','flip21','flip22','flip23','flip24','flip25'];

var imgArr1_fadeOut = ['flip1','flip2','flip3','flip4','flip5','flip6','flip7','flip8','flip9','flip10','flip11','flip12','flip13','flip14','flip15','flip16','flip17',
               'flip18','flip19','flip20','flip21','flip22','flip23','flip24'];
			  
var imgArr2 = ['flip26','flip27','flip28','flip29','flip30','flip31','flip32','flip33','flip34','flip35','flip36','flip37','flip38','flip39','flip40','flip41',
               'flip42','flip43','flip44','flip45','flip46','flip47','flip48','flip49','flip50'];
			  
var imgArr2_fadeOut = ['flip25','flip26','flip27','flip28','flip29','flip30','flip31','flip32','flip33','flip34','flip35','flip36','flip37','flip38','flip39','flip40','flip41',
               'flip42','flip43','flip44','flip45','flip46','flip47','flip48','flip49'];

function initbanner(){
    EBinit()
	frame1Anim()
	 for(var i=0; i<imgArr1.length; i++){
        tw.set('#'+String(imgArr1[i]),{alpha:1, delay:i*0.04}); 
    }
}

function frame1Anim(){
	 for(var i=0; i<imgArr1_fadeOut.length; i++){
        tw.to('#'+String(imgArr1_fadeOut[i]),0.5,{alpha:0, ease:Quad.easeOut, delay:i*0.05}); 
    }

     tw.to(copy1,1, {alpha:1, ease:Quad.easeIn, delay:0})
	 tw.to(mask,3, {width:712, ease: Power4.easeOut, delay:0.5})
	 tw.delayedCall(5,frame2Anim)
}

function frame2Anim(){
     tw.to(copy1,0.65, {alpha:0, ease:Quad.easeInOut, delay:.6})
	 tw.to(mask,2, {width:464, ease: Power4.easeInOut, delay:0})
	 
	 tw.to(copy2,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.5})
	 tw.to(copy3,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.7})
     tw.delayedCall(5,frame3Anim)
}

function frame3Anim(){
	tw.to([copy2,copy3],0.65, {alpha:0, ease:Quad.easeInOut, delay:0})
	tw.to(copy4,0.65, {alpha:1, ease:Quad.easeInOut, delay:0.65})
	tw.delayedCall(7,frame4Anim)
}

function frame4Anim(){
	 tw.to(copy4,0.65, {alpha:0, ease:Quad.easeInOut, delay:0.65})
	 tw.delayedCall(1.5,frame5Anim)
}

function frame5Anim(){
	 for(var i=0; i<imgArr2.length; i++){
        tw.set('#'+String(imgArr2[i]),{alpha:1, delay:i*0.04}); 
		tw.to(cta,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.0})
		tw.delayedCall(0,fadeOut)
    }
}

function fadeOut(){
	 for(var i=0; i<imgArr2_fadeOut.length; i++){
        tw.to('#'+String(imgArr2_fadeOut[i]),0.5,{alpha:0, ease:Quad.easeOut, delay:i*0.05}); 
    }
}

function EBinit(){
	document.getElementById("bannerCTA").addEventListener("click", handleClickthroughButtonClick);
}

function handleClickthroughButtonClick(){
    EB.clickthrough(); 
}