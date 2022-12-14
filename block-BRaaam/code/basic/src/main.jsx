import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Tweet from './components/Tweets';
import Footer from './components/Footer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Footer />
  </React.StrictMode>
);
