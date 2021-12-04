function changeMode() {

    const body = document.body;
    body.classList.toggle("changeBodyBG");

    const text = document.querySelectorAll("p,h1,h3,caption,footer");
    for (let i = 0; i < text.length; i++) {
        text[i].classList.toggle("setColorWhite");
    }

    const links = document.querySelectorAll("summary, a");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("set_aColor");
    }

    let venice = document.getElementById("veniceTxt");
    let rome = document.getElementById("romeTxt");
    venice.classList.toggle("setColorBlack");
    rome.classList.toggle("setColorBlack");
    const strong = document.querySelectorAll("strong");
    for (let i = 2; i < strong.length; i++) {
        strong[i].classList.toggle("setColorBlack");
    }
}

$(document).ready(function (){

    $("#hideShow").click(function (){
        $("header nav").slideToggle(2000);
    });

    $("#italyFlag").animate({
            opacity: '1',
            width: '140px'
    });

    $("#cities img").fadeIn();


    $("#submitComment").click(function(){
        var inputComment = $("#comment_id").val();
        if(inputComment != ""){
            var br =  document.createElement('br');
            $(".inputComments").append(inputComment + " ").append(br);
            $("#comment_id").val("");
        }
    });

});
