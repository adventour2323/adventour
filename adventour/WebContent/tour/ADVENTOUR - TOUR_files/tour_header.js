$(document).ready(function() {
  // ----------------메뉴 클릭시 색 변경    
  $('.menu1').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(117, 165, 236)');
  
  });

  $('.menu1').on('mouseleave', function() {
    $(this).css('color', 'rgb(2,48,2)');
    $(this).css('background-color', '');

  });
  $('.menu2').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(117, 165, 236)');
  
  });

  $('.menu2').on('mouseleave', function() {
    $(this).css('color', 'rgb(2,48,2)');
    $(this).css('background-color', '');

  });
  $('.menu4').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(117, 165, 236)');
  
  });

  $('.menu4').on('mouseleave', function() {
    $(this).css('color', 'rgb(2,48,2)');
    $(this).css('background-color', '');

  });
  $('.hbtitle').on('mouseenter click', function() {
    $(this).css('color', 'rgb(117, 165, 236)');
  });

  $('.hbtitle').on('mouseleave', function() {
    $(this).css('color', '');
  });
  $(document).ready(function() {
  let isRed = false;

  /* 하트누르면 색변환*/
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

//   탭
  // $(".guide_country_btn > li").click(function () {
  //   var idx = $(this).index();

  //   $(this).addClass("country_all").siblings().removeClass("country_all");

  //   $(".total_rank_list .uk_rank_list .fra_rank_list .italy_rank_list")
  //     .eq(idx)
  //     .addClass("country_all")
  //     .siblings(".tab_cont")
  //     .removeClass("country_all");
  // });

});
// 
// 가이드 탭
$(function() {
  $('ul.guide_region_tab li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('ul.guide_region_tab li').removeClass('on');
    $('.guide_list').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
  })
});


