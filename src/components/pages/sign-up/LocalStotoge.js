import React from 'react';

const LocalStoroge = () => {
  function handleRegistration(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    localStorage.setItem('user', JSON.stringify(userData));
  }
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  return (
    <>
      <form onSubmit={handleRegistration}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Register</button>
      </form>
      <div>
        <p>{user.name}</p>
      </div>
    </>
  );
};

export default LocalStoroge;