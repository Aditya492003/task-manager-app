import { Route, Routes } from 'react-router-dom'
import Addtask from './pages/Addtask'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Profile from './pages/Profile'
import Task from './pages/Task'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/layout' element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='task' element={<Task/>}/>
        <Route path='addtask' element={<Addtask/>}/>
        <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App