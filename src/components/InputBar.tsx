import Button from "./Button";

interface InputProps {
  onChange: (args: string) => void;
  text: string;
  onClick : () => void;
}
const InputBar = ({ onChange, text , onClick}: InputProps) => {
  return (
    <>
      <input
        className="flex-1 ml-2 my-1 bg-wx-dark text-wx-light focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={text}
        placeholder="Add new notes ..."
      />
      {text != "" && (
        <Button onClick={() => onClick()} text="Add" />
      )}
    </>
  );
};
export default InputBar;
