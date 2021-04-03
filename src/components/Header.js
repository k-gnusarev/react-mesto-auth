import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header(props) {
  const { path } = useLocation();
  const text = `${path === '/sign-in' ? 'Регистрация' : 'Войти'}`;
  const linkRoute = `${path === '/sign-in' ? '/sign-up' : '/sign-in'}`;

  return (
    <header className="header">
      <img src={logo} className="logo" alt="Логотип Mesto Russia" />
      <div className="header__container">
        {props.isLoggedIn ? (
          <>
            <p className="header__text">{props.email}</p>
            <Link
              className="header__link header__link_type_signout"
              to=""
              onClick={props.onLogout}
            >Выйти</Link>
          </>
        ) : (
          <Link to={linkRoute} className="header__link">{text}</Link>)
        }
      </div>
    </header>
  );
};

export default Header;