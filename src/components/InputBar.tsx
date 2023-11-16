interface InputProps {
  onChange: (args : string) => void;
  text : string;
}
const InputBar = ({onChange,text} : InputProps) => {
  return (
    <>
      <input
        className="input"
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={text}
        placeholder="Add new notes ..."
      />
    </>
  );
};
export default InputBar;