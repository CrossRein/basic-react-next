import React, { useState, useEffect } from 'react';
import LoginStyles from '../styles/Login.module.css';

const LoginPage = () => {
  const [title, setTitle] = useState('judul halaman');
  const [counter, setCounter] = useState(10);
  const [isEven, setEven] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickButton = () => {
    setTitle('judul baru');
  };

  const handleIncrementBtn = (incrementBy = 3) => {
    setCounter(counter + incrementBy);
    console.log('increment by', incrementBy);
  };

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
  useEffect(() => {
    // everytime the counter value change
    // it will run fucntion on this block
    console.log('berubah');

    if (counter % 2 === 0) {
      // genap
      console.log('genap');
      setEven(true);
    } else {
      // ganjil
      console.log('ganjil');
      setEven(false);
    }
  }, [counter, title]); // changes on the counter and title variable (state)

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
      <div className="loginTitle">login {title}</div>
      <button onClick={() => handleClickButton()}>klik disini</button>

      <div
        className={
          isEven
            ? LoginStyles.loginCounterInModule
            : LoginStyles.loginCounterVersionTwoInModule
        }
      >
        counter: {counter}
      </div>
      <button onClick={() => handleIncrementBtn()}>increment 3</button>
      <p onClick={() => handleIncrementBtn(2)}>
        increment 2 (call function di text)
      </p>

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
