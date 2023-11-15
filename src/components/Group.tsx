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
    <div className="groupframe">
      <h1 className="grouptext" onClick={()=>setShow(!show)}>{groupName}</h1>
      {
        show && cards
      }
    </div>
  );
}
