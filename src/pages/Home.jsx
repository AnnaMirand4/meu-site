import Header from "../components/Header"
import home from '../assets/home.png'
import { Cat, BracketsCurly, AddressBook } from "phosphor-react"
import styles from '../styles/pages/home.module.css'


const Home = () => {
  return (
    <>
      <Header 
        title="Site da ANNA!" 
        image={home} 
      />
      
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Cat size={150} color="#f79c9c" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}> Formada em Licenciatura em artes visuais deixou de lado as salas de aula para desbravar o mundo da tecnologia. 
           Gosto de ser criativa e de inventar.  </p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#f79c9c" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}> Aprendi HTML, CSS, JavaScript e React com a Reprograma, mas sei que isso é só o início! </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#f79c9c" weight="thin"/>
          <h2 className={styles.cardTitle}>Fala comigo</h2>
          <p className={styles.cardDescription}> Entre em contato comigo, estou ansiosa por novas experiências e com certeza ansiosa pelo primeiro trabalho na área de Front End. </p>
        </div>
      </div>
      
    </>
  )
}

export default Home
