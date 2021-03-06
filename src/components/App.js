import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import store from "./store";
import history from "./history";

import Home from './home/home';
import Registration from './registration/registeration';
import Login from './login/login';
import ResetPassword from './login/resetPassword';

class App extends React.Component{
    render(){
        return (
          <>
          <ReactNotification />
            <Provider store={store}>
              <Router history={history}>
                <Route path="/" exact component={Home} />
                <Route path='/registration' exact component={Registration} />
                <Route path='/login' exact component={Login} />
                <Route path='/resetpassword' exact component={ResetPassword} />
              </Router>
            </Provider>
            </>
          );
    }
}

export default App;
