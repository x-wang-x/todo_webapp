// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Group from "./components/Group";
import { useState, Fragment, useEffect, useRef } from "react";
import { getData } from "./module/storeData";
import Modal from "./components/Modal";

const datas = getData("groups");
console.log(datas)
const groups = (
  <>
    {datas.map((item, idx: number) => (
      <Fragment key={idx}>
        <Group id={item["group_id"]} groupName={item["group_name"]} />
      </Fragment>
    ))}
  </>
);

function App() {
  const [inputVal, setInputVal] = useState("");
  const [focus, setFocus] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const searchBox = useRef<HTMLDivElement>(null);

  const hide = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.classList.remove("block");
    ref.current?.classList.add("hidden");
  };
  const show = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.classList.remove("hidden");
    ref.current?.classList.add("block");
  };
  useEffect(() => {
    if (focus) {
      if (inputVal != "") {
        show(searchBox);
      }
      show(overlay);
    } else {
      hide(overlay);
      setTimeout(() => {
        hide(searchBox);
      }, 1000); //if input unfocus searchbox close immediately, so give 1 second to searchbox appear before close to give user chance to click
    }
  }, [focus, inputVal]);
  const handleChange = (x: string = "") => {
    setInputVal(x);
  };
  const targetEl = document.getElementById("defaultModal");
  // open and hide modaal
  const openModal = () => {
    show(overlay);
    targetEl?.classList.remove("hidden");
  };
  const closeModal = () => {
    targetEl?.classList.add("hidden");
    hide(overlay);
  };
  return (
    <>
      <div
        ref={overlay}
        className="absolute hidden w-full h-full top-0 bottom-0 left-0 right-0 z-0 bg-wx-light bg-opacity-50"
      ></div>
      <Modal
        id={"defaultModal"}
        value={{ name: inputVal }}
        closeModalFunction={closeModal}
      />
      <div className="w-4/5 lg:w-3/5 mx-auto mb-0 mt-3 z-10 left-0 right-0 border-b-2 pb-3 border-wx-light relative">
        <InputBar onChange={handleChange} onFocus={setFocus} text={inputVal} />
        <div
          ref={searchBox}
          className="w-full bg-wx-dark text-wx-light my-0 border-wx-light hidden border border-t-0 z-10 right-0 -left-0 absolute"
        >
          <p
            className="cursor-pointer pl-2 py-1 hover:bg-wx-light hover:text-wx-dark m-0"
            onClick={() => {
              openModal();
            }}
          >
            Example 1
          </p>
          <p
            className="cursor-pointer pl-2 py-1 hover:bg-wx-light hover:text-wx-dark m-0"
            onClick={() => {
              openModal();
            }}
          >
            Example 2
          </p>
          <p
            className="cursor-pointer pl-2 py-1 hover:bg-wx-light hover:text-wx-dark m-0"
            onClick={() => {
              openModal();
            }}
          >
            Example 3
          </p>
          <p
            className="cursor-pointer pl-2 py-1 hover:bg-wx-light hover:text-wx-dark m-0"
            onClick={() => {
              openModal();
            }}
          >
            Add new
          </p>
        </div>
      </div>
      <div className="relative text-wx-light h-fit mt-3 mx-0 px-3">
        {groups}
      </div>
    </>
  );
}

export default App;
