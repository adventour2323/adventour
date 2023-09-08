$(document).ready(function() {
    // ----------------메뉴 클릭시 색 변경    
    $('.menu1').on('mouseenter click', function() {
      $(this).css('color', 'white');
      $(this).css('background-color', 'rgb(20, 3, 78)');
    
    });
  
    $('.menu1').on('mouseleave', function() {
      $(this).css('color', 'rgb(2,48,2)');
      $(this).css('background-color', '');
  
    });
    $('.menu2').on('mouseenter click', function() {
      $(this).css('color', 'white');
      $(this).css('background-color', 'rgb(20, 3, 78)');
    
    });
  
    $('.menu2').on('mouseleave', function() {
      $(this).css('color', 'rgb(2,48,2)');
      $(this).css('background-color', '');
  
    });
    $('.menu4').on('mouseenter click', function() {
      $(this).css('color', 'white');
      $(this).css('background-color', 'rgb(20, 3, 78)');
    
    });
  
    $('.menu4').on('mouseleave', function() {
      $(this).css('color', 'rgb(20, 3, 78)');
      $(this).css('background-color', '');
  
    });

// uk
    $('.uk_name').hide(); // 실행시에는 글씨가 보이지 않음

    $('.uk_flag_img').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
      $('.uk_flag_img').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
      $('.uk_name').show(); //글씨가 보이고
    });
  
    $('.uk_flag_img').on('mouseleave', function() { //이미지위에 마우스가 없으면
      $('.uk_name').hide(); // 글씨는 안보이고
      $('.uk_flag_img').css('filter','brightness(1)'); // 밝기는 돌아온다
    });
  
    $('.uk_name').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
      $('.uk_flag_img').css('filter','brightness(0.5)'); // 이미지는 어둡고
      $('.uk_name').show(); // 글씨는 보이고
    });
    $('.uk_name').on('mouseleave', function() { //글씨에 마우스가 없으면
      $('.uk_name').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
    });

// 
// fr
$('.fr_name').hide(); // 실행시에는 글씨가 보이지 않음

$('.fr_flag_img').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
  $('.fr_flag_img').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
  $('.fr_name').show(); //글씨가 보이고
});

$('.fr_flag_img').on('mouseleave', function() { //이미지위에 마우스가 없으면
  $('.fr_name').hide(); // 글씨는 안보이고
  $('.fr_flag_img').css('filter','brightness(1)'); // 밝기는 돌아온다
});

$('.fr_name').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
  $('.fr_flag_img').css('filter','brightness(0.5)'); // 이미지는 어둡고
  $('.fr_name').show(); // 글씨는 보이고
});
$('.fr_name').on('mouseleave', function() { //글씨에 마우스가 없으면
  $('.fr_name').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
});
// 
// es
$('.es_name').hide(); // 실행시에는 글씨가 보이지 않음

$('.es_flag_img').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
  $('.es_flag_img').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
  $('.es_name').show(); //글씨가 보이고
});

$('.es_flag_img').on('mouseleave', function() { //이미지위에 마우스가 없으면
  $('.es_name').hide(); // 글씨는 안보이고
  $('.es_flag_img').css('filter','brightness(1)'); // 밝기는 돌아온다
});

$('.es_name').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
  $('.es_flag_img').css('filter','brightness(0.5)'); // 이미지는 어둡고
  $('.es_name').show(); // 글씨는 보이고
});
$('.es_name').on('mouseleave', function() { //글씨에 마우스가 없으면
  $('.es_name').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
});
// 
// ita
$('.ita_name').hide(); // 실행시에는 글씨가 보이지 않음

$('.ita_flag_img').on('mouseenter click', function() { //이미지 위에 마우스가 올라가면 
  $('.ita_flag_img').css('filter','brightness(0.5)'); //이미지의 색이 어두워지고
  $('.ita_name').show(); //글씨가 보이고
});

$('.ita_flag_img').on('mouseleave', function() { //이미지위에 마우스가 없으면
  $('.ita_name').hide(); // 글씨는 안보이고
  $('.ita_flag_img').css('filter','brightness(1)'); // 밝기는 돌아온다
});

$('.ita_name').on('mouseenter click', function() { //글씨 위에 마우스가 있으면
  $('.ita_flag_img').css('filter','brightness(0.5)'); // 이미지는 어둡고
  $('.ita_name').show(); // 글씨는 보이고
});
$('.ita_name').on('mouseleave', function() { //글씨에 마우스가 없으면
  $('.ita_name').show(); // 글씨가 보인다 그러나 위의 코드로 인해 마우스가 이미지를 벗어나면 안보임
});

// 
new Swiper('.swiper-container', {

	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 30, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,

	loop : true, // 무한 반복

	pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});
// 



});

