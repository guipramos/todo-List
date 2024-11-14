import "./style.scss";
import { PlusCircle } from "phosphor-react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
}

const AddItemInput = ({
  value,
  onChange,
  placeholder,
  onClick,
}: InputProps) => {
  return (
    <div className="input-add">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <button onClick={onClick}>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
};

export default AddItemInput;
