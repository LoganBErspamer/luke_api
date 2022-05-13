import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Something from './components/Something';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
    <Search/>
    <Routes>

    <Route path="/people/:id" element={<People/>}/>
    <Route path="/planets/:id" element={<Planet/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
