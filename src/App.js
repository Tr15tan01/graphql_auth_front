import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/homePage';
import { Login } from './pages/login';
import { Register } from './pages/register';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
