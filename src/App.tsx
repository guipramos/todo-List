import Header from "./components/Header/Header";
import AddItemInput from "./components/AddItemInput/AddItemInput";
import TaskSummary from "./components/TaskSummary/TaskSummary";
import { ChangeEvent, useState } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import ClipboardSVG from "./components/ClipboardSVG/ClipboardSVG";

const App = () => {
  const [addTask, setAddTask] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setAddTask(event.target.value);
  };

  const addTaskInList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setList((prevList) => [...prevList, addTask]);
    setAddTask("");
  };

  const handleRemove = (index: number) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));

    setCheckedItems((prevChecked) => {
      const updatedChecked = { ...prevChecked };
      delete updatedChecked[index];
      return updatedChecked;
    });
  };

  const handleCheck = (index: number) => {
    setCheckedItems((prevChecked) => ({
      ...prevChecked,
      [index]: !prevChecked[index],
    }));
  };

  return (
    <>
      <Header />
      <div className="container input-container">
        <AddItemInput
          value={addTask}
          onChange={onChange}
          placeholder="Adicione uma nova tarefa"
          onClick={addTaskInList}
        />
        <TaskSummary taskCreate={list.length} taskFinish={checkedCount} />
        {list.length ? (
          <>
            <div className="task-list">
              {list.map((item, index) => {
                return (
                  <ToDoList
                    content={item}
                    handleRemove={() => handleRemove(index)}
                    isChecked={!!checkedItems[index]}
                    handleCheck={() => handleCheck(index)}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="empty-list">
            <div className="container">
              <div className="empty-list-content">
                <ClipboardSVG />
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
