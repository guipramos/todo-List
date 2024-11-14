import "./style.scss";

interface taskProps {
  taskCreate: number;
  taskFinish: number;
}

const TaskSummary = ({ taskCreate, taskFinish }: taskProps) => {
  return (
    <div className="task-summary">
      <div className="task-summary-created style-default">
        <span>Tarefas criadas</span>
        <span className="task-summary-count">{taskCreate}</span>
      </div>
      <div className="task-summary-completed style-default">
        <span>Concluídas</span>
        <span className="task-summary-count">{`${taskFinish} de ${taskCreate}`}</span>
      </div>
    </div>
  );
};

export default TaskSummary;
