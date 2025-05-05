import Style from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const startApp = () => {
        navigate('/app')
    }

    return (
        <div>
            <Navbar /> 
            <main className={Style.mainDiv}>
                <div className={Style.textContainer}>
                    <h1 className={Style.title}>TO DO LIST</h1>
                    <h3>This is a simple To-Do List application built to practice fundamental web development concepts. It allows users to add, mark as completed, and remove tasks, helping organize daily activities quickly and efficiently.</h3>
                </div>
                <button onClick={startApp} className={Style.startBtn}>Start</button>
            </main>
        </div>
    )
}

export default Home