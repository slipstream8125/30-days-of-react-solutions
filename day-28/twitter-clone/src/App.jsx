import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Task } from './components/Task'
import { TextField,Card,Box,Button} from '@mui/material'
// import { Text} from '@mui/joy'
function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask]=useState("");

  const handleChange=(event)=>{
    setNewTask(event.target.value);
  };
  const addTask=()=>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList,task]);
  };
  const deleteTask=(id)=>{
    const newTodoList= todoList.filter((task)=>{
      if(task.id===id){
        return false;
      }
      else{
        return true;
      }
    })
    setTodoList(newTodoList)
  };
  return (
      <div className="App">
        <div className='addTask'>
        <TextField id="outlined-basic" sx={{width : '50%'}} onChange={handleChange}/>{' '}
          <Button  size="lg"  variant='contained' onClick={addTask} sx={{padding: '1em'} }>Add Task</Button>
        </div>
        <div>
        <Box>
          {todoList.map((task)=>{
            return <Card variant="outlined"><Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/></Card>
          })}
        </Box>
        </div>
      </div>
  )
}

export default App
