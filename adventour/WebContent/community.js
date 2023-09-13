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


 

 

});
