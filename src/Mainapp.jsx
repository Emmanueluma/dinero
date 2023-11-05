import React, { useState } from 'react'
import Home from './pages/home/Home';
import About from './pages/about/About'
import Services from './pages/services/Services';
import Create from './pages/create/Create'; 
import Footer from './pages/footer/Footer'; 
import Question from './pages/question/Question';
import Partnerships from './pages/partnerships/Partnerships';
const Mainapp = () => {
  const [article, setArticle] = useState(false);
  return (
    <>
      <Home article={article} setArticle={setArticle} />
      <main>
        <About article={article} setArticle={setArticle} />
        <Services />
        <Question />
        <Partnerships />
        <Create  />
      </main>
      <Footer />
    </>  
  )
}

export default Mainapp
