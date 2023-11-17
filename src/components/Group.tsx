import { useState } from "react";
import Card from "./Card";
interface myProps {
  groupName: string;
}
export default function Group({ groupName }: myProps) {
  const [show,setShow] = useState(false)
  const cards = (
    <>
      <Card title="111" content="Lorem" />
      <Card title="222" content="Lorem" />
      <Card title="333" content="Lorem" />
    </>
  );
  return (
    <div className="grid grid-cols-3 gap-2 p-2 cursor-pointer">
      <h1 className="text-lg text-wx-light col-span-3 font-bold" onClick={()=>setShow(!show)}>{groupName}</h1>
      {
        show && cards
      }
    </div>
  );
}
