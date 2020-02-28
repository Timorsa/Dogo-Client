import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// utils & helpers
import setAuthToken from './utils/setAuthToken';

// Components
import Home from './components/pages/home/Home';
import Feed from './components/pages/feed/Feed';
import SideBar from './components/layout/SideBar';
import Chat from './components/pages/messenger/Chat';
import Profile from './components/pages/profile/Profile';
import Settings from './components/pages/settings/Settings';
import Notifications from './components/layout/Notifications';
import Messenger from './components/pages/messenger/Messenger';

import './css/style.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app/profile" component={Profile} />
            <Route path="/app">
              <SideBar />
              <div className="screen">
                <Switch>
                  <Route exact path="/app/feed" component={Feed} />
                  <Route exact path="/app/feed" component={Feed} />
                  <Route exact path="/app/chat" component={Chat} />
                  <Route exact path="/app/settings" component={Settings} />
                  <Route exact path="/app/messenger" component={Messenger} />
                </Switch>
              </div>
              <Notifications />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
