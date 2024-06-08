import notFound from "../../assets/nottodo.svg";

function NotTodo() {
  return (
    <div className="not-list">
      <img src={notFound} alt="not-found" />
      <h2>Not Todos yet</h2>
    </div>
  );
}

export default NotTodo;
