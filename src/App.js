import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUserName] = useState("")
  const [displayName, setDisplayName] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        Sentry with React           
        <div className="container">      
          <input className="inputBox" type="text" name="name" placeholder='Enter your name' onChange={(e) =>setUserName(e.target.value)}/>
          <button className="primaryButton" onClick={() =>setDisplayName(true)}>Enter</button>           
          <button className="primaryButton" onClick={undefinedMethod}>Break the Code! </button> 

        </div>
        {displayName && username &&
          <span className="message">Hi 👋 {username}, welcome to Beginning of this Project.</span>
         }
      </header>
    </div>
  );
}

export default App;
