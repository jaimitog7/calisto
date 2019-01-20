/*
* Form Validation
*/
$(function() {
  $("#formValidate").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 5
      },
      empresa: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      telefono: {
        required: true,
        minlength: 9
      },
      mensaje: {
        required: true,
        minlength: 10
      },
      password: {
        required: true,
        minlength: 5
      },
      cpassword: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      curl: {
        required: true,
        url: true
      },
      crole: "required",
      ccomment: {
        required: true,
        minlength: 15
      },
      cgender: "required",
      cagree: "required",
    },
    //For custom messages
    messages: {
      nombre: {
        required: "Ingrese un nombre",
        minlength: "Ingrese 5 caracteres minimo"
      },
      empresa: {
      required: "Ingrese una empresa",
      minlength: "Ingrese 5 caracteres minnimo"
    },
    telefono: {
      required: "Ingrese un fono",
      minlength: "Ingrese 9 caracteres minnnimo"
    },
    mensaje: {
      required: "Ingrese un mensaje",
      minlength: "Ingrese 10 caracteres minnnimo"
    },
      curl: "Enter your website",
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });
});