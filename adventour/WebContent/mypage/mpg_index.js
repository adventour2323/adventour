
// var sel_menu = 0;

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
    $("#mpg_nvbox").load("mpg_nvbox.html");
});





/*mypage.js*/

/*
$(document).ready(function() {
    // var menuBtn=document.querySelectorAll('menu');
    // var menuBtn = document.querySelectorAll('.menu')[0];

    // 반복문으로 .menu 아래 .memuli 아래 li들에 마우스오버 css 변경
    var menuBtn = document.getElementsByClassName('menu')[0];
    var menuLis = menuBtn.children[0].children;
    for(var i=0;i<menuLis.length;i++){
        var liBtn = menuLis[i];
        liBtn.addEventListener("mouseover",function(){
            // console.log('in');
            // menuBtn.color="red"
            this.style.color = 'white';
        });
        liBtn.addEventListener("mouseout",function(){
            // console.log('out');
            // menuBtn.color="black"
            this.style.color = 'black';
        });
    }

    // foreach로 반복
    // var menuBtn=document.querySelectorAll('.menu > .menuli > li');
    // menuBtn.forEach(item => {
    //     item.addEventListener('mouseover', function() {
    //         this.style.color = 'red';
    //     });
    //     item.addEventListener('mouseout', function() {
    //         this.style.color = 'black';
    //     });
    // });
});
*/