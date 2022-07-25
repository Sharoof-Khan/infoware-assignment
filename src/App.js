import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      {/* <h1>Infoware</h1> */}
      {/* <HomePage /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path= "/cart" element ={ <Cart />} />

      </Routes>


    </div>
  );
}

export default App;
