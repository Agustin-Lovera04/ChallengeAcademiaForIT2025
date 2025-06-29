import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
    const queryParams = new URLSearchParams(location.search)
    const msg = queryParams.get('msg')

  useEffect(() => {
    const getTasks = async () => {
      try {
        let response = await fetch(import.meta.env.VITE_API_URL);
        let data = await response.json();
       
        setCargando(false);
        if (data.error) {
          return setError(data.error);
        }
        return setTasks(data);
      } catch (error) {
        return setError(error.message);
      }
    };
    getTasks();
  }, []);

return (
  <div className="container text-center mt-4">
    <h1 className="mb-4">TaskList</h1>
    {cargando ? (
      <h3>Cargando...</h3>
    ) : (
      <>
        {error && <div className="alert alert-danger">{error}</div>}
        {msg && <div className="alert alert-success">{msg}</div>}
        {tasks && tasks.length > 0 ? (
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
            {tasks.map((task) => (
              <li key={task.id} className="border rounded p-3 text-start">
                Titulo: {task.title} <br />
                Descripción: {task.description} <br />
                Estado: {task.completed ? "Completa" : "Incompleta"} <br />
                <Link className="btn btn-outline-primary mt-2" to={`/${task.id}`}>
                  Ver Detalle
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="alert alert-warning">No hay Task existentes</div>
        )}
      </>
    )}
    <Link to={'/taskForm'} className="btn btn-outline-primary mt-4">
      Crear Task
    </Link>
  </div>
);

};

export default TaskList;
