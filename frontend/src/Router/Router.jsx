import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from '../Components/TaskList/TaskList'
import TaskItem from '../Components/TaskItem/TaskItem'
import TaskForm from '../Components/TaskForm/TaskForm'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TaskList/>}/>
                <Route path='/taskForm' element={<TaskForm/>}/>
                <Route path='/taskForm/:id' element={<TaskForm/>}/>
                <Route path='/:id' element={<TaskItem/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router