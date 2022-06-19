<%-- 
    Document   : salida
    Created on : 7 feb. 2022, 02:10:48
    Author     : MARK II
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Encuesta finalizada</title>
    </head>

    <body>
        <h2>Muchas gracias por colaborar en la encuesta!!</h2>
        
<p>
            		<%= request.getParameter("nombreCompleto")%>, 
            		has respondido que estas familiarizado con los siguientes lenguajes de programación:</p>
        		<ul>
           			 <%
                			String[] lenguajesSeleccionados = request.getParameterValues("progLeng");
                			if(lenguajesSeleccionados != null){
                    				for(int i=0; i<lenguajesSeleccionados.length; i++){
            			%>
<li>
                			<%= lenguajesSeleccionados[i]%>
           			 </li>
            		<%}
                		}
           		 %>
                         <%
                 String file_name=(String)request.getParameter("Foto");
                if (file_name !=null){
                    %><br>
                    <img src="Resources/<%=file_name%>">
                <%                   
                }
                %>
        	</ul>
    </body>
</html>

