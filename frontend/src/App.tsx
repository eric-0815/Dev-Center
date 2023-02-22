import React, {Fragment} from 'react';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Fragment>
     <Navbar />
     <Landing/>
    </Fragment>
  );
}

export default App;
