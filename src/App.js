import './App.css';
import firebase from './adapters/firebase.js';
import axios from 'axios';
import React from 'react'

function App() {

   const [token, setToken] = React.useState();
   const [mail, setMail] = React.useState();

   const handleLogin = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
         .auth()
         .signInWithPopup(provider)
         .then(function (result) {
            setToken(result.user.multiFactor.user.accessToken)
            setMail(result.user.email);
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   const handleCopyToken = (e) => {
      token.select();
      document.execCommand('copy');
   };

   return (
      <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
         <button onClick={handleLogin}>
            Get token
         </button>
         <br />
         <br />
         <textarea placeholder='Token...' style={{ width: '50rem', height: '15rem', wordWrap: 'break-word', margin: 'auto', textAlign: 'left' }} value={token} />
         <br />
         <textarea placeholder='Mail...' style={{ width: '50rem', height: '2rem', wordWrap: 'break-word', margin: 'auto', textAlign: 'left' }} value={mail} />
      </div>
   );
}

export default App;
