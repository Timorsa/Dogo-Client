import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="settings">
      <Link
        to="app/settings/account/update/profilePic"
        className="settings-opt"
      >
        Update Profile Picture
      </Link>
      <Link to="app/settings/account/update/coverPic" className="settings-opt">
        Update Cover Picture
      </Link>
      <Link to="app/settings/account/update/mail" className="settings-opt">
        Update Email{' '}
      </Link>
      <Link to="app/settings/account/update/password" className="settings-opt">
        Update Password{' '}
      </Link>
      <Link to="app/settings/account/delete" className="settings-opt danger">
        Delete Account
      </Link>
    </div>
  );
};

export default Settings;
