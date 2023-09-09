$(document).ready(function() {
  // ----------------메뉴 클릭시 색 변경    
  $('.movet').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(20, 3, 78)');
  
  });

  $('.movet').on('mouseleave', function() {
    $(this).css('color', 'rgb(2,48,2)');
    $(this).css('background-color', '');

  });
  $('.moveh').on('mouseenter click', function() {
    $(this).css('color', 'white');
   
    $(this).css('background-color', 'rgb(20, 3, 78)');
  
  });

  $('.moveh').on('mouseleave', function() {
    $(this).css('color', 'rgb(2,48,2)');
    $(this).css('background-color', '');

  });
  $('.moves').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(20, 3, 78)');
  
  });

  $('.moves').on('mouseleave', function() {
    $(this).css('color', 'rgb(20, 3, 78)');
    $(this).css('background-color', '');

  });
  //슬라이드다운 메뉴
  /*지역 선택 메뉴 슬라이드*/
  $(".schtop").hide();
 

$('.moveb').on('mouseenter click', function() {

  $(".schtop").slideDown("fast");
});

$('.schtop').on('mouseleave', function() {

  $(".schtop").slideUp("fast");
});


 

 //-------------------이미지 속 글자 숨긴 후 마우스 오버시 보여줌--------------
 //런던
  $('.londonname').hide(); // 실행시에는 글씨가 보이지 않음

  $('.bLonimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
    $('.bLonimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
    $('.londonname').show(); //글씨가 보이고
  });

  $('.bLonimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
    $('.londonname').hide(); // 글씨는 안보이고
    $('.bLonimg').css('filter','brightness(1)'); // 밝기는 돌아온다
  });

  $('.londonname').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
    $('.bLonimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
    $('.londonname').show(); // 글씨는 보이고
  });
  $('.londonname').on('mouseleave', function() { //글씨에 마우스가 없으면
    $('.londonname').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
  });
//리버풀
  $('.livername').hide(); // 실행시에는 글씨가 보이지 않음

  $('.bLiverimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
    $('.bLiverimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
    $('.livername').show(); //글씨가 보이고
  });

  $('.bLiverimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
    $('.livername').hide(); // 글씨는 안보이고
    $('.bLiverimg').css('filter','brightness(1)'); // 밝기는 돌아온다
  });

  $('.livername').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
    $('.bLiverimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
    $('.livername').show(); // 글씨는 보이고
  });
  $('.livername').on('mouseleave', function() { //글씨에 마우스가 없으면
    $('.livername').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
  });
//로마
  $('.romaname').hide(); // 실행시에는 글씨가 보이지 않음

  $('.bRomaimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
    $('.bRomaimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
    $('.romaname').show(); //글씨가 보이고
  });

  $('.bRomaimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
    $('.romaname').hide(); // 글씨는 안보이고
    $('.bRomaimg').css('filter','brightness(1)'); // 밝기는 돌아온다
  });

  $('.romaname').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
    $('.bRomaimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
    $('.romaname').show(); // 글씨는 보이고
  });
  $('.romaname').on('mouseleave', function() { //글씨에 마우스가 없으면
    $('.romaname').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
  });
//베네치아
$('.venename').hide(); // 실행시에는 글씨가 보이지 않음

  $('.bVeneimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
    $('.bVeneimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
    $('.venename').show(); //글씨가 보이고
  });

  $('.bVeneimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
    $('.venename').hide(); // 글씨는 안보이고
    $('.bVeneimg').css('filter','brightness(1)'); // 밝기는 돌아온다
  });

  $('.venename').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
    $('.bVeneimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
    $('.venename').show(); // 글씨는 보이고
  });
  $('.venename').on('mouseleave', function() { //글씨에 마우스가 없으면
    $('.venename').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
  });
//파리
$('.parisname').hide(); // 실행시에는 글씨가 보이지 않음

$('.bParisimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
  $('.bParisimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
  $('.parisname').show(); //글씨가 보이고
});

$('.bParisimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
  $('.parisname').hide(); // 글씨는 안보이고
  $('.bParisimg').css('filter','brightness(1)'); // 밝기는 돌아온다
});

$('.parisname').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
  $('.bParisimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
  $('.parisname').show(); // 글씨는 보이고
});
$('.parisname').on('mouseleave', function() { //글씨에 마우스가 없으면
  $('.parisname').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
});

//파리
$('.monaname').hide(); // 실행시에는 글씨가 보이지 않음

$('.bMonaimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
  $('.bMonaimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
  $('.monaname').show(); //글씨가 보이고
});

$('.bMonaimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
  $('.monaname').hide(); // 글씨는 안보이고
  $('.bMonaimg').css('filter','brightness(1)'); // 밝기는 돌아온다
});

$('.monaname').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
  $('.bMonaimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
  $('.monaname').show(); // 글씨는 보이고
});
$('.monaname').on('mouseleave', function() { //글씨에 마우스가 없으면
  $('.monaname').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
});


//마드리드
$('.mariname').hide(); // 실행시에는 글씨가 보이지 않음

  $('.bMardimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
    $('.bMardimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
    $('.mariname').show(); //글씨가 보이고
  });

  $('.bMardimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
    $('.mariname').hide(); // 글씨는 안보이고
    $('.bMardimg').css('filter','brightness(1)'); // 밝기는 돌아온다
  });

  $('.mariname').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
    $('.bMardimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
    $('.mariname').show(); // 글씨는 보이고
  });
  $('.mariname').on('mouseleave', function() { //글씨에 마우스가 없으면
    $('.mariname').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
  });
  
  //바르셀로나

$('.barcename').hide(); // 실행시에는 글씨가 보이지 않음

$('.bBarceimg').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
  $('.bBarceimg').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
  $('.barcename').show(); //글씨가 보이고
});

$('.bBarceimg').on('mouseleave', function() { //이미지위에 마우스가 없으면
  $('.barcename').hide(); // 글씨는 안보이고
  $('.bBarceimg').css('filter','brightness(1)'); // 밝기는 돌아온다
});

$('.barcename').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
  $('.bBarceimg').css('filter','brightness(0.5)'); // 이미지는 어둡고
  $('.barcename').show(); // 글씨는 보이고
});
$('.barcename').on('mouseleave', function() { //글씨에 마우스가 없으면
  $('.barcename').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
});

 //----------------------------------------top10 슬라이드--------------
 new Swiper('.awards .swiper', {
  // direction: 'horizontal',

  loop: true,
  spaceBetween: 15,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});
////// 세일노선 에니메이션
// 움직임을 주고자 하는 이미지들의 클래스 이름을 배열로 저장
var imageClasses = [".top1", ".top2", ".top3", ".top4", ".top5", ".top6", ".top7", ".top8", ".top9", ".top10"];

imageClasses.forEach(function(className) { //마우스오버
  $(className).hover(function(){
    $(this).css("transform", "translate(-30px, -30px)");
    $(this).css("transition", "transform 0.2s ease-in-out");
  }, function(){
    $(this).css("transform", "none");
    $(this).css("transition", "transform 0.2s ease-in-out");
  });
});




});
