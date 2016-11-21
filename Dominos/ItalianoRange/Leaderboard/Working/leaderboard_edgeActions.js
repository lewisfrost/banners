/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10042, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'tandc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${open_click}", "click", function(sym, e) {
          sym.stop("closed");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close_click}", "click", function(sym, e) {
          sym.stop("open");

      });
      //Edge binding end

   })("tandc");
   //Edge symbol end:'tandc'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(); or sym.play("myLabel");
         sym.play();

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'tandc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${open_click}", "click", function(sym, e) {
          sym.stop("closed");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close_click}", "click", function(sym, e) {
          sym.stop("open");

      });
      //Edge binding end

   })("tandc_1");
   //Edge symbol end:'tandc_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1137, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(); or sym.play("myLabel");
         sym.play();

      });
      //Edge binding end

   })("Symbol_3_1");
   //Edge symbol end:'Symbol_3_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_3_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1137, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(); or sym.play("myLabel");
         sym.play();

      });
      //Edge binding end

   })("Symbol_3_2");
   //Edge symbol end:'Symbol_3_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-56609439");