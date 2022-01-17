import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import CraftContextProvider from './contexts/CraftContext';
import Launch from './components/Launch';
import Main from './components/Main';
import Details from './components/Details';
import NotFound404 from './components/NotFound404';

const App = () => {
  return (
    <CraftContextProvider>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/launch-vehicles" element={<Main />} />
        <Route path="/spacecraft" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </CraftContextProvider>
  )
}

export default App;
