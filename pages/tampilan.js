import React, { useState, useEffect } from 'react';
import LoginStyles from '../styles/Login.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = () => {
    // login sukses
    if (email !== '' && password !== '') {
      // run redirect ke halaman "/dashboard" misalnya
      console.log('di redirect ke halaman dashboard');
    } else {
      // login gagal
      console.log('login gagal, email dan password salah');
    }
  };

  // useEffect by default
  // akan selalu terpanggil pertama kali..
  // ..saat halaman pertama kali di render

  // effect to listen to changes
   // changes on the counter and title variable (state)

  // effect to listen to nothing (run saat halaman pertama kali di render)
  useEffect(() => {
    const userUdahLogin = false;
    if (userUdahLogin) {
      // run redirect ke halaman "/dashboard" misalnya
      console.log('di redirect ke halaman dashboard');
    } else {
      console.log('tetep stay di halaman ini');
    }
  }, []);

  return (
    <div>
      <div className="loginTitle"> Create test</div>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => handleSubmitLogin()}>login</button>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
};

export default LoginPage;
