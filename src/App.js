import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from './Pages/Home/Home';
import Login from './components/login/login';
import Register from './Pages/Register/Register';

function App() {

  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      {/* </BrowserRouter> */}
      {/* <Home/> */}
      <Login/>
    </div>
  );
}

export default App;
