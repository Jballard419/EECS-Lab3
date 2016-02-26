var x=0;
var image=["cB.jpg","cB2.jpe","cB3..jpg","133292.jpg","Sc.jpe","sc2.jpe"];

function forward() {
  x++;
  if(x>=image.length){x=0;};
  var theImgTag = document.getElementById("myImgId");
   theImgTag.src=image[x];

}
function backward() {
  x=x-1;
  if(x<0){x=image.length-1;};
  var theImgTag = document.getElementById("myImgId");
   theImgTag.src=image[x];

}
