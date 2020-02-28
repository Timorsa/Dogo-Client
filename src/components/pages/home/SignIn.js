import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('log-in');
  };
  return (
    <div className="sign-in">
      {/*all my inputs*/}

      <form className="sign-in-form" onSubmit={e => onSubmit(e)}>
        <input
          className="sign-in-input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="sign-in-input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <button className="sign-in-input" type="submit">
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
