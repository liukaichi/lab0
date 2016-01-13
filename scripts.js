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

function sendWaiver(){
    var x = document.getElementById("waiverForm");
    var text = "Thank you, " + x.elements[0].value + " " + x.elements[1].value + "! May the odds be ever in your favor.";

    alert(text);
}

function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}