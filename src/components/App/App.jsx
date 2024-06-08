import TodoList from "../TodoList/TodoList";
import TodoInput from "../TodoInput/TodoInput";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Vazifalar Ro&apos;yxati</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
