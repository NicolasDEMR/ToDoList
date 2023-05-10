import { useState, useEffect } from "react";
import "./App.css";
import Input from "../input";
function App() {
  const [newTask, setNewTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewTask(e.target.value);
  };
  const handleButton = () => {
    setTasklist([...tasklist, newTask]);
  };
  const listing = () => {
    if (tasklist.length >= 0) {
      return tasklist.map((item, key) => {
        return <Input key={key} item={item} />;
      });
    }
  };

  useEffect(() => {
    console.log("La valeur de like a changé", tasklist);
  }, [setTasklist, tasklist]);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleButton}>Valider</button>
      <ul>{listing()}</ul>
    </div>
  );
}

export default App;
