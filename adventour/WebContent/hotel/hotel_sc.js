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
  $('.moveb').on('mouseenter click', function() {
    $(this).css('color', 'white');
   
    $(this).css('background-color', 'rgb(20, 3, 78)');
  
  });

  $('.moveb').on('mouseleave', function() {
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

  /*top 메뉴 글씨 색 변환효과 */
var hcityli = ['.move_lon', '.move_liverp', '.moves_Edinb',
                '.move_roma','.move_vene','.move_mila',
                '.move_paris','.move_marc','.move_mona',
                '.move_mard','.move_barc','.move_sev',
              
              ];

hcityli.forEach(function(className) {
  $(className).on('mouseenter click', function() {
    $(this).css('color', 'white');
  }).on('mouseleave', function() {
    $(this).css('color', 'black');
  });
});


/*지역 선택 메뉴 슬라이드*/

$(".schtop").hide();

$('.moveh').on('mouseenter click', function() {
  $(".schtop").slideDown("fast");
});

$('.schtop').on('mouseleave', function() {
  $(".schtop").slideUp("fast");
});


 /* 하트누르면 색변환*/
  $(document).ready(function() {
    let isRed = false;
  
  $('.beheart').on('click', function() {
    if (isRed) {
      $(this).css('color', 'black');
      isRed = false;
    } else {
      $(this).css('color', 'red');
      isRed = true;
    }
     });
  });

});