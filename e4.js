function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
};

function border(){

  var r  =document.getElementById("border").elements[0].value;
  var g  =document.getElementById("border").elements[1].value;
  var b  =document.getElementById("border").elements[2].value;

  var w  =document.getElementById("border").elements[3].value;


  document.getElementById("p2").style.borderColor=rgb(r,g,b);
  document.getElementById("p2").style.width=w;


}
function background(){

  var r  =document.getElementById("background").elements[0].value;
  var g  =document.getElementById("background").elements[1].value;
  var b  =document.getElementById("background").elements[2].value;

  


  document.getElementById("p2").style.backgroundColor=rgb(r,g,b);



}
