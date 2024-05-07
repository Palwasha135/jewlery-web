import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    
    <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Shop' element={<Shop/>} />
    <Route path='/Product' element={<Product/>}  />
    <Route path='/Blog'  element={<Blog/>} />
    <Route path='/Page' element={<Page/>}  />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
