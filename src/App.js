import Register from './Register';
import Login from './Login';
import {Routes, Route} from "react-router-dom";
//import NavBar from './component/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
