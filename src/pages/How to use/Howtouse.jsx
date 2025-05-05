import Style from './Howtouse.module.css'
import Navbar from '../../components/Navbar/Navbar'

function Howtouse () {
    return (
        <div>
            <Navbar />
            <main className={Style.mainDiv}>
                <h2>How to use To Do List</h2>
                <ol>
                    <li>Enter the <a href='/app'>app.</a></li>
                    <li>Write and add the stuff you would like to do.</li>
                    <li>Organize it by adding any ammount of things to do, or remove them.</li>
                </ol>
            </main>
        </div>
    )
}

export default Howtouse