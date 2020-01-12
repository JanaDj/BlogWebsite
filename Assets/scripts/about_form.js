function mailToFunc() {
    var nameInput = document.getElementById('name');
    var userName = nameInput.value;
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var subject = "Blog Question from: " + userName + ", email: " + email;
    var bodyInput = document.getElementById('contactUsTextArea');
    var body = bodyInput.value;
    var mailToEmail = "jana.djordjevic.19@singimail.rs"

    window.location.href = "mailto:" + mailToEmail  + "?subject=" + subject + "&body=" + body;
  }