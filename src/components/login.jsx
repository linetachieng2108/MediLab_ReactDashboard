import styled from "styled-components"; 
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        console.log('Username:', username);
        console.log('Password:', password);

        
        setUsername('');
        setPassword('');

        setIsPending(true);
    };

  return (
    <Form>
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className='password'>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> 

        <div className='button'>
          { !isPending && <button>Login</button> }
          { isPending && <button disabled>You are being logged in...</button> }
        </div>

        
      </form>
    </div>
    </Form>
  );
};

export default Login;

const Form = styled.form`
.login {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
.login label {
  text-align: left;
  display: block;
}
.login h2 {
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 30px;
}

.login button {
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
`