import styled from "styled-components"; 
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [failure, setFailure] = useState(null);


    const Submit = (e) => {
      e.preventDefault(); 
      setLoading(true);
      console.log("Submitting"); 
        
      axiosInstance.post("/login",{
        email,
        password
      })
      .then(function(response) {
        console.log(response.data);
        setLoading(false);
        console.log(response.data.message);
        if(response.data && response.data.token && response.data.admin_id){
          localStorage.setItem("admin_id", response.data.admin_id);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
        setEmail('');
        setPassword('');
        

    }).catch(function (error){
        console.log(error.message);
        setLoading(false);
        setFailure(error.message);
        setSuccess(null);
    }
    );
       
    };

  return (
    <div>
            
                <form className="card shadow p-4" onSubmit={Submit}>
                    <div className="card-body">
                        {loading && <div className="text_warning">Loading...</div>}
                        {success && <div className="text_success">{success}</div>}
                        {failure && <div className="text_danger">{failure}</div>}
                        <input 
                            type="email" 
                            placeholder="Enter Your Name" 
                            className="form-control" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="password" 
                            placeholder="Enter Your Password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)} 
                            required
                        /><br/><br/>
                        <button className="btn btn-dark">Login</button>
                    </div>
                </form>
            
        </div>
     );
}

export default Login;

