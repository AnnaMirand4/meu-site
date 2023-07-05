
import Header from "../components/Header"

import sobre from '../assets/sobre.png'
import CardSobre from "../components/CardSobre"


const Sobre = () => {
  return (
    <>
      <Header 
        title="Descubra mais sobre mim" 
        image={sobre} 
      />
      <CardSobre />
    </>
  )
}

export default Sobre
