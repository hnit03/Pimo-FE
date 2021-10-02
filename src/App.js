
import './App.css';
import HomePage from './components/navbar/HomePage';
import ModelInfoPage from './containers/ModelInfoPage';
import { BrowserRouter } from 'react-router-dom';
import HowPimoWorkPage from './containers/HowPimoWorkPage';

function App() {
  return (
    <BrowserRouter className="App">
      {/* <ModelInfoPage /> */}
      <nav class="navigation">
        <HomePage />
      </nav>
      <HowPimoWorkPage/>
    </BrowserRouter>

  );
}

export default App;
