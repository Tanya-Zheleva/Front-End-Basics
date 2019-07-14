import React from 'react';

import './AuthorQuiz.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
