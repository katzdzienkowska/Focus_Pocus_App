import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FocusPocus from './containers/FocusPocus';
import './index.css';

const App = () => {

  return (
    <main>
      <Header />
      <FocusPocus />
      <Footer />
    </main>
  );
}

export default App;
