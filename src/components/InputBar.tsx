interface InputProps {
  onChange: (args : string) => void;
  text : string;
}
const InputBar = ({onChange,text} : InputProps) => {
  return (
    <>
      <input
        className="flex-grow ml-2 my-1 bg-wx-dark text-wx-light focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={text}
        placeholder="Add new notes ..."
      />
    </>
  );
};
export default InputBar;