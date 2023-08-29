import { IconButton ,ButtonGroup, Icon,Button} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {FaRegComment,FaRegHeart,FaRetweet,FaCircleUser} from "react-icons/fa6"
import {FaRegEdit,FaUserCircle} from 'react-icons/fa'
import '../App.css'


export const Task= (props)=>{
    const curDate=new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date=`${monthNames[curDate.getMonth()]} ${curDate.getDate()}, ${curDate.getFullYear()} ${curDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
 return(
    <div style={{display: 'block'}}>
        <div class='avatar' style={{alignItems:'left',justifyContent: 'left',textAlign: 'left',display : 'flex'}}>
            <IconButton sx={{float: 'left' }}><FaUserCircle size="1.5em"/></IconButton>
            <h1 style={{fontSize: '1.4em',fontWeight:'500',paddingTop: '10px'}}>Dhruv Hatkar</h1>
            <span style={{paddingTop: '15px',paddingLeft:'5px'}}>@Slipstream</span>
            <br/>
        </div>
        <div >
        <h1 style={{marginTop: '10px',fontSize: '1.2em',textAlign:'left',paddingLeft: '10px'}}>{props.taskName}</h1>
        </div>
        <div className='task' style={{justifyContent: 'space-between'}}>
            <div className='buttongroup1'><ButtonGroup spacing="0.5rem" aria-label="spacing button group" style={{marginRight: '40%'}}>
             <IconButton color='primary'style={{boxShadow: "none"}} elevation={0} disableElevation={true}><FaRegEdit/></IconButton>
             <IconButton  color='primary'style={{boxShadow: "none"}} elevation={0} onHover={{color:'red'}} onClick={() => props.deleteTask(props.id)} ><DeleteOutlinedIcon/></IconButton>
            </ButtonGroup>
            </div>
            <div><ButtonGroup spacing="0.5rem" aria-label="spacing button group"style={{position: 'relative',float:'left'}}>
                <IconButton><FaRegComment/></IconButton>
                <IconButton ><FaRegHeart/></IconButton>
                <IconButton><FaRetweet/></IconButton>
                </ButtonGroup>
            </div>
            <div style={{marginRight: '5px'}}>
                <p>{date}</p>
            </div>
        </div>
    </div>
    )
}
