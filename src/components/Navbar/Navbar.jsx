import Style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className={Style.Nav}>
            <ul>
                <NavLink to='/' className={Style.navItem} >Home</NavLink>
                <NavLink to='/how-to-use' className={Style.navItem} >How to use</NavLink>
                <NavLink to='/app' className={Style.navItem} >App</NavLink>
            </ul>
        </div>
    )
}

export default Navbar