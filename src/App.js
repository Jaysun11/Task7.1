import './App.css';
import Header from './Header'
import React from 'react';
import HeroImage from './HeroImage';
import FeaturedArticlesheader from './FeaturedArticlesHeader';
import FeaturedTutorialsheader from './FeaturedTutorialsHeader';
import AllArticlesButton from './AllArticlesButton';
import AllTutorialsButton from './AllTutorialsButton';
import ArticlesContainer from './ArticlesContainer';
import TutorialsContainer from './TutorialsContainer';
import SubFooterSignUp from './SubFooterSignUp';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <FeaturedArticlesheader />
      <ArticlesContainer />
      <AllArticlesButton />
      <FeaturedTutorialsheader />
      <TutorialsContainer />
      <AllTutorialsButton />
      <SubFooterSignUp />
      <Footer />
    </div>
  );
}

export default App;
