import { BrowserRouter } from 'react-router-dom'
import './App.css';
//store 

import AutoManufacturer from './Components/AutoManufacturer/AutoManufacturer';
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import SideMenu from './Components/SideBar/SideMenu';
import Header from './Components/Header/Header';
import PersistentDrawerLeft from './Components/Header/Header'
import AUTOSOLUTIONROUTING from './Routing/AutoSolutionRouting';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <PersistentDrawerLeft />
      {/* <Container maxwidth="lg">*/}

      {/* <AutoManufacture /> */}
      {/* </Container> */}


      {/*<SideMenu /> 
      <div className={classes.appMain}>
        <Header>
        </Header>
      </div> */}
      <CssBaseline />
      {/* <AUTOSOLUTIONROUTING /> */}
    </BrowserRouter>
  );

}

export default App;
