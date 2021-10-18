import React from 'react';
import HomePage from './containers/HomePage';
import GuildPage from './containers/GuildPage';
import ModelSearchPage from './containers/ModelSearchPage';
import BrandSearchPage from './containers/BandSearchPage';
import EventSearchPage from './containers/EventSearchPage';
import ModelInfoPage from './containers/ModelInfoPage';
import BrandInfoPage from './containers/BrandInfoPage';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import NavBar from "./components/Header/NavBar";
import SnackbarContent from "./components/Snackbar/SnackbarContent.js";
import CreateEventPage from "./containers/CreateEventPage"
// import CastingInfoPage from "./containers/CastingInfoPage"

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
            <Route path="/event-search/:id" component={EventSearchPage} />
            <Route path="/model-info/:id" component={ModelInfoPage} />
            <Route path="/event-create" component={CreateEventPage} />
            <Route path="/brand-info/:id" component={BrandInfoPage} />
            {/* <Route path="/casting-info/:id" component={CastingInfoPage} /> */}
         </Switch>
      </BrowserRouter>
   );
}

export default App;
