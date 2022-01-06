import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const history = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

async function registerUser(event) {
  event.preventDefault()

  console.log("Registering User")
  console.log(name, email, password)

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, 
        email,
        password,
      }),
    })

    const data = await response.json()

    if(data.status === 'ok') {
      history.push('/login')
    }
  }

  return (
    <div className="App">
     <h1>Register</h1>
     <form onSubmit={registerUser}>
       <input 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        type="text" 
        placeholder="UserName"          
        />
        <br />
       <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text" placeholder="Email"
        />
        <br />
       <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text" placeholder="Password"
        />
        <br />
        <input type={"submit"} value='Register'/>
     </form>
    </div>
  );
}

export default App;
