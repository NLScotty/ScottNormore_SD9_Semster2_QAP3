import { useState, useEffect } from "react";
import './App.css';
import DogList from "./components/DogList"

function App() {
  async function fetchDogs(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    setList(data)
  }

  async function fetchImages(breed, number){
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${number}`)
    const data = await response.json()
    setImages(data)
  }

  useEffect(() =>{
    fetchDogs()
  },[])

  const [dogList, setList] = useState([])
  const [dogImages, setImages] = useState([])
  
  return (
    <div className="App">
      <DogList data = {dogList.length !== 0 ? Object.keys(dogList.message) : []}/>
    </div>
  );
}

export default App;
