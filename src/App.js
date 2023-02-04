import './App.css';
import { useState } from 'react';
import Button from './components/button/Button';
import Form from './components/form/Form';
import Input from './components/input/Input';


function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const handleChange = (e) => {

    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });

    }
    else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });

    }
  }


    const handleClick=()=>{
      if(user.name==="")
      {
        alert("Geben Sie bitte einen Benutzername");
      }
      else if(user.password==="")
      {
        alert("Geben Sie bitte ein gültiges Password")
      }
      else
      {
        alert("Benutzername: "+user.name+" "+"Password: "+user.password);
      }

    }
  return (
    <div className="App">

      <h2>Login Form</h2>
      <Form>
        <Input type={"text"} placeHolder={"Benutzername"} value={user.name} onChange={handleChange} />
        <Input type={"password"} placeHolder={"Password"} value={user.password} onChange={handleChange} />
        <Button onClick={handleClick} 
        />
      </Form>
    </div>
  );
}

export default App;
