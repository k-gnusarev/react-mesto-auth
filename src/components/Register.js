import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../utils/auth.js';

function Register() {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const history = useHistory();

  function handleEmailChange(evt) {
    setEmailValue(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPasswordValue(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailValue;
    const password = passwordValue;
    Auth.register(email, password)
      .then(res => {
        if(res) {
          console.log(res);
          history.push('/sign-in');
        } else {
          console.log('что то пошло не так');
        }
      });
  }

  return (    
    <section className="start-section">
      <h1 className="start-section__heading">Регистрация</h1>
      <form className="start-section__form" onSubmit={handleSubmit}>
        <input
          className="start-section__input"
          name="loginEmail"
          type="email"
          placeholder="Email"
          id="login-email"
          required
          onChange={handleEmailChange}
          value={emailValue}></input>
        <input
          className="start-section__input"
          name="loginPassword"
          type="password"
          placeholder="Пароль"
          id="login-password"
          required
          onChange={handlePasswordChange}
          value={passwordValue}></input>
        <button className="button button_style_white">Зарегистрироваться</button>
      </form>
      <p className="start-section__text">
        Уже зарегистрированы? <Link to="/sign-in" className="start-section__link">Войти</Link>
      </p>
    </section>
  );
}

export default Register;