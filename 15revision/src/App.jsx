import { useState, useEffect } from "react";

/* =====================================
   TASK 6: Child Component (Props)
===================================== */
function Student({ name, marks }) {
  return (
    <p>{name} scored {marks}</p>
  );
}

/* =====================================
   MAIN APP
===================================== */
function App() {

  /* ===== TASK 1: Counter ===== */
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  /* ===== TASK 2: Toggle Text ===== */
  const [toggle, setToggle] = useState(true);

  /* ===== TASK 3: Input ===== */
  const [text, setText] = useState("");

  /* ===== TASK 4: Array + map ===== */
  const [students, setStudents] = useState(["Alex", "Sara"]);

  function addStudent() {
    const newName = "John";
    setStudents([...students, newName]);
  }

  /* ===== TASK 5: Object ===== */
  const [person, setPerson] = useState({
    name: "Alex",
    age: 22
  });

  function increaseAge() {
    setPerson({ ...person, age: person.age + 1 });
  }

  /* ===== TASK 7: Form ===== */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Name required");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    alert("Form submitted");
    setName("");
    setEmail("");
  }

  /* ===== TASK 8: useEffect ===== */
  useEffect(() => {
    console.log("Rendered");
  });

  useEffect(() => {
    console.log("Mounted");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  /* ===== TASK 9: Login Toggle ===== */
  const [loggedIn, setLoggedIn] = useState(false);

  /* ===== TASK 10: Mini App ===== */
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      text: task,
      completed: false
    };

    setTaskList([...taskList, newTask]);
    setTask("");
  }

  function deleteTask(index) {
    const updated = taskList.filter((_, i) => i !== index);
    setTaskList(updated);
  }

  function toggleTask(index) {
    const updated = taskList.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTaskList(updated);
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>React Revision Lab Solution</h1>

      {/* ===== TASK 1 ===== */}
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      {count > 5 && <p>High Value</p>}

      <hr />

      {/* ===== TASK 2 ===== */}
      <h2>Toggle Text</h2>
      <button onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <p>
        {toggle ? "Welcome Student" : "Goodbye Student"}
      </p>

      <hr />

      {/* ===== TASK 3 ===== */}
      <h2>Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        {text === "" ? "No input" : text}
      </p>

      <hr />

      {/* ===== TASK 4 ===== */}
      <h2>Students List</h2>
      <button onClick={addStudent}>Add Student</button>

      {students.map((s, i) => (
        <p key={i}>{s}</p>
      ))}

      <hr />

      {/* ===== TASK 5 ===== */}
      <h2>Object</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={increaseAge}>Increase Age</button>

      <hr />

      {/* ===== TASK 6 ===== */}
      <h2>Props</h2>
      <Student name="Alex" marks={90} />
      <Student name="Sara" marks={85} />

      <hr />

      {/* ===== TASK 7 ===== */}
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* ===== TASK 8 ===== */}
      <h2>useEffect Logs</h2>
      <p>Check console</p>

      <hr />

      {/* ===== TASK 9 ===== */}
      <h2>Login Toggle</h2>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        Login / Logout
      </button>

      <p>
        {loggedIn ? "Welcome Back" : "Please Login"}
      </p>

      <hr />

      {/* ===== TASK 10 ===== */}
      <h2>Todo App</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {taskList.length === 0 && <p>No tasks available</p>}

      {taskList.map((t, i) => (
        <div key={i}>
          <span
            style={{
              textDecoration: t.completed ? "line-through" : "none"
            }}
          >
            {t.text}
          </span>

          <button onClick={() => toggleTask(i)}>Complete</button>
          <button onClick={() => deleteTask(i)}>Delete</button>
        </div>
      ))}

    </div>
  );
}

export default App;