import React, { useEffect } from 'react';
import HomePage from './containers/HomePage';
import GuildPage from './containers/GuildPage';
import ModelSearchPage from './containers/ModelSearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./components/Header/NavBar";
import { useDispatch } from 'react-redux';
import { getModelById } from './actions/models';
import SnackbarContent from "./components/Snackbar/SnackbarContent.js";

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getModelById(1));
   }, [dispatch]);
   return (
      <BrowserRouter>
         <div id="alert" style={{
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
                  <span style={{ fontSize: '120%' , textAlign: 'right'}}>
                     <b>Đăng nhập thất bại: </b> Tài khoản gmail chưa được đăng kí
                     hoặc tài khoản không thể đăng nhập vào trang
                  </span>
               }
               close
               color="danger"
            />
         </div>
         <NavBar />
         <Switch>
            <Route exact={true} path="/">
               <HomePage />
            </Route>
            <Route path="/how-it-work">
               <GuildPage />
            </Route>
            <Route path="/model-search">
               <ModelSearchPage />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
