import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
