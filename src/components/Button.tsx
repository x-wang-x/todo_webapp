interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text : string;
}

const Button = ({onClick,text} : ButtonProps) => {
  return (
    <button onClick={onClick} className="p-1 border-none text-wx-light hover:bg-wx-light hover:text-wx-dark">{text}</button>
  )
}

export default Button