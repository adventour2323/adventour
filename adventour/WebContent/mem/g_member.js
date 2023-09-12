
window.onload = function () {
    var mship = document.querySelectorAll("input[required],select[required]");
    var idBtn = document.querySelector("form input:nth-child(4)");
    var mBtn = document.getElementsByName("msBtn")[0];
    var init = document.getElementById("init");
    
    idBtn.onclick = function () {
        alert("merong");
    }
    
    
    // mBtn.addEventListener('click', function(){
    
    // });
    
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
        
        rPw.onkeyup=function () {
            var pw = document.querySelector("input[title=비밀번호]");
            var rPw = document.querySelector("input[title=비밀번호확인]");
            var result = document.getElementById("result");
            if (pw.value == rPw.value) {
                result.innerHTML = "입력한 비밀번호가 동일합니다.";
            } else {
                result.innerHTML = "비밀번호를 다시 입력해주세요.";
            }
        }//내가 하고 싶은 것은 일단 비밀번호밸류랑 비밀번호확인 밸류를 가져와서. 두개를 비교하고 싶음. 
        // 비교헤서 밸류가 같으면 비밀번호확인 박스 아래에 비밀번호가 동일
        //동일하지 않으면 비밀번호 다시 확인해라.라고 뜨게 하고 싶다. 
        // rPw.keydown("input",pw_ck);
        
        
        if (no_blank) {
            alert('회원가입이 완료되었습니다.' + all_print);
        } else {
            alert('회원가입이 실패되었습니다.' + ms.title + '를 확인해주세요.');
        }
    }
    // rPw.addEventListener('keydown',function () {
    
        // });
        
//       생년월일 html문서에다 넣음 
        /*$(document).ready(
            function () {
                for (var i = 2021; i > 1920; i--) {
                    $('#year').append('<option value="' + i + '">' + i + '</option>');
                }
                for (var i = 1; i < 13; i++) {
                    $('#month').append('<option value="' + i + '">' + i + '</option>');
                }
                for (var i = 1; i < 32; i++) {
                    $('#day').append('<option value="' + i + '">' + i + '</option>');
                }
            }
        );*/



        init.onclick = function () {
            for (var ms of mship) {
                ms.value = generateRandomString(5);
            }
        }
        
        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;
        }
        
    }
