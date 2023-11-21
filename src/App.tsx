// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Group from "./components/Group";
import { useState, Fragment, useEffect, useRef } from "react";
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
  const [focus, setFocus] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const searchBox = useRef<HTMLDivElement>(null);
  // const setData = (key: string, data: object | string) => {
  //   console.log(key, data);
  //   if (typeof data == "object") {
  //     data = JSON.stringify(data);
  //   }
  //   localStorage.setItem(key, data);
  // };
  useEffect(() => {
    if (focus) {
      searchBox.current?.classList.toggle("hidden");
      searchBox.current?.classList.toggle("block");

      overlay.current?.classList.toggle("hidden");
      overlay.current?.classList.toggle("block");
    } else {
      searchBox.current?.classList.toggle("block");
      searchBox.current?.classList.toggle("hidden");

      overlay.current?.classList.toggle("block");
      overlay.current?.classList.toggle("hidden");
    }
  }, [focus]);
  const handleChange = (x: string = "") => {
    setInputVal(x);
  };
  return (
    <>
      <div
        ref={overlay}
        className="fixed hidden w-full h-full top-0 bottom-0 left-0 right-0 z-0 bg-wx-light bg-opacity-50"
      ></div>
      <div className="flex flex-wrap w-3/5 mx-auto my-1 py-0 border-2 border-wx-light justify-between z-10 relative">
        <InputBar
          onChange={handleChange}
          onFocus={setFocus}
          text={inputVal}
          onClick={() => alert("ok")}
        />
      </div>
      <div className="text-wx-light h-fit">
        {/* {inputVal != "" && (
        )} */}
        <div ref={searchBox} className="bg-wx-dark p-2 text-wx-light border-2 border-wx-light basis-full hidden text-wx-dark mx-auto w-3/5 z-10 left-0 right-0 absolute">
          Add new entries
        </div>
        {groups}
      </div>
    </>
  );
}

export default App;
