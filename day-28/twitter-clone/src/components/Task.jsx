import {Button} from '@mui/joy'
import DeleteIcon from '@mui/icons-material/Delete';
export const Task= (props)=>(
    <div className='task'>
        <h1>{props.taskName}</h1>
        <Button onClick={() => props.deleteTask(props.id)}><DeleteIcon/></Button>
    </div>
)

