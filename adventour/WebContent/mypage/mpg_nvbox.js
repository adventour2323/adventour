/*mpg_nvbox.js*/ 

$(document).ready(function() {

    var likeNav = $('#likeNav');
    var myTextNav = $('#myTextNav');
    var paymentNav = $('#paymentNav');

    var likeUl = $('#likeUl');
    var myTextUl = $('#myTextUl');
    var paymentUl = $('#paymentUl');


    likeUl.on('mouseenter', function(){
        likeNav.addClass('enter');
    });
    myTextUl.on('mouseenter', function(){
        myTextNav.addClass('enter');
    });
    paymentUl.on('mouseenter', function(){
        paymentNav.addClass('enter');
    });
    
    likeUl.on('mouseleave', function(){
        likeNav.removeClass('enter');
    });
    myTextUl.on('mouseleave', function(){
        myTextNav.removeClass('enter');
    });
    paymentUl.on('mouseleave', function(){
        paymentNav.removeClass('enter');
    });

    $("#header").load("header.html");
    $("#footer").load("footer.html");
});