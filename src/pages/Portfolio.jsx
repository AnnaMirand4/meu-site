import Header from "../components/Header"

import portfolio from '../assets/portfolio.svg'
import Footer from "../components/Footer"
import Repos from "../components/Repos"

const Portfolio = () => {


  return (
    <>
      <Header 
        title=" Meus Projetinhos" 
        image={portfolio} 
      />
      <h1>PORTFOLIO</h1>
      <Footer />
      <Repos />
    </>
  )
}

export default Portfolio
