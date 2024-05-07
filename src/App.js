import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    
    <BrowserRouter>
  
  <Routes>
    <Route path='/' />
    <Route path='/Shop'/>
    <Route path='/Product' />
    <Route path='/Blog'  />
    <Route path='/Page'  />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
