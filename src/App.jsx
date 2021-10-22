import React from 'react'
import { Button, Box} from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) =>({
    root:{
        color:"white",
        bgColor: 'black',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: 0
    }
}))

export const App = () => {

    const classes = useStyles()

    return (
        <Box sx={{'& button': {m:12}}}>
            <div>
            <Button 
            startIcon = {<PersonAdd/>}
            className={classes.root}
            >Ingrese Usuario</Button>
        </div>
        </Box> 
    )
}


export default App;