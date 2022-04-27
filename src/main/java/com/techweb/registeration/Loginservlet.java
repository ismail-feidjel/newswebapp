package com.techweb.registeration;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.cj.protocol.Resultset;

@WebServlet("/login")
public class Loginservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   

	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String uemail =request.getParameter("username");
		String upwd =request.getParameter("password");
		
		RequestDispatcher dispatcher= null;
		Connection con=null;
		HttpSession session =request.getSession();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con =DriverManager.getConnection("jdbc:mysql://localhost:3306/techwebdb","root","");
			
			PreparedStatement pst =con.prepareStatement("SELECT * FROM `users` WHERE uemail=? and upass=?");
		    pst.setString(1, uemail);
			pst.setString(2, upwd);
			
			ResultSet rs = pst.executeQuery();
			if (rs.next()) {
			session.setAttribute("name", rs.getString("uname"));
			dispatcher=request.getRequestDispatcher("index.jsp");
			
			}else {
				request.setAttribute("status","failed");
				dispatcher =request.getRequestDispatcher("login.jsp");
			}
			
		dispatcher.forward(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
