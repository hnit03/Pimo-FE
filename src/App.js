import HomePage from './containers/HomePage';
import GuildPage from './containers/GuildPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./components/Header/NavBar";
import SectionFooter from "./components/Footer/SectionFooter";

function App() {
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
         </Switch>
         <SectionFooter />
      </BrowserRouter>
   );
}

export default App;
