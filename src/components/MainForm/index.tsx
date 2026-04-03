import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

// import "../../styles/theme.css";
// import "../../styles/global.css";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          placeholder="Digite a task"
          labelText="task"
          id="task"
          type="text"
        />
      </div>

      <div className="formRow">
        <p>
          Próximo intervalo é de <strong>25 </strong>minutos.
        </p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton color="green" icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
