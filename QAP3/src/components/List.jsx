import Item from "./Item"
const List = ({data}) => {
    return (
        <div>
            {data.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    );
}

export default List;