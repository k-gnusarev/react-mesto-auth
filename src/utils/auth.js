const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => console.log(err));
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    if (response.status === 400) {
      throw new Error('Не все поля заполнены');
    } else if (res.status === 401) {
      throw new Error('Email не зарегистрирован');
    } else return res.json();
  })
  .then((data) => {
    console.log(data)
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    }
  })
}

export const getContent = (token) => {return fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
  .then((response) => {
    return response.json()
  })
  .then((data) => data)
}