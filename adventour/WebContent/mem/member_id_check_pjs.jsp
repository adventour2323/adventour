<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@ page import= "java.sql.*" %><%
/* html에서 작성한 내용 변수로 받아오기 
	member_pjs.html의 m_id값이 중복인지 확인하기 위한 jsp
*/

request.setCharacterEncoding("UTF-8");
String m_id = request.getParameter("m_id");
 
Connection conn = null;
ResultSet rs = null;
PreparedStatement pstmt = null;
try {
Class.forName("com.mysql.jdbc.Driver");
conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour","root","dkssud2!!");
String sql = "select count(*) as cnt  from member where m_id=?";

pstmt = conn.prepareStatement(sql); 
pstmt.setString(1, m_id);
rs = pstmt.executeQuery(); 
if(rs.next()){
// 	int cnt = rs.getInt(0); // 이거도 먹음
	int cnt = rs.getInt("cnt");
	out.print(cnt);
}else{
	out.print(0);
}
	
}catch(Exception e) {

}
%>