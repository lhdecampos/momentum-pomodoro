import { useContext } from "react";
import style from "./styles.module.css";
import { TaskContext } from "../../contexts/TaskContext";

export function CountDown() {
  const taskContext = useContext(TaskContext);
  console.log(taskContext);
  return <div className={`${style.container}`}>00:00</div>;
}
