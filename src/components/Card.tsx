interface myProps {
  title : string ;
  content : string ;
}
function Card({title,content} : myProps) {
  return (
    <div className="card" onClick={() => window.location.replace("google.com")}>
      <h1 className="cardtitle">{title}</h1>
      <span className="cardcontent">{content}</span>
    </div>
  );
}

export default Card;
