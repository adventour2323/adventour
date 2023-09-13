window.onload = function () {
	var mship = document.querySelectorAll("input[required],select[required]");
//	var idBtn = document.getElementsByName("m_id_btn")[0];
	var mBtn = document.getElementsByName("msBtn")[0];
//	var init = document.getElementById("init");

	
//	id입력 input에 onKeyup으로 중복체크 이벤트 걸기
	var idTB = document.getElementsByName("m_id")[0];
	idTB.onkeyup = idCheckF;
//	idTB.addEventLis,,,
	
	
	mBtn.onclick = function () {
		
		// validation 체크
		var no_blank = true;
		
		for (var ms of mship) {
			if (ms.value != "") {
				console.log('ms값 : ', ms.value);
			} else if (ms.value == "") {
				no_blank = false;
				console.log('vali false : ', ms);
				break;
			}
		}
		// validation 체크
		
		
		// 입력값 전체 출력
		var all_print = '';
		
		var all_input_select_etc = document.querySelectorAll("form[name=myForm] input,form[name=myForm] select");
		for (var obj of all_input_select_etc) {
			if (obj.type == 'button' || (obj.type == 'radio' && obj.checked == false) || (obj.type == 'date' && obj.value == '')) {
				continue;
			}
			
			all_print += '\n' + obj.title + ' : ' + obj.value;
			
		}
		// 입력값 전체 출력
		var pw = document.querySelectorAll("input[type=password]")[0];
		var rPw = document.querySelectorAll("input[type=password]")[1];

		if( pw.value !== rPw.value){
			alert('비밀번호를 동일하게 입력해주세요.');
			return;
		}
		
		if (no_blank) {
			alert('회원가입이 완료되었습니다.' + all_print);
		}else {
			alert('회원가입이 실패되었습니다.' + ms.title + '을(를) 확인해주세요.');
		}
	}
		/*		var myForm = $('form[name=myForm]');
				$.ajax({
				    url: '/adventour/mem/member_pjs.jsp',
				    type: 'GET',//POST
				    type: 'POST',
				    dataType: 'json',
				    dataType: 'text',
				    data: $('form[name=myForm]').serialize(),
				    success: function(data) {
				        console.log(data);
				        if(data.indexOf('sucess')){
				        	alert();
				        }
				        
				    },
				    error: function(error) {
				        console.error('Request error:', error);
				    }
				});*/
		
	
	

	
//	생년월일 콤보박스 값 세팅
	for (var i = 2021; i > 1920; i--) {
		$('#year').append('<option value="' + i + '">' + i + '</option>');
	}
	for (var i = 1; i < 13; i++) {
		$('#month').append('<option value="' + i + '">' + i + '</option>');
	}
	for (var i = 1; i < 32; i++) {
		$('#day').append('<option value="' + i + '">' + i + '</option>');
	}
		

	
//	모두 동의합니다 체크박스 클릭 이벤트
	$('input#all_cked').click(function(){
		var checkAll = document.getElementById('all_cked').checked;
		var cks = document.querySelectorAll('.ck_box input[type=checkbox]');
		for(var i=0; i<cks.length; i++){
			if(checkAll == true){
				cks[i].checked = true;
			}else{
				cks[i].checked = false;
			}
		}
		
	});

	
//	no_korean 클래스인 input 이벤트로 한글만 입력 안 되도록
	const no_korean = document.querySelectorAll('.no_korean');
	
	for (var i = 0; i < no_korean.length; i++) {
		no_korean[i].addEventListener('input', function(e) {
			// 입력된 값에서 한글만 제거하기
			e.target.value = e.target.value.replace(/[가-힣ㄱ-ㅎㅏ-ㅣ]/g, '');
		});
	}
	
//	pnum_check 클래스인 input이벤트로 숫자만 입력되도록
	const numberInputs = document.querySelectorAll('.pnum_check');

	for (var i = 0; i < numberInputs.length; i++) {
	    numberInputs[i].addEventListener('input', function(e) {
	        // 입력된 값에서 숫자만 가져오기
	        e.target.value = e.target.value.replace(/[^0-9]/g, '');
	    });
	}
	
	
	//비밀번호 확인 온 키업 이벤트. 비밀번호 동일하게 입력됐는지 확인.
	var pw_cked = document.querySelectorAll("input[type=password]")[1];
	
	pw_cked.onkeyup=function () {
		var pw = document.querySelectorAll("input[type=password]")[0];
		var rPw = document.querySelectorAll("input[type=password]")[1];
		var result = document.getElementById("result");
		if (pw.value == rPw.value) {
			result.style.color ="green";
			result.innerHTML = "입력한 비밀번호가 동일합니다.";
		} else {
			result.style.color ="tomato";
			result.innerHTML = "비밀번호를 다시 입력해주세요.";
		}
	}//내가 하고 싶은 것은 일단 비밀번호밸류랑 비밀번호확인 밸류를 가져와서. 두개를 비교하고 싶음. 
	// 비교해서 밸류가 같으면 비밀번호확인 박스 아래에 비밀번호가 동일
	//동일하지 않으면 비밀번호 다시 확인해라.라고 뜨게 하고 싶다. 
	// rPw.keydown("input",pw_ck);
	
	
	
}

