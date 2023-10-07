import React from "react";
import  "./styles/header.css";
import BaseHeader from "./components/header/BaseHeader";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import ActiveHeader from './components/header/ActiveHeader'
import MainTarif from "./components/body/MainTarif";
import Sign from './components/login/Sign'
import MainPage from "./components/Pages/MainPage";
import BasePage from './components/Pages/BasePage';
import ApiRequest from './components/request/ApiRequest';
import RequestPage from "./components/request/RequestPage";
import Request from "./components/Pages/Request";
function App() {

  return (

      <BrowserRouter>
          <Switch>
              <Route path='/login' component={Sign}/>
              <Route path='/main' component={BasePage} />
              <PrivateRoute path='/request-data' component={Request}/>
              <PrivateRoute path='/test' component={ApiRequest}/>
              <PrivateRoute path='/home' component={MainPage}/>


          </Switch>
      </BrowserRouter>
  );
}

export default App;
