import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TaskItem = () => {
    const [task, setTask] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    let {id} = useParams()
    if(!id){
        setError('Error en el traslado de id')
    }
    useEffect(()=> {
        const getTask = async() => {
            try {
                
                let response = await fetch(`http://localhost:3000/api/tasks/${id}`)
                let data = await response.json()
                setCargando(false)     
                if(data.error){
                    return setError(data.error)
                }
                
                setTask(data)
            } catch (error) {
                return setError(error.message)
            }
        }

        getTask()
    },[id])
  return (
    <div className='container-fluid'>
        {cargando ? <h3>Cargando...</h3> : 
        <>
        {error && <div className='alert alert-danger'>{error} </div>}
        {task ? 
        <div className=''>
            {task.id} <br />
            {task.title} <br />
            {task.description} <br />
            {task.completed} <br />
            {task.createdAt}
        </div>
        :
        <div className='alert alert-warning'>
            No se encontro producto con el id ingresado
        </div> }
        </> }
    </div>
  )
}

export default TaskItem