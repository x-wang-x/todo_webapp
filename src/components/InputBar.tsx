import Button from "./Button";

interface InputProps {
  onChange: (args: string) => void;
  text: string;
  onClick : () => void;
  onFocus : (args : boolean) => void;
}
const InputBar = ({ onChange, text , onClick, onFocus}: InputProps) => {
  return (
    <>
      <input
        className="flex-1 w-0 pl-2 py-1 bg-wx-dark text-wx-light focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onFocus(false)}
        onFocus={() => onFocus(true)}
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
