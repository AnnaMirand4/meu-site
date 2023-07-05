import Header from "../components/Header"

import portfolio from '../assets/portfolioo.png'

import Repos from "../components/Repos"

import style from "../styles/pages/portfolio.module.css"

const Portfolio = () => {


  return (
    <main>      
      <Header 
        title=" Meus Projetinhos" 
        image={portfolio} 
      />
      <h1 className={style.intruso}>p</h1>
      <Repos />
      </main>

  )
}

export default Portfolio