//아이디 중복 검사 ajax
let idCheck = false;
function idCheckF() {
    let m_id = $('#m_id').val();
    $.ajax({
        url: 'mem/member_id_check_pjs.jsp',
        type: 'post',
        data: {"m_id": m_id},
        aSync: false, // ajax 통신이 끝나야 다음줄 if(idCheck){ 가 실행되도록
        success: function (cnt) {
            if (cnt != 1) {
                $('.id_check').html('사용 가능한 아이디입니다.').css('color','green');
                idCheck = true;
            } else {
                $('.id_check').html('이미 사용하고 있는 아이디입니다.').css('color','tomato');
                idCheck = false;
            }
        },
	    error: function(error) {
	        console.error('Request error:', error);
	    }
    });
    if(idCheck){
    	return true;
    }else{
    	return false;
    }
}

function validation(){
	
//	idCheckF();
	var valiRequireds = true;
//	var myForm = document.myForm;
	$(document.myForm).find('input').each(function(){
	    if(this.required){
	        if(this.value == ''){
	        	valiRequireds = false;
	        	alert(this.title + '값은 필수입니다.');
	        	return false;
	        }
	    }
	});
	
	if(valiRequireds){
		document.myForm.submit();
		return true;
	}else {
//		빈칸이 있어요
		
		return false;
	}
	
	
}

	//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
	function sample4_execDaumPostcode() {
		new daum.Postcode({
			oncomplete: function(data) {
				// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
	
				// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
				// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
				var roadAddr = data.roadAddress; // 도로명 주소 변수
				var extraRoadAddr = ''; // 참고 항목 변수
	
				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
					extraRoadAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if(data.buildingName !== '' && data.apartment === 'Y'){
				extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if(extraRoadAddr !== ''){
					extraRoadAddr = ' (' + extraRoadAddr + ')';
				}
	
				// 우편번호와 주소 정보를 해당 필드에 넣는다.
				document.getElementById("sample4_postcode").value = data.zonecode;
				document.getElementById("sample4_roadAddress").value = roadAddr;
				document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
				
				// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
				if(roadAddr !== ''){
					document.getElementById("sample4_extraAddress").value = extraRoadAddr;
				} else {
					document.getElementById("sample4_extraAddress").value = '';
				}
	
				var guideTextBox = document.getElementById("guide");
				// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
				if(data.autoRoadAddress) {
					var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
					guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
					guideTextBox.style.display = 'block';
	
				} else if(data.autoJibunAddress) {
					var expJibunAddr = data.autoJibunAddress;
					guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
					guideTextBox.style.display = 'block';
				} else {
					guideTextBox.innerHTML = '';
					guideTextBox.style.display = 'none';
				}
			}
		}).open();
	}
	
