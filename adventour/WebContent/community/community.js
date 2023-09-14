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
  $('.moveb').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(20, 3, 78)');
  
  });

  $('.moveb').on('mouseleave', function() {
    $(this).css('color', 'rgb(20, 3, 78)');
    $(this).css('background-color', '');

  })
  $('.movem').on('mouseenter click', function() {
    $(this).css('color', 'white');
    $(this).css('background-color', 'rgb(20, 3, 78)');
  
  });

  $('.movem').on('mouseleave', function() {
    $(this).css('color', 'rgb(20, 3, 78)');
    $(this).css('background-color', '');

  })

  //슬라이드다운 메뉴
  /*지역 선택 메뉴 슬라이드*/
  $(".schtop").hide();
 

$('.moveb').on('mouseenter click', function() {

  $(".schtop").slideDown("fast");
});

$('.schtop').on('mouseleave', function() {

  $(".schtop").slideUp("fast");
});

//셀렉박스 나라별 옵션 설정
$('.c_country').on('change', function() {
  var country = $(this).val();
  var citySelect = $('.c_city');
  
  // 모든 옵션을 보이게 설정
  citySelect.find('option').show();
  
  // 선택 가능한 도시 옵션만 보이도록 설정
  if (country === 'uk') {
    citySelect.find('option').not('[value="lond"], [value="liv"], [value="eden"]').hide();
  } else if (country === 'ity') {
    citySelect.find('option').not('[value="roma"], [value="vene"], [value="mila"]').hide();
  } else if (country === 'fra') {
    citySelect.find('option').not('[value="paris"], [value="mars"], [value="mona"]').hide();
  } else if (country === 'spa') {
    citySelect.find('option').not('[value="mard"], [value="barc"], [value="sev"]').hide();
  }
});

function clock() {
  var Target = document.getElementById("clock");
  var time = new Date();

  var year = time.getYear();
  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];

  var hours = time.getHours();
  var minutes = time.getMinutes();
 

  Target.innerText = 
  `${year+1900}년${month + 1}월 ${date}일 ${week[day]}요일 ` +
  `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
      
}
clock();
setInterval(clock, 60000); // 1초마다 실행
 

 

});
