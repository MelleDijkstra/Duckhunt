/**
 * Created by melle on 2-10-2015.
 */
var bird = {
    blueprint: '<img src="../images/duck.gif" alt="duck" />',
    create: function() {
        var element = $(this.blueprint);
        element.css('left','0px');
        element.css('top',getRandNum(20,400));
        $('main').append(element);
        log("Bird created");
    }
};