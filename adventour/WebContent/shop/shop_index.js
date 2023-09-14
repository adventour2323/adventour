/*shop.js */

$(document).ready(function () {

    // 나라, 도시, 카테고리 등등 정보. 나중에 파일 또는 디비에서 가져올 예정
    // 순서 보장을 위해 object.array가 아니라 object.object 사용
    // 길이를 알기 위해서 Object.keys(obj).length 사용
    var contryDatas = {
        "country": {
            "0": { "engNm": "United Kingdom", "korNm": "영국" },
            "1": { "engNm": "Italy", "korNm": "이탈리아" },
            "2": { "engNm": "France", "korNm": "프랑스" },
            "3": { "engNm": "Spain", "korNm": "스페인" }
        },
        "citys": {
            "0": { "engNm": "London", "korNm": "런던", "contry": "United Kingdom" },
            "1": { "engNm": "Liverpool", "korNm": "리버풀", "contry": "United Kingdom" },
            "2": { "engNm": "Edinburgh", "korNm": "에덴버러", "contry": "United Kingdom" },
            "3": { "engNm": "Rome", "korNm": "로마", "contry": "Italy" },
            "4": { "engNm": "Venice", "korNm": "베니스", "contry": "Italy" },
            "5": { "engNm": "Milano", "korNm": "밀라노", "contry": "Italy" },
            "6": { "engNm": "Paris", "korNm": "파리", "contry": "France" },
            "7": { "engNm": "Marseille", "korNm": "마르세유", "contry": "France" },
            "8": { "engNm": "Monaco", "korNm": "모나코", "contry": "France" },
            "9": { "engNm": "Madrid", "korNm": "마드리드", "contry": "Spain" },
            "10": { "engNm": "Barcelona", "korNm": "바르셀로나", "contry": "Spain" },
            "11": { "engNm": "Seville", "korNm": "세비야", "contry": "Spain" }
        },
        "stuff": {
            "0": { "engNm": "Books", "korNm": "도서", "city":"all"},
            "1": { "engNm": "Mobile", "korNm": "모바일", "city":"all"},
            "2": { "engNm": "Genral", "korNm": "잡화", "city":"all"},
            "3": { "engNm": "Tiket", "korNm": "티켓", "city":"all"},
            "4": { "engNm": "Books", "korNm": "도서", "city":"London"},
            "5": { "engNm": "Mobile", "korNm": "모바일", "city":"London"},
            "6": { "engNm": "Genral", "korNm": "잡화", "city":"London"},
            "7": { "engNm": "Tiket", "korNm": "티켓", "city":"London"},
            "8": { "engNm": "Genral", "korNm": "잡화", "city":"Liverpool"},
            "9": { "engNm": "Tiket", "korNm": "티켓", "city":"Liverpool"},
            "10": { "engNm": "Books", "korNm": "도서", "city":"Edinburgh"},
            "11": { "engNm": "Tiket", "korNm": "티켓", "city":"Edinburgh"},
            "12": { "engNm": "Books", "korNm": "도서", "city":"Rome"},
            "13": { "engNm": "Genral", "korNm": "잡화", "city":"Rome"},
            "14": { "engNm": "Tiket", "korNm": "티켓", "city":"Venice"},
            "15": { "engNm": "Books", "korNm": "도서", "city":"Milano"},
            "16": { "engNm": "Books", "korNm": "도서", "city":"Paris"},
            "17": { "engNm": "Genral", "korNm": "잡화", "city":"Paris"},
            "18": { "engNm": "Books", "korNm": "도서", "city":"Marseille"},
            "19": { "engNm": "Mobile", "korNm": "모바일", "city":"Marseille"},
            "20": { "engNm": "Genral", "korNm": "잡화", "city":"Marseille"},
            "21": { "engNm": "Tiket", "korNm": "티켓", "city":"Marseille"},
            "22": { "engNm": "Genral", "korNm": "잡화", "city":"Monaco"},
            "23": { "engNm": "Tiket", "korNm": "티켓", "city":"Monaco"},
            "24": { "engNm": "Books", "korNm": "도서", "city":"Madrid"},
            "25": { "engNm": "Tiket", "korNm": "티켓", "city":"Madrid"},
            "26": { "engNm": "Books", "korNm": "도서", "city":"Barcelona"},
            "27": { "engNm": "Genral", "korNm": "잡화", "city":"Barcelona"},
            "28": { "engNm": "Tiket", "korNm": "티켓", "city":"Barcelona"},
            "29": { "engNm": "Books", "korNm": "도서", "city":"Seville"},
            "30": { "engNm": "Mobile", "korNm": "모바일", "city":"Seville"},
            "31": { "engNm": "Genral", "korNm": "잡화", "city":"Seville"},
        },

        "stffC": {
            "0": { "engNm": "", "korNm": "", "stuff": "" }
        }
    };



    // 첫번째 셀렉트박스 목록 로드
    var loadCombo1 = function (type) {
        var fstSel = $('#fstSel');
        // var secSel = $('#secSel');
        // var thrdSel = $('#thrdSel');
        fstSel.empty();
        fstSel.append($('<option>', {
            value: 'all',
            text: '--전체--'
        }));
        for (var i = 0; i < getLen(contryDatas.country); i++) {
            var row = contryDatas.country[i];
            fstSel.append($('<option>', {
                value: row.engNm,
                text: row.korNm
            }));
        }
    };

    // 첫번째 셀렉트박스 선택
    // 선택한 나라에 따라 두번째 셀렉트박스 목록 다르게 표시(도시)
    // 선택한 나라에 따라 헤더 변경
    var setCombo1 = function (type) {
        var secSel = $('#secSel');
        // var thrdSel = $('#thrdSel');

        secSel.empty();
        secSel.append($('<option>', {
            value: 'all',
            text: '--전체--'
        }));
        if (type == 'all') {
            for (var i = 0; i < getLen(contryDatas.citys); i++) {
                var row = contryDatas.citys[i];
                secSel.append($('<option>', {
                    value: row.engNm,
                    text: row.korNm
                }));
            }
        } else {
            for (var i = 0; i < getLen(contryDatas.citys); i++) {
                var row = contryDatas.citys[i];
                if (row.contry == type) {
                    secSel.append($('<option>', {
                        value: row.engNm,
                        text: row.korNm
                    }));
                }
            }
        }
        setCombo2();
        setHeaderImg(type);
    };

    // 두번째 셀렉트박스 선택
    // 선택한 도시에 맞는 카테고리가 세번째 셀렉트박스에 표시
    var setCombo2 = function (type) {
        // 첫번째 셀렉트에서 국가 선택 -> 두번째 셀렉트는 국가목록. ->세번째 셀렉트에 두번째에서 선택한 국가에 맞는 도시목록 표시
        // 첫번째 셀렉트에서 상품 선택 -> 두번째 셀렉트는 카테고리 목록 -> ?
        // var fstSel = $('#fstSel');
        var secSel = $('#secSel');
        var thrdSel = $('#thrdSel');

        //fstSel.val='country_eng면 세번째 셀렉 박스를 비우고 옵션에 전체를 표시한다.'
        if (secSel.val() == 'all') {
            thrdSel.empty();
            thrdSel.append($('<option>', {
                value: 'all',
                text: '--전체--'
            }));
            for (var i = 0; i < getLen(contryDatas.stuff); i++) {
                var row = contryDatas.stuff[i];
                if (row.city == 'all') {
                    thrdSel.append($('<option>', {
                        value: row.engNm,
                        text: row.korNm
                    }));
                }
            }
        } else {
            thrdSel.empty();
            thrdSel.append($('<option>', {
                value: 'all',
                text: '--전체--'
            }));
            for (var i = 0; i < getLen(contryDatas.stuff); i++) {
                var row = contryDatas.stuff[i];
                if (row.city == secSel.val()) {
                    thrdSel.append($('<option>', {
                        value: row.engNm,
                        text: row.korNm
                    }));
                }
            }
        }
    };

    var mainImg = document.getElementById('mainImg');
    var setHeaderImg = function(type){
        // "0": { "engNm": "United Kingdom", "korNm": "영국" },
        // "1": { "engNm": "Italy", "korNm": "이탈리아" },
        // "2": { "engNm": "France", "korNm": "프랑스" },
        // "3": { "engNm": "Spain", "korNm": "스페인" }
        if(type == 'United Kingdom'){
            mainImg.src = 'shop/shop_img/uk_shop_main.jpg';
        } else if(type == 'Italy'){
            mainImg.src = 'shop/shop_img/italy_shop_main.jpg';
        } else if(type == 'France'){
            mainImg.src = 'shop/shop_img/france_shop_main.jpg';
        } else if(type == 'Spain'){
            mainImg.src = 'shop/shop_img/spain_shop_main.jpg';
        } else {
            mainImg.src = 'shop/shop_img/main_beach.jpg';
        }
    }

    // $(cTapB1);
    // cTapB1Jq[0];
    // var cTapB1 = document.querySelectorAll('.bstGdsTab div:first-child')[0];
    var cTapB = $('div.cgTBox');
    var cTapB1 = cTapB.children('span.cgTboxS').eq(0);
    var cTapB2 = cTapB.children('span.cgTboxS').eq(1);
    var cTapB3 = cTapB.children('span.cgTboxS').eq(2);
    var cTapB4 = cTapB.children('span.cgTboxS').eq(3);
    // var gTapB1 = document.querySelectorAll('.bstGdsTab_1')[0];
    var gTapB1 = $('.gdsTBxPc').eq(0);
    var gTapB2 = $('.gdsTBxPc').eq(1);
    var gTapB3 = $('.gdsTBxPc').eq(2);
    var gTapB4 = $('.gdsTBxPc').eq(3);

    // 탭 디폴트.
    // cTapB1.css("background-color","#84BF96").css("color","white");
    cTapB1.addClass('gdsTBxPc_on');
    cTapB2.removeClass('gdsTBxPc_on');
    cTapB3.removeClass('gdsTBxPc_on');
    cTapB4.removeClass('gdsTBxPc_on');
    gTapB2.hide();
    gTapB3.hide();
    gTapB4.hide();

    // css를 바로 주는게 잘 안 먹혀서
    // class에 css를 지정해두고
    // addClass, removeClass로 클래스를 on, off하는식으로 css 적용하도록 변경
    cTapB1.click(function () {
        cTapB1.addClass('gdsTBxPc_on');
        cTapB2.removeClass('gdsTBxPc_on');
        cTapB3.removeClass('gdsTBxPc_on');
        cTapB4.removeClass('gdsTBxPc_on');
        gTapB1.show();
        gTapB2.hide();
        gTapB3.hide();
        gTapB4.hide();
    });

    cTapB2.click(function () {
        cTapB1.removeClass('gdsTBxPc_on');
        cTapB2.addClass('gdsTBxPc_on');
        cTapB3.removeClass('gdsTBxPc_on');
        cTapB4.removeClass('gdsTBxPc_on');
        gTapB2.show();
        gTapB1.hide();
        gTapB3.hide();
        gTapB4.hide();
    });

    cTapB3.click(function () {
        cTapB1.removeClass('gdsTBxPc_on');
        cTapB2.removeClass('gdsTBxPc_on');
        cTapB3.addClass('gdsTBxPc_on');
        cTapB4.removeClass('gdsTBxPc_on');
        gTapB3.show();
        gTapB1.hide();
        gTapB2.hide();
        gTapB4.hide();
    });

    cTapB4.click(function () {
        cTapB1.removeClass('gdsTBxPc_on');
        cTapB2.removeClass('gdsTBxPc_on');
        cTapB3.removeClass('gdsTBxPc_on');
        cTapB4.addClass('gdsTBxPc_on');
        gTapB4.show();
        gTapB1.hide();
        gTapB2.hide();
        gTapB3.hide();
    });


    // 선택하지 않아도 첫번째 셀렉트박스에 국가목록 표시
    loadCombo1();
    setCombo1('all')
    // 첫번째 셀렉트박스 선택
    var fstSel = $('#fstSel');
    fstSel.change(function () {
        setCombo1(this.value);
    });

    // 두번째 셀렉트박스 선택
    var secSel = $('#secSel');
    secSel.change(function () {
        setCombo2(this.value);
    });



    // 가이드 투어 연계 상품 이미지 슬라이드

    let currentIndex = 0;

    document.querySelector('.left-arrow').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex -= 1; // 왼쪽으로 슬라이드
            slideImages();
        }
    });
    
    document.querySelector('.right-arrow').addEventListener('click', function() {
        if (currentIndex < 2) { // 총 3개의 페이지(0, 1, 2)가 있으므로 2보다 작을 때만 오른쪽으로 슬라이드
            currentIndex += 1;
            slideImages();
        }
    });
    
    // 가이드 투어 연계 상품 이미지 슬라이드
    function slideImages() {
        const movePercentage = -(currentIndex * 33.33); 
        currentIndex = (currentIndex + 1) % 3; // 0, 1, 2 순환
        document.getElementById('guidSlide').style.transform = `translateX(${movePercentage}%)`;

        // const container = document.getElementById('guidSlide');
        // const movePercentage = -(currentIndex * 33.33); // 33.33%는 5개의 상품에 해당하는 너비
        // container.style.transform = `translateX(${movePercentage}%)`;
    }
    setInterval(slideImages, 3000);

    //헤더 푸터 로드
    $("#header").load("header.html");
    $("#footer").load("footer.html");

});



// Object의 길이 구하기
var getLen = function (obj) {
    return Object.keys(obj).length;
};

// cTapB1.addEventListener("click", function(){
//     console.log("멍청이");
//     gTapB1.show();
//     gTapB2.hide();
//     gTapB3.hide();
//     gTapB4.hide();
// });
// cTapB1Jq.on('click', function(){
// });
// var menuBtn=document.querySelectorAll('menu');
// var menuBtn = document.querySelectorAll('.menu')[0];

// 반복문으로 .menu 아래 .memuli 아래 li들에 마우스오버 css 변경
// var menuBtn = document.getElementsByClassName('menu')[0];
// var menuLis = menuBtn.children[0].children;
// for(var i=0;i<menuLis.length;i++){
//     var liBtn = menuLis[i];
//     liBtn.addEventListener("mouseover",function(){
//         // console.log('in');
//         // menuBtn.color="red"
//         this.style.color = 'white';
//     });
//     liBtn.addEventListener("mouseout",function(){
//         // console.log('out');
//         // menuBtn.color="black"
//         this.style.color = 'black';
//     });
// }