var logger = $("#log");
var developer = false;

////// basic functions //////
function getRandNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enableDev() {
    if(!developer) {
        developer = true;
        log("Developer mode is on");
    }
}

function checkLogCount() {
    if(developer) {
        if ($("#log").find("li").length > 0) {
            logger.show();
        } else {
            logger.hide();
        }
    }
}

function log(message) {
    if(developer) {
        if(message != '') {
            logger.append("<li>"+message+"</li>");
        }
        checkLogCount();
        Scroll();
    }
}

function Scroll()
{
    var objControl=document.getElementById("log");
    objControl.scrollTop = objControl.scrollHeight;
}

function jQueryCheck() {
    if(window.jQuery) {
        console.log("jQuery loaded");
    } else {
        console.log("jQuery not loaded");
    }
}

function disableRightClick() {
    $("main").bind("contextmenu", function(e) {
        e.preventDefault();
    });
}

///////////////////////////

function loadLevel(level) {
    switch(level) {
        case 'level1':

    }
}

$(document).ready(function() {
    // run init functions when page is loaded
    jQueryCheck();
    disableRightClick();

    loadLevel('leve1');

    // check if user clicked duck
    $("main").click(function(e) {
        log("Shot fired");
        var target = $(e.target);

        // if target is hit
        if(target.is(".target")) {
            log("Target hit!");
        }
    });
});