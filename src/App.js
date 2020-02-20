import React from 'react';
import Home from './components/pages/home/Home';
import SideBar from './components/layout/SideBar';
import Notifications from './components/layout/Notifications';
import Feed from './components/pages/feed/Feed';
import Profile from './components/pages/profile/Profile';
import NotificationItem from './components/layout/NotificationItem';
import Messenger from './components/pages/messenger/Messenger';

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="screen">
        <Messenger />
      </div>
      <Notifications />
    </div>
  );
};

export default App;
