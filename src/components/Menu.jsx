import { Link } from 'react-router-dom'
import style from '../styles/components/menu.module.css'

const Menu = () => {
    return (
        <nav className={style.menuContainer}>
            <li>
                <Link className={style.menuLink} to='/'>HOME</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/sobre'>SOBRE</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/portfolio'>PORTFÓLIO</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/contato'>CONTATO</Link>
            </li>
        </nav>
    )
}

export default Menu
