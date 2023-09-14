<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login</title>
</head>
<body>
    
        <div class="header">

          <div class="header1">

              
            <div class="logo">
             <img class="logo1" src=" " alt="Logo">
          </div><!--logo-->

              <div class="home">
                <ul class="homeli">
                <li class="home1"><img class="himg" src=" " alt="(홈 아이콘)"></li>
                <li class="home1">홈</li>
                <li class="home1">로그인</li>
                <li class="home1">회원가입</li>
                <li class="home1">장바구니</li>
                <li class="home1">=</li>
                </ul>
            </div><!--home-->

          </div><!--header1-->
          
          <div class="head11">

            <div class="menu">
                <ul class="menuli">
                <li class="menu1">투어</li>
                <li class="menu1">버스</li>
                <li class="menu1">호텔</li>
                <li class="menu1">쇼핑</li>
                </ul>
            </div><!--menu-->

          </div><!--header11-->

        </div><!--header-->

        
	<%
	request.setCharacterEncoding("utf-8");
	%>
	<div class="login_form" style="text-align: center;">
			<h3>로그인</h3>
		<form action="login_merge.jsp" method="post">
			아이디 : <input type="text" name="id" style="margin-bottom: 10px"><br>
			비밀번호 : <input type="password" name="pw" style="margin-bottom: 10px"> <br>
			<input type="submit" value="로그인">
			<button type="button" onclick="location.href='../member.html' ">회원 가입</button>
			<button type="button" style="margin-top: 10px;" onclick="location.href='../g_member.html' ">가이드 가입</button>
		</form>
	</div>

      <div class="footer">
          

      </div><!--footer-->

</body>
</html>