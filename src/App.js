
import './App.css';
import ModelProfile from './components/ModelProfile';
import HomePage from './components/navbar/HomePage';


function App() {
  return (
    <div className="App">
      <ModelProfile/>
      <nav class="navigation">
      <HomePage/>
</nav>
    </div>
  );
}

export default App;
