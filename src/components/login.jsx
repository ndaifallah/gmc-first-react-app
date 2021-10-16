// Importer le react library
import React, { Component } from 'react';
import { Button } from 'antd';


// Création de la classe du composant qu'on va afficher.
class Login extends Component {
    constructor(props){
        super(props);
        this.user = "Hello";
        this.pass = "world";
        console.log(props);
        this.state = {
            login: "",
            password: "",
            tentatives: 0
        };
    }
    render(){
        console.log(this.state);
        return (<div style={
            {
                padding: 20,
                backgroundColor: 'grey',
                display: 'flex',
                flexDirection: 'column'
            }
        }>
            
            <input placeholder="Login" onChange={evt => this.setState({login: evt.target.value})} value={this.state.login}/>
            <input placeholder="Password" onChange={evt => this.setState({password: evt.target.value})} type="password" value={this.state.password}/>
            <div>{this.state.tentatives >= 3 ? <p>{this.props.errorMessage}</p> : <Button onClick={evt => {
                this.setState({tentatives: this.state.tentatives + 1})
                if(this.state.login === this.user && this.state.password === this.pass)
                    alert("Correct user and password");
                else
                    alert("User or password incorrect");
                }}>Login</Button>}
                
            </div>
        </div>);
    }
}



// pour rendre le composant utilisable par les autres composants
export default Login;