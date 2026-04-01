import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
        
      ))}
    </div>
  );
}

export default App;