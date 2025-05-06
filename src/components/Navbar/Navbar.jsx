import Style from './Navbar.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import menuIcon from './menuicon.png'
import { useState, useEffect} from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleSideBar = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        // Fecha o menu automaticamente sempre que a rota muda
        setIsOpen(false)
    }, [location.pathname])

    return (
        <div className={Style.Nav}>
            <img src={menuIcon} className={Style.menuIcon} onClick={toggleSideBar} />
            <div className={`${Style.sideBar} ${isOpen ? Style.open : ''}`}>
                <ul className={Style.sideBarList} > 
                    <NavLink to='/' className={Style.sideItem} >Home</NavLink>
                    <NavLink to='/how-to-use' className={Style.sideItem} >How to use</NavLink>
                    <NavLink to='/app' className={Style.sideItem} >App</NavLink>
                </ul>
            </div>
            <ul className={Style.navList} > 
                <NavLink to='/' className={Style.navItem} >Home</NavLink>
                <NavLink to='/how-to-use' className={Style.navItem} >How to use</NavLink>
                <NavLink to='/app' className={Style.navItem} >App</NavLink>
            </ul>
        </div>
    )
}

export default Navbar