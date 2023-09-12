<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@ page import= "java.sql.*" %>
<%
/* html에서 작성한 내용 변수로 받아오기 */
request.setCharacterEncoding("UTF-8");
String m_id = request.getParameter("m_id"); 

String m_pw = request.getParameter("m_pw"); 
String m_re_pw = request.getParameter("m_re_pw");

String m_lastname = request.getParameter("m_lastname");

String m_firstname = request.getParameter("m_firstname");

String m_nickname = request.getParameter("m_nickname");

String m_postcode = request.getParameter("m_postcode");

String m_addr1 = request.getParameter("m_addr1");
String m_addr2 = request.getParameter("m_addr2");
String m_addr3 = request.getParameter("m_addr3");
String m_addr4 = request.getParameter("m_addr4");

String m_pnum1 = request.getParameter("m_pnum1");
String m_pnum1_1 = request.getParameter("m_pnum1_1");
String m_pnum1_2 = request.getParameter("m_pnum1_2");

String m_pnum2 = request.getParameter("m_pnum2");
String m_pnum2_1 = request.getParameter("m_pnum2_1");
String m_pnum2_2 = request.getParameter("m_pnum2_2");

String m_email = request.getParameter("m_email");
String m_emaild = request.getParameter("m_emaild");

String m_birth_y = request.getParameter("m_birth_y");
String m_birth_m = request.getParameter("m_birth_m");
String m_birth_d = request.getParameter("m_birth_d");

String m_gender = request.getParameter("m_gender");

String m_agree = request.getParameter("cked_slct_agre");


if( /*입력 값이 있는지 없는지 확인*/
   m_id == null || m_pw == null  || m_re_pw == null ||m_lastname == null ||m_firstname == null || m_nickname == null || 
   m_postcode == null || m_addr1 == null || m_addr2 == null || m_addr3 == null || m_addr4 == null ||
   m_pnum1 == null || m_pnum1_1 == null || m_pnum1_2 == null || m_pnum2 == null || m_pnum2_1 == null || m_pnum2_2 == null ||
   m_email == null || m_emaild == null || m_birth_y == null ||  m_birth_m == null || m_birth_d == null || m_gender == null )
   throw new Exception("누락된 데이터가 있습니다.");
Connection conn = null; Statement stmt = null;
try{
   Class.forName("com.mysql.jdbc.Driver"); /*데이테베이스에 연결*/
   conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour?characterEncoding=utf8","root","dkssud2!!");
   if(conn== null)
      throw new Exception("데이터베이스에 연결할 수 없습니다.");
   stmt = conn.createStatement();
   String command = String.format("insert into member(m_id, m_pw, m_lastname,  m_firstname, m_nickname,  m_postcode, m_addr1,m_addr2, m_pum1, m_pnum2, m_email,m_birth_y, m_birth_m, m_birth_d, m_gender, m_agree)values('"
                                  +m_id+"', '"+m_pw+"', '"+m_lastname+"','"+m_firstname+"', '"+m_nickname+"', '"+m_postcode+"', '"+m_addr1+m_addr2+"', '"+m_addr3+m_addr4+"', '"+m_pnum1+m_pnum1_1+m_pnum1_2+ "','"
                                   +m_pnum2+m_pnum2_1+m_pnum2_2+ "','"+m_email+m_emaild+"', '"+m_birth_y+"', '"+m_birth_m+"','"+m_birth_d+"','"+m_gender+"','"+m_agree+"');" );
				  
   
    int rowNum = stmt.executeUpdate(command);
   
//    if(rowNum < 1)
//       throw new Exception("데이터를 DB에 입력할 수 없습니다.");
   
	out.println("sucess");
} catch(Exception e) {
	e.printStackTrace();
	out.println("catch fail");
} finally {
// 	out.println("파이널");
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