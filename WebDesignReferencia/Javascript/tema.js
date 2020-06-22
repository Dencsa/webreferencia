$(document).ready(function(){
  var $temaform = $("#temavform");
  if($temaform.length){
    $temaform.validate({
      rules:{
        tanar:{
          required:true,
          minlength:5
        },
        tema:{
          required:true,
          minlength: 5
        },
        tanar2:{
          required:true,
          minlength: 5
        },
        tema2:{
          required:true,
          minlength: 5
        }
      },
      messages:{
        tanar:{
          required:'Kérlek tölts ki minden mezőt!',
          minlength:'Minimum 5 karakter kötelező minden mezőhöz!'
        },
        tema:{
          required:'Kérlek tölts ki minden mezőt!',
          minlength:'Minimum 5 karakter kötelező minden mezőhöz!'
        },
        tanar2:{
          required:'Kérlek tölts ki minden mezőt!',
          minlength:'Minimum 5 karakter kötelező minden mezőhöz!'
        },
        tema2:{
          required:'Kérlek tölts ki minden mezőt!',
          minlength:'Minimum 5 karakter kötelező minden mezőhöz!'
        }
      }
    });
    submit.disabled = false;
  }
});
