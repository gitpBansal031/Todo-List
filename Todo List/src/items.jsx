import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Items() {
    let [tasks, settasks] = useState([]);
    let [val, newval] = useState("");
    function typing(event) {
        newval(event.target.value);
    }
    function add() {
        settasks([...tasks, { task: val, key: uuidv4() }]);
    }
    function del(id) {
        tasks=tasks.filter((task) => task.key != id );
        settasks(tasks);
    }
    return (
        <div>
            <input type="Enter task" value={val} onChange={typing} />
            <br /><br />
            <button onClick={add}>Add task</button>
            <br /><br /> <hr />
            <h4>All tasks to do:-</h4>
            <ul>
                {tasks.map((task) => (
                    <div>
                        <li key={task.key}>{task.task} &nbsp; &nbsp; <button onClick={() => del(task.key)}>Delete</button></li>
                        <br />
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default Items