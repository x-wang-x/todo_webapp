interface InputProps {
  onChange: (args: string) => void;
  text: string;
  onFocus : (args : boolean) => void;
}
const InputBar = ({ onChange, text , onFocus}: InputProps) => {
  return (
    <>
      <input
        className="w-full bg-wx-dark text-wx-light pl-2 py-1 border border-wx-light focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onFocus(false)}
        onFocus={() => onFocus(true)}
        type="text"
        value={text}
        placeholder="Add new notes ..."
      />
    </>
  );
};
export default InputBar;
