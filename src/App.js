
import './App.css';
import Postview from './React/PostView';
import Landing_page from './React/LandingPage';
//import { ReactDOM } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Form from './React/Form'
import Context from './React/Context';
function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing_page />} />
            <Route path='/f' element={<Form />} />
            <Route path='/p' element={<Postview />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
