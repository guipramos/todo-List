import { Trash } from "phosphor-react";
import "./style.scss";

interface ContentProps {
  content: string;
  handleRemove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const ToDoList = ({
  content,
  handleRemove,
  handleCheck,
  isChecked,
}: ContentProps) => {
  return (
    <div className="checkboxes__item todoList">
      <label className="checkbox style-c">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <div className="checkbox__checkmark"></div>
        <div className={`checkbox__body ${isChecked ? "line-through" : ""}`}>
          {content}
        </div>
      </label>
      <button onClick={handleRemove}>
        <Trash size={18} />
      </button>
    </div>
  );
};

export default ToDoList;
