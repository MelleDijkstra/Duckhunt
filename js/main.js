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

var Bird = function () {
    this.something = 5;
};

///////////////////////////

function loadLevel(level) {
    // load the given level
    switch(level) {
        case '1':
            // loop to create multiple birds
            for(var i = 0;i < 4;i++) {
                var bird = new Bird();
            }
    }
}

$(document).ready(function() {
    // run init functions when page is loaded
    jQueryCheck();
    disableRightClick();

    loadLevel('1');

    // check if user clicked duck
    $("main").click(function(e) {
        var elem = $(e.target);
        var target = $(e.target).attr("class");

        switch(target) {
            case 'targetnormal':
                elem.removeClass("targetnormal");
                elem.addClass("targetdead");
                break;
            default:
                log("Shot fired");
        }
    });
});