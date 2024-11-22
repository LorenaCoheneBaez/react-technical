import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Home from './views/home/Home';
import Header from './components/header/Header';
import './styles/main.scss'

const App: React.FC = () => {
  return (
    <ProductProvider>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </ProductProvider>
  );
};

export default App;

