$('#recruitForm').submit(function () {
    var name = $("#first_name").val() + ' ' + $("#last_name").val();
    var githubUrl = $("#github_url").val();
    var mobileNumber = $("#mobile_number").val();
    //sendMail(name, githubUrl, mobileNumber);
});

function sendMail(name, githubUrl, mobileNumber) {
    var data = {
        name: name,
        email: githubUrl,
        message: mobileNumber
    };

    $.ajax({
        type: "POST",
        url: "///",
        data: data,
        success: function () {
            $('.success').fadeIn(1000);
        }
    });
}