import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from '../Components/TaskList/TaskList'
import TaskItem from '../Components/TaskItem/TaskItem'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TaskList/>}/>
                <Route path='/:id' element={<TaskItem/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router