<%-- 
    Document   : index
    Created on : 7 feb. 2022, 02:04:34
    Author     : MARK II
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Encuesta entre desarrolladores</title>
    </head>
    <body>
        <h1>BIENVENIDO/A A LA ENCUESTA PARA DESARROLLADORES, FORMULARIO SIN MVC</h1>
        <p>Indica los lenguajes de programación con los que estas famailiarizado/a</p>
        <form action="salida.jsp">
           <table border="0">
                <tbody>
                    <tr>
                        <td>Nombre Completo</td>
                        <td><input type="text" name="nombreCompleto" value="" /></td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td><input type="checkbox" name="progLeng" value="java" /></td>
                    </tr>
                    <tr>
                        <td>PHP</td>
                        <td><input type="checkbox" name="progLeng" value="php" /></td>
                    </tr>
                    <tr>
                        <td>Ruby</td>
                        <td><input type="checkbox" name="progLeng" value="ruby" /></td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td><input type="checkbox" name="progLeng" value="python" /></td>
                    </tr>
                    <tr>
                        <td><input type="file" name="Foto" value="" width="250"/></td>
                        <td><input type="submit" value="Enviar" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </body>
</html>

