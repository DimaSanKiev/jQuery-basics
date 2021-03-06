// Problem: hints are shown even when form is valid
// Solution: hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

// Hide hints
$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();    // && usernamePresent()
}

function passwordEvent() {
    // Find out if password is valid
    if (isPasswordValid()) {
        // hide hint if valid
        $password.next().hide();
    } else {
        // else show hint
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    // Find out if password and confirmation match
    if (arePasswordsMatching()) {
        // hide hint if match
        $confirmPassword.next().hide();
    } else {
        // else show hint
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();