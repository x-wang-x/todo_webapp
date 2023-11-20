import {useState,Suspense,lazy } from "react";

interface myProps {
  id: number;
  groupName: string;
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
export default function Group({ id, groupName }: myProps) {
  const [show, setShow] = useState(false);
  const CardList = lazy(() => import('./CardList'));
  const x = (
    <Suspense fallback={<Loading />}><CardList id={id}/></Suspense>
  )
  // console.log(datas)
  return (
    <div className="grid grid-cols-3 gap-2 p-2 cursor-pointer">
      <h1
        className="text-lg text-wx-light col-span-3 font-bold"
        onClick={() => setShow(!show)}
      >
        {groupName}
      </h1>
      {show && x}
    </div>
  );
}
