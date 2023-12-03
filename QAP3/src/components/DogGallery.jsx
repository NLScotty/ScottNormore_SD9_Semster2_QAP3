import Image from "./Image"
const DogList = ({data}) => {
    return (
        <div className="Dog_Gallery">
            {data.map((item) => (
                <Image item={item} key={item}/>
            ))}
        </div>
    );
}

export default DogList;