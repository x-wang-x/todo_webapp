interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text : string;
}

const Button = ({onClick,text} : ButtonProps) => {
  return (
    <button onClick={onClick} className="btn">{text}</button>
  )
}

export default Button