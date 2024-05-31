$(document).ready(function() {
    var envelope = $("#envelope");
    var heartIcon = $(".heart"); // select the heart icon element
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    heartIcon.click(function() {
        window.open("https://ishwari0109.github.io/ishwari0901.github.io/", "_blank"); // open a new tab with the desired URL
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
});
