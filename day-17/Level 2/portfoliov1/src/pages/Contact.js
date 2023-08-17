import Button from '@mui/material-next/Button';
export const Contact=()=>{
    return (
            <div class="maindiv bg-slate-900">
                <h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-6xl sm:tracking-tight">Contact : </h1>
                <br/>
                <h2 class="font-bold sm:truncate sm:text-3xl sm:tracking-tight"> You can contact me on : </h2>
                <br/>
                <Button variant="outlined" sx={{color : '#1976D2',borderColor: '#1976D2',marginRight:"20px",fontSize: '1.2rem'}}><a href="www.linkedin.com/in/dhruv-hatkar">LinkedIn</a></Button>{' '}
                <Button variant="outlined" sx={{color : '#1976D2',borderColor: '#1976D2',marginRight:"20px",fontSize: '1.2rem' }}><a href="">GitHub</a></Button>
                <Button variant="outlined" sx={{color : '#1976D2',borderColor: '#1976D2',marginRight:"20px",fontSize: '1.2rem' }}>Linktree</Button>
                {/* <img class="hobbies" src='https://www.goodwood.com/globalassets/.road--racing/race/modern/2022/3-march/f1-2022-calendar/2022-f1-calendar-drivers-championship-standings-zak-mauger-mi-21032022.jpg?crop=(0,135,2600,1598)&width=1600'></img> */}
                
            </div>
    )
}