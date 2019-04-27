import React, { Component} from 'react' ;
import './login.css';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import auth from '../auth';

class Login extends Component {
    user = {
        username: "randomUser",
        password: "password"
    };

    /*handleClick = (props) => {
        auth.login((props)=>{
            props.history.push("/dashboard");
        })
    };*/

    render(){
        return(
            <div className={"welcomeScreen"}>
                <form>
                    <input value={this.user.username} />
                    <input value={this.user.password} />
                    <button className={"button"} onClick={()=>{
                        auth.login(()=>{
                            this.props.history.push("/dashboard");
                        });
                    }}>Sign In</button>
                    <Link to="/register">
                        <button className={"button signUp"}>Sign Up</button>
                    </Link>
                </form>
            </div>


        );
    }
}

export default Login;