import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FocusPocus from './containers/FocusPocus';
import './index.css';
import ThemeContextProvider from './components/ThemeContext';

const App = () => {

  return (
    <main>
      <ThemeContextProvider>
        <Header />
        <FocusPocus />
        <Footer />
      </ThemeContextProvider>
    </main>
  );
};

export default App;
