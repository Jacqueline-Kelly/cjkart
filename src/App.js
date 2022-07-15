import React from 'react';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Artist from './Pages/theArtist';
import Contact from './Pages/Contact'
import { DataProvider } from './Context/dataContext';

const App = () =>  {
  return (
    <DataProvider>
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/theartist" element={<Artist/>} />
        <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    </DataProvider>
  )
}

export default App 
