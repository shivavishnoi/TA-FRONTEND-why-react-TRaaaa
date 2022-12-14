import './App.css';
import Articles from './components/Article';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
