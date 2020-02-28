import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signin } from '../../../actions/auth';
import { Redirect } from 'react-router-dom';

const SignIn = ({ signin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    signin(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/app" />;
  }

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

SignIn.propTypes = {
  signin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signin })(SignIn);
