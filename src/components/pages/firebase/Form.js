import React, {useState} from 'react';

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  return (
    <div>
      <form action="">
        <input type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder={"Name"}
        />
        <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         placeholder={"email"}
        />
        <input type="password"
        value={password}
       onChange={(e) => setPassword(e.target.value)}
               placeholder={"Password"}
        />
        <button
          onClick={() => handleClick(email,password)}
          style={{
            color:"red",
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export {Form};