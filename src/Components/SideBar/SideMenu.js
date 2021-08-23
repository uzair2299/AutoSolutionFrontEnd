import { withStyles ,makeStyles} from '@material-ui/core'
import React from 'react'


//make styles
const useStyles=makeStyles({
    sideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position:'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
         backgroundColor: '#253035'
      }
}); 



export default function SideMenu() {
    const classes = useStyles();
    console.log("classes :" , classes);
    return (
        <div className={classes.sideMenu }>
            
        </div>
    )
}




// withStyle

//   const style ={ sideMenu:{
//     display: 'flex',
//     flexDirection: 'column',
//     position:'absolute',
//     left: '0px',
//     width: '320px',
//     height: '100%',
//      backgroundColor: '#253035'
//   }} 


// const sideMenu =(props)=>{
//     const {classes} = props. 
//     return (
//         <div className={classes.sideMenu }>
            
//         </div>
//     )
// }

// export default withStyles(style)(sideMenu);
