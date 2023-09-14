<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@ page import= "java.sql.*" %>
<%
/* member.js의 회원가입 ajax와 연동 */
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

m_gender = m_gender == null ? "" : m_gender;


// 삼항연산자 예시. 다음 if문과 ? : 로 표현한 한줄이 같은 의미다.
// m_gender = m_gender == null ? "" : "sdfdsfd";

// if(m_gender == null){
// 	m_gender = "";
// }else{
// 	m_gender = "sdfdsfd";
// }

String m_agree = request.getParameter("cked_slct_agre");
m_agree = "true".equals(m_agree) ? "Y" : "N";	

// String m_agree= true;
// if(m_agree.value==true){
	
// }

// out.println("sadfnsdf =="+m_gender+"==sfd");

if(m_id == null){throw new Exception("m_id is null");}
if(m_pw == null){throw new Exception("m_pw is null");}
if(m_re_pw == null){throw new Exception("m_re_pw is null");}
if(m_lastname == null){throw new Exception("m_lastname is null");}
if(m_firstname == null){throw new Exception("m_firstname is null");}
if(m_nickname == null){throw new Exception("m_nickname is null");}
if(m_postcode == null){throw new Exception("m_postcode is null");}
if(m_addr1 == null){throw new Exception("m_addr1 is null");}
if(m_addr2 == null){throw new Exception("m_addr2 is null");}
if(m_addr3 == null){throw new Exception("m_addr3 is null");}
if(m_addr4 == null){throw new Exception("m_addr4 is null");}
if(m_pnum1 == null){throw new Exception("m_pnum1 is null");}
if(m_pnum1_1 == null){throw new Exception("m_pnum1_1 is null");}
if(m_pnum1_2 == null){throw new Exception("m_pnum1_2 is null");}
if(m_pnum2 == null){throw new Exception("m_pnum2 is null");}
if(m_pnum2_1 == null){throw new Exception("m_pnum2_1 is null");}
if(m_pnum2_2 == null){throw new Exception("m_pnum2_2 is null");}
if(m_email == null){throw new Exception("m_email is null");}
if(m_emaild == null){throw new Exception("m_emaild is null");}
if(m_birth_y == null){throw new Exception("m_birth_y is null");}
if(m_birth_m == null){throw new Exception("m_birth_m is null");}
if(m_birth_d == null){throw new Exception("m_birth_d is null");}
// if(m_gender == null){throw new Exception("m_gender is null");}
if(m_agree == null){throw new Exception("m_agree is null");}

Connection conn = null; 
Statement stmt = null;
int rowNum = 0;
try{
	Class.forName("com.mysql.jdbc.Driver"); /*데이테베이스에 연결*/
	conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour?characterEncoding=utf8","root","dkssud2!!");
	if(conn== null)
		throw new Exception("데이터베이스에 연결할 수 없습니다.");
	stmt = conn.createStatement();
	String command = String.format("insert into member(m_id, m_pw, m_lastname, m_firstname, m_nickname, m_postcode, m_addr1,m_addr2, m_pnum1, m_pnum2, m_email,m_birth_y, m_birth_m, m_birth_d, m_gender, m_agree)values('"
									+m_id+"', '"+m_pw+"', '"+m_lastname+"','"+m_firstname+"', '"+m_nickname+"', '"+m_postcode+"', '"+m_addr1+m_addr2+"', '"+m_addr3+m_addr4+"', '"+m_pnum1+m_pnum1_1+m_pnum1_2+ "','"
									+m_pnum2+m_pnum2_1+m_pnum2_2+ "','"+m_email+m_emaild+"', '"+m_birth_y+"', '"+m_birth_m+"','"+m_birth_d+"','"+m_gender+"','"+m_agree+"');" );
					
	
	rowNum = stmt.executeUpdate(command);
	
//	if(rowNum < 1)
//		throw new Exception("데이터를 DB에 입력할 수 없습니다.");
	
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
		
	} 
}

/*response.sendRedirect("이동할 페이지");
없어도 그만*/ 

%>


<%-- <% --%>
<!--  if(rowNum > 0){ -->
<!--  	out.print("<script>alert('회원가입 완료');</script>"); -->
<!--  }else{ -->
<!--  	out.print("<script>alert('회원가입 실패');</script>"); -->
<!--  } -->
<%-- %> --%>
