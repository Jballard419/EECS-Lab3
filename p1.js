function password()
{
  var pass =document.getElementById("password")
if (pass.elements[0].value.length<8) {
  alert("short");

}else if (pass.elements[0].value==pass.elements[1].value) {
      alert("correct");
    }else{alert("passwords don't match")}

}
