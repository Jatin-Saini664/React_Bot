import React, {useState} from "react";
import { useHistory } from 'react-router';
import "./login-style.css"; 

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    function onchange(e){
        if(e.target.name==="name")
            setName(e.target.value);
        else if(e.target.name==="email")
            setEmail(e.target.value);
    }

    function onsubmit(){
        if(name===""||email==="")
            return;
        else{
            setEmail("");
            setName("");
            history.push("/quiz");
        }
    }
    return ( 
    <div className="container1">
        <input type="text" placeholder="Name" name="name" value={name} onChange={onchange}/>
        <input type="email" name="email" id="" placeholder="Email"  value={email} onChange={onchange}/>
        <button type="submit" onClick={onsubmit}>Enter</button>
    </div> 
    );
}
 
export default Login;