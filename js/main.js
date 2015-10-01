function log(message) {
    var logger = $("#log");
    logger.append("<li>"+message+"</li>");
}

$(document).ready(function() {
    if(window.jQuery) {
        log("jQuery loaded");
        log("Something else");
        log("created something");
    }
});