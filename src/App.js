import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import LaunchersContextProvider from './contexts/LaunchersContext';
import CraftContextProvider from './contexts/CraftContext';
import Launch from './components/Launch';
import Main from './components/Main';
import Details from './components/Details';
import NotFound404 from './components/NotFound404';

const App = () => {
  return (
    <LaunchersContextProvider>
      <CraftContextProvider>
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/launchers/:type" element={<Main />} />
          <Route path="/spacecraft/:type" element={<Main />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </CraftContextProvider>
    </LaunchersContextProvider>
  )
}

export default App;
