interface myProps {
  title : string ;
  content : string ;
}
function Card({title,content} : myProps) {
  return (
    <div className="border-2 text-wx-light border-wx-light w-full p-2 cursor-pointer" onClick={() => window.location.replace("google.com")}>
      <h1 className="font-bold text-lg">{title}</h1>
      <span className="font text-base">{content}</span>
    </div>
  );
}

export default Card;
