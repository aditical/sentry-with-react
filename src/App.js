import { useState } from 'react';
import './App.css';
import * as Sentry from "@sentry/react";

function App() {
  const [username, setUserName] = useState("")
  const [displayName, setDisplayName] = useState(false)
  
  const handleDisplayName = () =>{
    try {
      if(username === ""){
      const msg = "You must enter a value to continue";
      throw msg;
      }
      setDisplayName(true)
    }
    catch(e) {
      Sentry.captureException(e);
      console.error(e)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Sentry with React           
        <div className="container">      
          <input className="inputBox" type="text" name="name" placeholder='Enter your name' onChange={(e) =>setUserName(e.target.value)}/>
          <button className="primaryButton" onClick={handleDisplayName}>Enter</button>            
        </div>
        {displayName && username &&
          <span className="message">Hi 👋 {username}, welcome to Beginning of this Project.</span>
         }
      </header>
    </div>
  );
}

export default App;
