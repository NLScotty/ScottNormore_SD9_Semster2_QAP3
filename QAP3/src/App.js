import { useState, useEffect } from "react";
import './App.css';
import List from "./components/List"

function App() {
  async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setList(data)
  }

  useEffect(() =>{
    fetchData()
  },[])

  const [listItems, setList] = useState([])

  //fetchData()

  console.log(listItems)

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <List data = {listItems}/>
    </div>
  );
}

export default App;
