import ListItem from "./ListItem"
const DogList = ({data, func}) => {
    return (
        <select id="dog_breeds">
            {data.map((item) => (
                <ListItem item={item} key={item}/>
            ))}
        </select>
    );
}

export default DogList;