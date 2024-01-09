import React from 'react';
import Header from './components/Header'
import Showcase from './components/Showcase';
import Interactive from './components/Interactive';
import Creations from './components/Creations';
import Footer from './components/Footer';
import CreationsDesktop from './components/CreationsDesktop';

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </>
  );
}

export default App;