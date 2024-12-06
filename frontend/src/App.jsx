import { useEffect } from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Встановіть тривалість анімації
      once: true, // Анімація буде відбуватись тільки один раз
    });
  }, []); 

  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
};
