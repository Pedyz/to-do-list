import Style from './ListItem.module.css'

function ListItem({name, onRemove}) {

    return (
        <div className={Style.itemDiv}>
            <h2>{name}</h2>
            <p onClick={onRemove}>X</p>
        </div>
    )
}

export default ListItem