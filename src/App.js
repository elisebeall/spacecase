import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import CraftContextProvider from '../contexts/CraftContextProvider';
import Launch from './components/Launch';
import Main from './components/Main';
import Details from './components/Details';

const App = () => {
  return (
    <CraftContextProvider>
      <Routes>
        <Route path="/" component={<Launch />} />
        <Route path="/launch-vehicles" component={<Main />} />
        <Route path="/spacecraft" component={<Main />} />
        <Route path="/details/:id" component={<Details />} />
        <Route path='/*' component={<NotFound404 />} />
      </Routes>
    </CraftContextProvider>
  )
}

export default App;
