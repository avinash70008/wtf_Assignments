
import './App.css';
import Data from './Components/Data';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home/>
    <Data/>
    </div>
  );
}

export default App;
