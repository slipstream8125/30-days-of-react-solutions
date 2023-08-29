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
  const [rem,setnewRem]=useState(250);
  const handleChange=(event)=>{
    setNewTask(event.target.value);
    setnewRem(250-event.target.value.length);
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
          <Card variant='outlined'>
            <div style={{padding: '2em'}}>
        <TextField id="outlined-basic" sx={{width : '50%',paddingTop:'2%'}} onChange={handleChange} placeholder='Tweet Something'/>{' '}
          <Button  size="lg"  variant='contained' onClick={addTask} sx={{padding: '1em',backgroundColor: 'DodgerBlue',borderRadius: '30px',marginTop:'2%',marginLeft:'20px'} }>Add Tweet</Button>
          <p align='left'style={{marginLeft:'67%'}}>{rem}</p>
          </div>
          </Card>
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
