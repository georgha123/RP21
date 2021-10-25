import './Item.css';

function Item(props) {
  return (
    <div className="itemBox">
      <div className="itemName">{props.name}</div>
      <div className="itemPrice">{props.price}</div>
      <div className="itemCategory">{props.category}</div>
    </div>
  )
}

export default Item;