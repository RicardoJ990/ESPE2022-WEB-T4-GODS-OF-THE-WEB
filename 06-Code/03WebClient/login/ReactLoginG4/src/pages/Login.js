import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3004/usersTeam4";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('surname_paternal', respuesta.surname_paternal, {path: "/"});
                cookies.set('surname_maternal', respuesta.surname_maternal, {path: "/"});
                cookies.set('name', respuesta.name, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Welcome ${respuesta.name} ${respuesta.surname_paternal}`);
                window.location.href="./menu";
            }else{
                alert('Error the username or password is not correct');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
    
             
    <div className="containerPrincipal">
        <h3>HAPPY AVOCADO</h3>    
        
        <div className="containerSecundario">
          <div className="form-group">
            <label>User: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Password: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Log In</button>
          </div>
        </div>
      </div>      
        );
    }
}

export default Login;