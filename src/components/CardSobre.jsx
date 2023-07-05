import Text from './Text'
import style from '../styles/components/cardSobre.module.css'
import anna from '../assets/Anna.jpeg'

const CardSobre = () => {
  return (
    <div className={style.sobreContainer}>
        <div className={style.sobreImage}>
            <img width= '300px' src={anna} alt='foto preto e branco da Anna cabelos curtos cacheados e frnaja ondulada' />
        </div>
        <div className={style.textSobre}><Text content='Sou Anna Caroline Miranda, sou desenvolvedora Junior e estudandte Front End na Repograma
        Sou apaixonada pela tecnologia de várias formas, inclusive de pensar nela filosoficamente. 
        Gosto de cultura pop em geral, então várias das minhas referencias são ligadas a isso.
        Meu gosto pelo audio visual se divide em filmes de drama e animes.
        Sou amante da Arte e por isso pretendo juntar arte e tecnologia em meus trabalhos.  
        ' />
        </div>
    </div>
  )
}

export default CardSobre