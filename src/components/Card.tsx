import { search } from "../module/storeData";

interface myProps {
  title: string;
  content: string;
}
type content =  {
  content_id? : number;
  content? : string;
}
function Card({ title, content }: myProps) {
  const datas : content[] = search('data','content_id',content)
  return (
    <div
      className="border text-wx-light border-wx-light w-full p-2 cursor-pointer"
      onClick={() => alert(title)}
    >
      <h1 className="font-bold text-base md:text-lg">{title}</h1>
      <span className="font text-sm md:text-base">{datas[0].content}</span>
    </div>
  );
}

export default Card;
