function validate() {
  var tan1 = document.forms["form"]["Tanarok"].value;
  var tan2 = document.forms["form"]["Tanarok2"].value;
  var x = 0;

  if (tan1 == tan2) {
    alert("Nem választhatod ugyanazt a tanárt mindkét opciódhoz!")
    x=1;
  }
  var tem1 = document.forms["form"]["tema1"].value;
  var tem2 = document.forms["form"]["tema2"].value;

  if (tem1 == tem2) {
    alert("Nem választhatod ugyanazt a témát mindkét opciódhoz!")
    x=1;
  }
  if (tem1 == "" || tem2 == "") {
    alert("Kérlek töltsd ki az űrlap minden mezőjét!")
    return false;
    x=1;
  }
  let checkItem = document.getElementById("cbox");
  if (!checkItem.checked) {
    alert("Kérlek fogadd el az adatfelhasználási feltételeket!")
    x=1;
  }
  var szessz = document.forms["form"]["szesszio"].value;
  if(x == 0){
  alert("Sikeresen jelentkeztél a " + szessz + " szesszióra!")
  alert("A választott 1.témád:" + tem1 + "\n" + "A választott 1.tanár:" + tan1 + "\n" + "A választott 2.témád:" + tem2 + "\n" +  "A választott 2.tanár:" + tan2 + "\n" +  "A választott szessziód:" + szessz)
}
}
