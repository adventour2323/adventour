<%@ page language="java" contentType="text/html; charset=utf-8"
   pageEncoding="utf-8"%>
   <%@ page import= "java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title> 로그인 저장해서 가져오기4</title>
</head>
<body>

<%
/* html에서 작성한 내용 변수로 받아오기 */
request.setCharacterEncoding("UTF-8");

String g_id = request.getParameter("g_id"); 
String g_pw = request.getParameter("g_pw");

String g_lastname = request.getParameter("g_lastname");
String g_firstname = request.getParameter("g_firstname");
String g_nickname = request.getParameter("g_nickname");

String g_country = request.getParameter("g_country");
String g_city = request.getParameter("g_city");

String g_theme = request.getParameter("g_theme");

String g_img = request.getParameter("g_img");

String g_email = request.getParameter("g_email");
String g_emaild = request.getParameter("g_emaild");

String g_pnum1 = request.getParameter("g_pnum1");
String g_pnum1_1 = request.getParameter("g_pnum1_1");
String g_pnum1_2 = request.getParameter("g_pnum1_2");

String g_birth_y = request.getParameter("g_birth_y");
String g_birth_m = request.getParameter("g_birth_m");
String g_birth_d = request.getParameter("g_birth_d");

String g_gender = request.getParameter("g_gender");

String g_agree1 = request.getParameter("cked_privacy");
String g_agree2 = request.getParameter("cked_slct_agre");




 

/*입력 값이 있는지 없는지 확인*/
if(g_id == null || g_pw == null || g_lastname == null || g_firstname == null || g_nickname == null || g_country == null || g_city == null || g_theme == null || g_img == null || g_email == null || g_emaild == null || g_pnum1 == null || g_pnum1_1 == null || g_pnum1_2 == null || g_birth_y == null || g_birth_m == null || g_birth_d == null || g_gender == null || g_agree1 == null || g_agree2 == null )
   throw new Exception("누락된 데이터가 있습니다.");


Connection conn = null; Statement stmt = null;

try{
   Class.forName("com.mysql.jdbc.Driver"); /*데이테베이스에 연결*/
   conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour?characterEncoding=utf8","root","qhdks12!@");
   if(conn== null)
      throw new Exception("데이터베이스에 연결할 수 없습니다.");
   stmt = conn.createStatement();
   String command = String.format("insert into guide(g_id, g_pw, g_lastname, g_firstname, g_nickname,  g_country, g_city, g_theme, g_img, g_email, g_pnum, g_birth_y, g_birth_m, g_birth_d, g_gender, g_agree1, g_agree2) values('"+g_id+"', '"+g_pw+"', '"+g_lastname+"','"+g_firstname+"', '"+g_nickname+"', '"+g_country+"', '"+g_city+"', '"+g_theme+"', '"+g_img+"','"+g_email+g_emaild+"', '"+g_pnum1+g_pnum1_1+g_pnum1_2+ "', '"+g_birth_y+"', '"+g_birth_m+"','"+g_birth_d+"','"+g_gender+"', '"+g_agree1+"','"+g_agree2+"');" );
				  
   
   int rowNum = stmt.executeUpdate(command);
	
   if(rowNum < 1)
      throw new Exception("데이터를 DB에 입력할 수 없습니다.");
   
} finally {
   try {
      stmt.close();
   } catch (Exception ignored) {
      
   } try {
      conn.close();
   } catch (Exception ignored){
      
   } }

/*response.sendRedirect("이동할 페이지");
없어도 그만*/ 


/* 저장내용 확인용 출력문
response.setCharacterEncoding("UTF-8");
out.println("<h2>회원가입이 완료되었습니다!</h2>");
out.println("<p>ID: " + m_id + "</p>");
out.println("<p>PW: " + m_pw + "</p>");
out.println("<p>PW: " + m_re_pw + "</p>");
out.println("<p>lName: " + m_lastname + "</p>");
out.println("<p>fName: " + m_firstname + "</p>");
out.println("<p>NickName: " + m_nickname + "</p>");

out.println("<p>Address: " + m_postcode + " " + m_addr1 + " " + m_addr2 + m_addr3 +m_addr4+"</p>");
out.println("<p>pnum1: " + m_pnum1 + m_pnum1_1 +m_pnum1_2+ "</p>");
out.println("<p>pnum2: " + m_pnum2 + m_pnum2_1 +m_pnum2_2+ "</p>");
out.println("<p>e-mail:" + m_email + m_emaild+"</p>");
out.println("<p>birth:" + m_birth_y+ m_birth_m+m_birth_d+"</p>");
out.println("<p>gender" + m_gender + "</p>");*/

%>


</body>
</html>