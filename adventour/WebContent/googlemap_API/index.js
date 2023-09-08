window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.50555588212741, lng: -0.07538467372184898 }, //위도 경도 추가
      zoom: 10, // 지도 줌 값 추가
    });
// 마크 설정
   new  google.maps.Marker({
        position: { lat:  51.5039718560818,  lng: -0.07538848228570016}, //매우 확대 후 좌표 얻기 
        label:"런던 스타벅스",
        map: map
    })
  };

