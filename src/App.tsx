// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Button from "./components/Button";
import Group from "./components/Group";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");

  const setData = (key: string, data: object | string) => {
    console.log(key,data)
    if (typeof data == "object") {
      data = JSON.stringify(data);
    }
    localStorage.setItem(key, data);
  };
  const handleChange = (x: string = "") => {
    setInputVal(x);
  };
  return (
    <>
      <div className="flex w-3/5 mx-auto my-1 py-0 border-2 border-wx-light justify-center items-center">
        <InputBar onChange={handleChange} text={inputVal} />

        {inputVal != "" && (
          <Button onClick={() => setData("ok", inputVal)} text="Add" />
        )}
      </div>
      <div className="groups">
        <Group groupName="Group 1" />
      </div>
    </>
  );
}

export default App;
