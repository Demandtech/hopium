import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Swap from './pages/Swap';
import Airdrop from './pages/Airdrop';

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
           <Route  index path='/' element={<Home />}/>
           <Route  path='/swap' element={<Swap />}/>
           <Route  path='/stake' element={<Stake />}/>
           <Route  path='/airdrop' element={<Airdrop />}/>
       </Routes>
    </Router>
  );
}

export default App;