import React from 'react';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-opt">Update Profile Picture</div>
      <div className="settings-opt">Update Cover Picture</div>
      <div className="settings-opt">Update Email </div>
      <div className="settings-opt">Update Password </div>
      <div className="settings-opt danger">Delete Account</div>
    </div>
  );
};

export default Settings;
