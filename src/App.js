import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/homePage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;