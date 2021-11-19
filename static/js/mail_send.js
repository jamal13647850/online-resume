function send_mail() {
    var name = jQuery("#name").val();
    var email = jQuery("#email").val();
    var subject = jQuery("#subject").val();
    var message = jQuery("#message").val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = 0;

    if (name == "") {
        jQuery("#name").addClass('invalid');
        jQuery("#val_user_name").html("وارد کردن نام الزامی است");
        flag = 1;
    } else {
        jQuery("#name").removeClass('invalid');
        jQuery("#val_user_name").html("");
    }

    if (email == "") {
        jQuery("#email").addClass('invalid');
        jQuery("#val_user_email").html("وارد کردن ایمیل الزامی است");
        flag = 1;
    } else if (!email.match(mailformat)) {
        jQuery("#email").addClass('invalid');
        jQuery("#val_user_email").html("لطفا یک ایمیل معتبر وارد کنید");
        flag = 1;
    } else {
        jQuery("#email").removeClass('invalid');
        jQuery("#val_user_email").html("");
    }

    if (subject == "") {
        jQuery("#subject").addClass('invalid');
        jQuery("#val_subject").html("وارد کردن موضوع الزامی است");
        flag = 1;
    } else {
        jQuery("#subject").removeClass('invalid');
        jQuery("#val_subject").html("");
    }

    if (message == "") {
        jQuery("#message").addClass('invalid');
        jQuery("#val_message").html("لطفا پیام خود را وارد کنید");
        flag = 1;
    } else {
        jQuery("#message").removeClass('invalid');
        jQuery("#val_message").html("");
    }

    if (flag == 1) {
        return false;
    }

    var data = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message,
    };

	jQuery('.form-message').hide();
	jQuery('#snd_message').show();

    jQuery.ajax({
        type: "POST",
        crossOrigin: true,
        url: "static/php/contact.php",
        data: data,
        success: function(response) {
			jQuery('.form-message').hide();
            if (response == '1') {
                jQuery('#suce_message').show();
                jQuery("#contact-form")[0].reset();
            } else {
                jQuery('#err_message').show();
            }
        }
    });

}