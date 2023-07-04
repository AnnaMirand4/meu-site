import Header from "../components/Header"

import home from '../assets/home.svg'
import Footer from "../components/Footer"

import { Alien } from "phosphor-react"
import Text from "../components/Text"

const Home = () => {
  return (
    <>
      <Header 
        title="Site da ANNA" 
        image={home} 
      />
      <h1>HOME</h1>
      <div>
      <Alien size={150} color="#686AAC" weight="thin" />
      <Text content= "ashuahsiahs suhauhsuahs uhsuahsu ahua ush uahsuah uahsuah uhsua " />
      </div>
      <Footer />
    </>
  )
}

export default Home
