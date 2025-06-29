import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const TaskForm = () => {
    const [msg, setMsg] = useState(null)
    const [error, setError] = useState(null)
  const { id } = useParams();

  const handleEditTask = async( e ) => {
    try {
        
        e.preventDefault()
        
        let title = document.getElementById('titleNew').value
        if(title.length === 0){
            title = undefined
        }
        let description = document.getElementById('descriptionNew').value
        if(description.length === 0){
            description = undefined
        }
        let completed = document.getElementById('completedNew').value
        
        let response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, description,completed})
    })
    
    let data = await response.json()
    
    if(data.error){
        return setError(data.error)
    }

    return setMsg(data)
    
} catch (error) {
        return setError(error.message)   
}
  }

  const handleCreateTask = async( e ) => {
    try {
        
        e.preventDefault()
        
        let title = document.getElementById('title').value
        let description = document.getElementById('description').value   
        let response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, description})
    })
    
    let data = await response.json()
    
    if(data.error){
        return setError(data.error)
    }

    return setMsg(data)
    
} catch (error) {
        return setError(error.message)   
}
  }

 return (
  <div className="container mt-4">
    <h1 className="mb-4">Task Form</h1>

    {error && <div className="alert alert-danger">{error}</div>}
    {msg && <div className="alert alert-success">{msg}</div>}

    {id ? (
      <>
        <h3 className="mb-3">Editar Task: {id}</h3>
        <div className="alert alert-warning">
          SOLO INGRESE LAS PROPIEDADES QUE QUIERA EDITAR
        </div>
        <form onSubmit={handleEditTask} className="mb-4">
          <div className="mb-3">
            <label htmlFor="titleNew" className="form-label">
              Ingrese nuevo título
            </label>
            <input type="text" name="title" id="titleNew" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="descriptionNew" className="form-label">
              Ingrese nueva descripción
            </label>
            <input type="text" name="description" id="descriptionNew" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="completedNew" className="form-label">
              ¿Completa?
            </label>
            <select name="completed" id="completedNew" className="form-select">
              <option value="true">Completa</option>
              <option value="false">Incompleta</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Editar
          </button>
        </form>
      </>
    ) : (
      <>
        <h3 className="mb-3">Crear Task</h3>
        <form onSubmit={handleCreateTask} className="mb-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Ingrese título
            </label>
            <input type="text" name="title" id="title" className="form-control" required/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Ingrese descripción
            </label>
            <input type="text" name="description" id="description" className="form-control" required/>
          </div>

          <button type="submit" className="btn btn-success">
            Crear
          </button>
        </form>
      </>
    )}

    <Link to="/" className="btn btn-link">
      Volver al inicio
    </Link>
  </div>
);

};

export default TaskForm;
