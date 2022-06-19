
$(document).ready(function){
$("#sp-form").submit(function (e) {
    return false;
});
$("#Register").click(function () {
    var action = $("#sp-form").attr('action'); //#sp-form is the register form id.

    var spform_data = {
        myusername: $("#myusername").val(),
        myemail: $("#myemail").val(),
        mypassword: $("#mypassword").val()         
//Getting data from the input forms using their respective id's
    }


    $.ajax({
        type: "POST",
        url: action,
        data: spform_data,
        success: function (outcome)
        {
            if (outcome.indexOf("success")>=0) {
                $("#sp-form").slideUp('slow', function () {
                    $("#message_sp").html('<p class="success">You have been registered successfully!</p><p style="color:#1c1c1c;">Redirecting....</p>');
                });
            }
            else if (outcome.indexOf("alreadymember")>=0) {


                $("#modal_signup").css("height", "380");
                $("#message_sp").html('<p class="error">ERROR: Email match found,Just Sign in.</p>');


            }

            else if (outcome.indexOf("failed")>=0) {


                $("#modal_signup").css("height", "380");
                $("#message_sp").html('<p class="error">ERROR:  Failed to Register</p>');


            }
            else {


                $("#modal_signup").css("height", "380");
                $("#message_sp").html('<p class="error">Unknown Error</p>');
            }

        }

    });
    return false;


});}
