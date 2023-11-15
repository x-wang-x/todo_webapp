// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Button from "./components/Button";
import Group from "./components/Group";
import Card from "./components/Card";

function App() {
  // function dododo(xx:number) {
  //   console.log(xx)
  // }
  // const [items,setItems] = useState(0)
  // useEffect(()=> {
  //   localStorage.setItem('items',JSON.stringify(items))
  //   dododo(items)
  // }, [items])
  function handleClick() {
    alert('cuy')
  }
  return (
    <>
      <div className="inputform">
        <InputBar />
        <Button onClick={handleClick} text="Add"/>
      </div>
      <div className="groups">
      <Group groupName="Group 1" />
      <Group groupName="Group 2"  />
      <Group groupName="Group 3"  />
      </div>
    </>
  );
}

export default App;
