import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../../layout/Alert';
import { setAlert } from '../../../actions/alerts';
import { signup } from '../../../actions/auth';
import { Redirect } from 'react-router-dom';

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordVerify: '',
    profilePicture: '',
    coverPicture: ''
  });

  const {
    userName,
    firstName,
    lastName,
    email,
    password,
    passwordVerify,
    profilePicture,
    coverPicture
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password === passwordVerify) {
      const newUser = {
        userName,
        firstName,
        lastName,
        email,
        password,
        profilePicture,
        coverPicture
      };

      signup(newUser);
    } else {
      setAlert('Passwords fo not match', 'sign-up');
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/app" />;
  }

  return (
    <div className="sign-up">
      {/*all my inputs*/}

      <form className="sign-up-form" onSubmit={e => onSubmit(e)}>
        <input
          className="sign-up-input"
          type="text"
          placeholder="User Name"
          name="userName"
          value={userName}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="sign-up-input"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="sign-up-input"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="sign-up-input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="sign-up-input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          required
        />

        <input
          className="sign-up-input"
          type="password"
          placeholder="Verify Password"
          name="passwordVerify"
          value={passwordVerify}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="sign-up-input"
          type="text"
          placeholder="Profile Picture URL"
          name="profilePicture"
          value={profilePicture}
          onChange={e => onChange(e)}
        />
        <input
          className="sign-up-input"
          type="text"
          placeholder="Cover Picture URL"
          name="coverPicture"
          value={coverPicture}
          onChange={e => onChange(e)}
        />
        <button className="sign-up-input" type="submit">
          SignUp
        </button>
      </form>
      <Alert />
    </div>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);
