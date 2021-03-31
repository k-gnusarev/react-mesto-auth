import React from 'react';

function Login(props) {
  return (
    <section className="start-section">
      <h1 className="start-section__heading">Вход</h1>
      <form className="start-section__form">
        <input
          className="start-section__input"
          name="loginEmail"
          type="email"
          placeholder="Email"
          id="login-email"
          required></input>
        <input
          className="start-section__input"
          name="loginPassword"
          type="password"
          placeholder="Пароль"
          id="login-password"
          required></input>
        <button className="button button_style_white">Войти</button>
      </form>
    </section>
  );
}

export default Login;