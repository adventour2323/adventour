<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- 가이드용 -->


<%
String id = request.getParameter("id");
String pw = request.getParameter("pw");
 
Connection conn = null;
ResultSet rs = null;
PreparedStatement pstmt = null;
		try {
	out.println("111");
	out.println(id);
	Class.forName("com.mysql.jdbc.Driver");
	out.println("222");
	out.println(pw);
	conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour","root","qhdks12!@");
	String sql = "select count(*) as cnt from guide where g_id=? and g_pw=?";

	pstmt = conn.prepareStatement(sql); 
	pstmt.setString(1, id);
	pstmt.setString(2, pw);
	rs = pstmt.executeQuery(); 
	rs.next();
 
 
	if(rs.getString("cnt").equals("1")) {
		session.setAttribute("id",id);
		session.setAttribute("pw",pw);
		/* response.sendRedirect("g_login_end.jsp"); */
		response.sendRedirect("../index.html");
			}else {
		response.sendRedirect("g_login_done.jsp");
			}
 
		}catch(Exception e) {
 
		}


/* 회원용  */

/* 	String id = request.getParameter("id");
	String pw = request.getParameter("pw"); */
 
/* 	Connection conn = null;
	ResultSet rs = null;
	PreparedStatement pstmt = null; */
	
	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour","root","0521");
		String sql = "select count(*) as cnt from guide where g_id=? and g_pw=?";

		pstmt = conn.prepareStatement(sql); 
		pstmt.setString(1, id);
		pstmt.setString(2, pw);
		rs = pstmt.executeQuery(); 
		rs.next();
 
		if(rs.getString("cnt").equals("1")) {
		session.setAttribute("id",id);
		session.setAttribute("pw",pw);
		response.sendRedirect("../index.html"); 
		}else {
		response.sendRedirect("g_login_done.jsp");
		}
 
		}catch(Exception e) {
 
		}
%>



</body>
</html>