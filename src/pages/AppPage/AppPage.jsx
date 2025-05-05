import Style from './AppPage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import ListItem from '../../components/ListItem/ListItem'
import { useEffect, useState } from 'react'

function AppPage() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('list')) || [])
    const savedItems = JSON.parse(localStorage.getItem('list'))

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items])

    const addItem = (e) => {
        if (e.key === 'Enter') {
          const value = e.target.value.trim();
          
          if (value && !items.includes(value)) {
            setItems((prevItems) => [...prevItems, value]);
            e.target.value = '';
          } else if (!value) {
            window.alert('Write something!')
          } else {
            window.alert('Already in the list!')
          }
        }
    }

    return (
        <div>
            <Navbar />
            <main className={Style.appDiv}>
                <div className={Style.inputDiv}>
                    <h2>What would you like to add?</h2>
                    <input onKeyDown={addItem} type="text" placeholder="Add here"/>
                </div>
                <div className={Style.listDiv}>
                    {items.map((item) => (
                        <ListItem name={item} key={items.indexOf(item)} onRemove={() => {
                            const newList = items.filter(word => word !== item)
                            setItems(newList)
                        }} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default AppPage