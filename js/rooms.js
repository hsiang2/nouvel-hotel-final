$(document).ready(function () {

    let $room = $(".room-item"),
        $prev = $("#room-prev"),
        $next = $("#room-next"),
        indicator = ["#indicator1","#indicator2", "#indicator3"];

    let i = 0;
    $next.on("click", function(){
        $(indicator[i*(-1)]).css("background-color", "rgb(25, 35, 42)");
        i--;
        if(i<-2){i = 0;}
        $room.css("transform", `translate(${i * 100}%)`);
        $(indicator[i*(-1)]).css("background-color", "rgb(255, 250, 241)");
    });

    $prev.on("click", function(){
        $(indicator[i*(-1)]).css("background-color", "rgb(25, 35, 42)");
        i++;
        if(i>0){i = -2;}
        $room.css("transform", `translate(${i * 100}%)`);
        $(indicator[i*(-1)]).css("background-color", "rgb(255, 250, 241)");
    });

    $(function(){
        new WOW().init();
    });

});