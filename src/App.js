import React from "react";
import  "./styles/header.css";
import BaseHeader from "./components/header/BaseHeader";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
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
          <Routes>
              <Route path='/login' element={<Sign/>}/>
              <Route path='/request' element={<PrivateRoute><Request/></PrivateRoute>}/>
                <Route path='/main' element={<PrivateRoute><MainPage/></PrivateRoute>}/>
              <Route path='/' element={<BasePage/>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
