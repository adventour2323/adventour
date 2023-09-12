
<%@ page language="java" contentType="text/html; charset=utf-8"
   pageEncoding="utf-8"%>
   <%@ page import= "java.sql.*" %>

<%
request.setCharacterEncoding("UTF-8");
String m_id = request.getParameter("m_id");
Connection conn = null;
Statement stmt = null;
if (m_id == null || m_id.trim().isEmpty()) {
    response.getWriter().write("아이디를 입력하세요");
} else {
    try {
        Class.forName("com.mysql.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/adventour?characterEncoding=utf8", "root", "0521");
        stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM member WHERE m_id = '"+m_id+"';");
        if (rs.next() ) {
            response.getWriter().write("duplicate");
        } else {
            response.getWriter().write("success");
        }
    } catch (Exception e) {
        response.getWriter().write("error");
    } finally {
        try {
            if (stmt != null) {
                stmt.close();
            }
        } catch (Exception ignored) { 
        }
        try {
            if (conn != null) {
                conn.close();
            }
        } catch (Exception ignored) {
        }
    }
}

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

