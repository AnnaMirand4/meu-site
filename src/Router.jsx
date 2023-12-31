import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Portfolioo from './pages/Portfolio'
import Footer from './components/Footer'


const Router = () => {
    return(
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/sobre' element= {<Sobre />} />
            <Route path='/portfolio' element= {<Portfolioo />} />
            <Route path='/contato' element= {<Contato />} />
        </Routes>
        <Footer content="Feito com ♡ por Anna Miranda" />
    </BrowserRouter>
    )
}

export default Router