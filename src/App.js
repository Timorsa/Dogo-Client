import React from 'react';
import './App.css';
import SideBar from './components/layout/SideBar';
import Notifications from './components/layout/Notifications';
import Feed from './components/pages/feed/Feed';
function App() {
  return (
    <div className="App">
      <SideBar />
      <Feed />

      <Notifications />
    </div>
  );
}

export default App;
