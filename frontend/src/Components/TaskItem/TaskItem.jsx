import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const TaskItem = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  let { id } = useParams();
  if (!id) {
    setError("Error en el traslado de id");
  }
  useEffect(() => {
    const getTask = async () => {
      try {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
        let data = await response.json();
        setCargando(false);
        if (data.error) {
          return setError(data.error);
        }

        setTask(data);
      } catch (error) {
        return setError(error.message);
      }
    };

    getTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      let response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      });

      let data = await response.json();

      if (data.error) {
        return setError(data.error);
      }

      navigate("/?msg=Task eliminada correctamente");
    } catch (error) {
      return setError(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Item</h1>
      {cargando ? (
        <h3>Cargando...</h3>
      ) : (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          {task ? (
            <div className="border rounded p-4 mb-3">
              ID: {task.id} <br />
              Titulo: {task.title} <br />
              Descripción: {task.description} <br />
              Estado: {task.completed ? "Completa" : "Incompleta"} <br />
              Fecha de creación: {task.createdAt} <br />
              <Link
                to={`/taskForm/${task.id}`}
                className="btn btn-primary me-2"
              >
                Editar Task
              </Link>
              <button onClick={handleDelete} className="btn btn-outline-danger">
                Eliminar Task
              </button>
            </div>
          ) : (
            <div className="alert alert-warning">
              No se encontro producto con el id ingresado
            </div>
          )}
        </>
      )}
      <Link to={"/"} className="btn btn-primary me-2">
        Volver al inicio
      </Link>
    </div>
  );
};

export default TaskItem;
