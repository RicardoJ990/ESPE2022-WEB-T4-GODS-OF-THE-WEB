import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('surname_paternal', {path: "/"});
        cookies.remove('surname_maternal', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('surname_paternal: '+cookies.get('surname_paternal'));
        console.log('surname_maternal: '+cookies.get('surname_maternal'));
        console.log('name: '+cookies.get('name'));
        console.log('username: '+cookies.get('username'));
        return (
            <div>
                <center>
                    <h1>Welcom to the Happy Avocado</h1>
                    <h3>Members</h3>
                    <table BORDER="1">
                        <thead>
                            <tr>
                                <th>Username</th><th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td> rjaramillo </td><td>Ricardo Jaramillo Salgado</td></tr>
                            <tr><td> dijimenez2</td><td>Dylan Jimenez Quingalombo</td></tr>
                            <tr><td> jmejia1</td><td>Jose Mejia Ramos</td></tr>
                            <tr><td> rmeneses1</td><td>Raul Meneses Ortiz</td></tr>
                        </tbody>
                    </table>
                    <div class="col-xs-8 col-md-8">
                        <br></br>
                        <h3>
                            <a href="/product" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-list"></span> Producto</a>
                        </h3>
                        <h2>Crear Producto</h2>
                        <form action="/save">
                            <div class="form-group">
                                <label for="email">Nombre del Producto:</label>
                                <input type="text" class="form-control" name="prodName" />
                            </div>
                            <div class="form-group">
                                <label for="email">Tipo de Producto: </label>
                                <textarea class="form-control" name="prodDesc" cols="60" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="email">Precio: </label>
                                <input type="number" class="form-control" name="prodPrice" />
                            </div>
                            <div class="form-group">
                                <label for="email">Imagen del Product:</label>
                                <input type="url" class="form-control" name="prodImage" />
                            </div>
                            <button type="submit" class="btn btn-success">Guardar</button>
                        </form>
                    </div>             											
		

		
	
                    <br />
                    <button onClick={()=>this.cerrarSesion()}>Sing Off</button>                                    
                         
                
                </center> 
            </div>
        );
    }
}

export default Menu;