// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Button from "./components/Button";
import Group from "./components/Group";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react"

function App() {
  const key = "ok"
  const [inputVal,setInputVal] = useState('')
  const [item, setItem] = useState(() => {
    const saved = localStorage.getItem(key) || '';
    return saved || "";
  });
  useLocalStorage(key,item)
  const handleChange = (x : string = "") => {
    setInputVal(x);
   };
  return (
    <>
      <div className="flex w-3/5 mx-auto my-1 py-0 border-2 border-wx-light justify-center items-center">
        <InputBar onChange={handleChange} text={inputVal}/>
        
        { inputVal != '' && <Button onClick={()=>setItem(inputVal)} text="Add" /> }
      </div>
      <div className="groups">
        <Group groupName="Group 1" />
        <Group groupName="Group 2" />
        <Group groupName="Group 3" />
      </div>
    </>
  );
}

export default App;
