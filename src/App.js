import React, { useEffect } from 'react';
import HomePage from './containers/HomePage';
import GuildPage from './containers/GuildPage';
import ModelSearchPage from './containers/ModelSearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./components/Header/NavBar";
import { useDispatch } from 'react-redux';
import { getModelById } from './actions/models';
// import { useSelector } from 'react-redux';

function App() {
   // const model = useSelector((state) => state.models);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getModelById(1));
   }, [dispatch]);
   // console.log(model);
   return (
      <BrowserRouter>
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
