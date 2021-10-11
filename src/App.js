import React from 'react';
import HomePage from './containers/HomePage';
import GuildPage from './containers/GuildPage';
import ModelSearchPage from './containers/ModelSearchPage';
import BrandSearchPage from './containers/BandSearchPage';
import ModelInfoPage from './containers/ModelInfoPage';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import NavBar from "./components/Header/NavBar";
import SnackbarContent from "./components/Snackbar/SnackbarContent.js";

function App() {
   return (
      <BrowserRouter>
         <div id="signupSuccess" style={{
            position: 'fixed',
            right: 0,
            marginRight: '5%',
            marginTop: '8%',
            zIndex: 1000,
            top: 0,
            display: 'none',
            width: '35%',
         }}>
            <SnackbarContent
               message={
                  <span style={{ fontSize: '120%', textAlign: 'right' }}>
                     <b>Đăng ký thành công</b>
                  </span>
               }
               close
               color="success"
            />
         </div>
         <NavBar />
         <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/how-it-work" component={GuildPage} />
            <Route path="/model-search/:id" component={ModelSearchPage} />
            <Route path="/brand-search/:id" component={BrandSearchPage} />
            <Route path="/model-info/:id" component={ModelInfoPage} />
         </Switch>
      </BrowserRouter>
   );
}

export default App;
