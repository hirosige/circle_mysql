(function ($) {
    $(function () {
        $('.parallax').parallax();
    }); // end of document ready
})(jQuery); // end of jQuery name space

$(window).load(function () {
    var currentYear = new Date().getFullYear();
    $("#copyright").html('© 2014 - ' + currentYear + ' ARMS (Thailand) Co., Ltd. All Rights Reserved.');
});