import Header from "../components/Header"

import contato from '../assets/contato.png'

import styles from '../styles/pages/contato.module.css'
import { useState } from "react"


const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  return (
    <>
      <Header 
        title="Fale comigo" 
        image={contato} 
      />
      <main>
        <form className={styles.form} onSubmit={()=>{}}>
          <input 
            className={styles.formInput}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}  
          />
          <input 
            className={styles.formInput}
            type="email"
            placeholder="Digite seu email"
            onChange={handleInputEmail}
            value={email}
          />
          <textarea 
            className={styles.formInput}
            placeholder="Digite sua mensagem"
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button 
            className={styles.formButton} 
            type="submit">Enviar Mensagem
          </button>
        </form>
      </main>
      
    </>
  )
}

export default Contato
