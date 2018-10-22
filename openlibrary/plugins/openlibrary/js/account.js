
/*
  function finishAjaxUsername(id, response) {
    $('#usernameLoading').hide();
    $('#'+id).html(unescape(response));
    $('#'+id).customFadeIn();
  }
  //finishAjax

  // CHECK EMAIL ASSOCIATION
  function validateCheckEmail() {
    $('#emailLoading').hide();
    $('#email').blur(function(){
      $('#emailLoading').show();
      $.post("checkemail.php", {
        email: $('#email').val()
      }, function(response){
        $('#emailResult').customFadeOut();
        setTimeout("finishAjaxEmail('emailResult', '"+escape(response)+"')", 400);
      });
        return false;
    });
  });

  function finishAjaxEmail(id, response) {
    $('#emailLoading').hide();
    $('#'+id).html(unescape(response));
    $('#'+id).customFadeIn();
  }
  //finishAjax
  */

function validateEmail() {
    $("form.email").validate({
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1 ? 'Hang on... You forgot to provide an updated email address.' : 'Hang on... You forgot to provide an updated email address.';
                $("div#contentMsg span").html(message);
                $("div#contentMsg").show().fadeTo(3000, 1).slideUp();
                $("span.remind").css("font-weight", "700").css("text-decoration", "underline");
            } else {
                $("div#contentMsg").hide();
            }
        },
        errorClass: "invalid",
        validClass: "success",
        highlight: function(element, errorClass) {
            $(element).addClass(errorClass);
            $(element.form).find("label[for=" + element.id + "]")
            .addClass(errorClass);
        }
    });
    $("#email").rules("add", {
        required: true,
        email: true,
        messages: {
            required: "",
            email: "Are you sure that's an email address?"
        }
    });
};

function validatePassword() {
    $("form.password").validate({
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = (errors == 1? 'Hang on... you missed a field.': 'Hang on... to change your password, we need your current and your new one.');
                $("div#contentMsg span").html(message);
                $("div#contentMsg").show().fadeTo(3000, 1).slideUp();
                $("span.remind").css("font-weight", "700").css("text-decoration", "underline");
            } else {
                $("div#contentMsg").hide();
            }
        },
        errorClass: "invalid",
        validClass: "success",
        highlight: function(element, errorClass) {
            $(element).addClass(errorClass);
            $(element.form).find("label[for=" + element.id + "]")
            .addClass(errorClass);
        }
    });
    $("#password").rules("add", {
        required: true,
        messages: {
            required: "."
        }
    });
    $("#new_password").rules("add", {
        required: true,
        messages: {
            required: ""
        }
    });
};
