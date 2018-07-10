var click1 = 0, click2 = 0, total=0;

$(document).ready(function(){
   console.log("We are in the loop.");
   console.log("Click1: " + click1);
   console.log("Click2: " + click2);
   console.log("Total:  " + total);

   $("#div1").click(function() {
       ++click1;
       ++total;
       $(this).text("Clicked: "+click1+ " total: "+total);
       $("#div2").text("Clicked: "+click2+ " total: "+total);
       console.log("Click1: " + click1);
       console.log("Click2: " + click2);
       console.log("Total:  " + total);
   });

   $("#div2").click(function() {
       ++click2;
       ++total;
       $(this).text("Clicked: "+click2+ " total: "+total);
       $("#div1").text("Clicked: "+click1+ " total: "+total);
       console.log("Click1: " + click1);
       console.log("Click2: " + click2);
       console.log("Total:  " + total);
   });
    console.log("Click1: " + click1);
    console.log("Click2: " + click2);
    console.log("Total:  " + total);
});