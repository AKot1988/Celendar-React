import { FC, useState } from "react";
import { UniversalModal, Task } from "../../components";

const TaskPage: FC = () => {
  const [visibleExtendedTask, setVisibleExtendedTask] = useState(true);
  return (
    <div>
      <UniversalModal content ={<Task/>} title={"Інфо про таску розширене"} setVisible={setVisibleExtendedTask} visible={visibleExtendedTask}/>
    </div>
  );
}

export default TaskPage;