/**
 * Created by melle on 2-10-2015.
 */
var target = {
    blueprint: '<div class="target"></div>',
    create: function() {
        var element = $(this.blueprint);
        $('main').append(element);
        log("Bird created");
    },
    fly: function() {

    }
};