// import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import "./App.css";
import Group from "./components/Group";
import { useState, Fragment, useEffect, useRef } from "react";
import { getData } from "./module/storeData";
import Modal from "./components/Modal";

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
    show(overlay)
    targetEl?.classList.remove("hidden");
  };
  const closeModal = () => {
    targetEl?.classList.add("hidden");
    hide(overlay)
  };
  return (
    <>
      <div
        ref={overlay}
        className="fixed hidden w-full h-full top-0 bottom-0 left-0 right-0 z-0 bg-wx-light bg-opacity-50"
      ></div>
      <Modal
        id={"defaultModal"}
        value={{name : inputVal}}
        closeModalFunction={closeModal}
      />
      <div className="w-4/5 lg:w-3/5 mx-auto mb-0 mt-5 border-2 border-wx-light justify-between z-10 relative">
        <InputBar onChange={handleChange} onFocus={setFocus} text={inputVal} />
      </div>
      <div className="text-wx-light h-fit">
        <div
          ref={searchBox}
          className="w-4/5 lg:w-3/5 bg-wx-dark text-wx-light border-t-0 border-2 my-0 border-wx-light basis-full hidden mx-auto z-10 left-0 right-0 absolute"
        >
          <p
            className="cursor-pointer px-2 py-1 hover:bg-wx-light hover:text-wx-dark m-0"
            onClick={() => {
              openModal();
            }}
          >
            Add new
          </p>
        </div>
        {groups}
      </div>
    </>
  );
}

export default App;
