<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>success.jsp</title>
</head>
<body>
<%
if(session.getAttribute("id") == null) {
%>
<% response.sendRedirect("g_login_done.jsp"); %>
<%
}
%>
로그인이 성공하여야만 볼 수 있는 페이지.<br> 
 
 
<%= session.getAttribute("id") %>님 안녕하세요.
 
<a href=m_logout.jsp>로그아웃</a>
</body>
</html>