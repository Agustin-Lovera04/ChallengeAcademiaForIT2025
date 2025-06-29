import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        let response = await fetch("http://localhost:3000/api/tasks");
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
    <div className="container-fluid text-center">
      <h1>TaskList</h1>
      {cargando ? (
        <h3>Cargando...</h3>
      ) : (
        <>
          {error && <div className="alert alert-danger"> {error} </div>}
          {tasks && tasks.length > 0 ? (
              <ul className="d-flex justify-content-center">
                {tasks.map((task) => (
                  <li key={task.id}>
                    {task.title} <br />
                    {task.description} <br />
                    {task.completed}
                    <Link  className='btn btn-outline-primary' to={`/${task.id}`}>Ver Detalle</Link>
                  </li>
              ))}
              </ul>
          ) : (
            <>
              <div className="alert alert-warning">No hay Task existentes</div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TaskList;
