const Item = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <hr></hr>
        </div>
    );
}

export default Item;