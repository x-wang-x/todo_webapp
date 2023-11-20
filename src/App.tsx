// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Group from "./components/Group";
import { useState, Fragment } from "react";
import { getData } from "./module/storeData";

const datas = getData("groups");
const groups = (
  <>
    {datas.map((item, idx: number) => (
      <Fragment key={idx}>
        <Group id={idx} groupName={item["group_name"]} />
      </Fragment>
    ))}
  </>
);

function App() {
  const [inputVal, setInputVal] = useState("");
  // const setData = (key: string, data: object | string) => {
  //   console.log(key, data);
  //   if (typeof data == "object") {
  //     data = JSON.stringify(data);
  //   }
  //   localStorage.setItem(key, data);
  // };
  const handleChange = (x: string = "") => {
    setInputVal(x);
  };
  return (
    <>
      <div className="flex flex-wrap w-3/5 mx-auto my-1 py-0 border-2 border-wx-light justify-between relative">
        <InputBar
          onChange={handleChange}
          text={inputVal}
          onClick={() => alert("ok")}
        />
      </div>
      <div className="text-wx-light h-fit">
        {inputVal != "" && (
          <div className="bg-wx-light basis-full text-wx-dark mx-auto w-3/5 z-10 left-0 right-0 absolute">
            Searching .... 
          </div>
        )}
        {groups}
      </div>
    </>
  );
}

export default App;
