import Header from "../components/Header"
import home from '../assets/home.png'
import { Alien, BracketsCurly, AddressBook } from "phosphor-react"
import styles from '../styles/pages/home.module.css'


const Home = () => {
  return (
    <>
      <Header 
        title="Site da ANNA" 
        image={home} 
      />
      
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      
    </>
  )
}

export default Home
