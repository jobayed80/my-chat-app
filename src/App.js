
import { Button } from '@mui/material'
import Registration from './pages/Registration.js'
import Login from './pages/Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
