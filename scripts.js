/**
 * Created by liukaichi on 1/1/2016.
 */
var selector = '.menu';
$(document).ready(function () {
    $(selector).on('click', function () {
        var tabID = $(this).attr('data-tab');

        $(selector).removeClass('active');
        $(this).addClass('active');

        $('.tab').removeClass('active');
        $("#" + tabID).addClass('active');


    });
});


$(document).ready(
    function () {
        $("#resumetoggle").click(function () {
            $("#resume").fadeToggle();
        });
    });

