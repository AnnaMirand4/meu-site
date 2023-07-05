import styles from '../styles/components/header.module.css'

const Header = ({ title, image }) => {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.divTitle}> <h1 className={styles.headerTitle}>{title}</h1> </div>
      <div className={styles.divImage}> <img className={styles.headerImage} src={image} alt={title} /> </div>
    </header>
  )
}

export default Header
