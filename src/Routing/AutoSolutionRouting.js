import { Container } from '@material-ui/core';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AUTOSOLUTIONPATH from './AutoSolutionPath';
import AUTOSOLUTIONWEBPAGE from './AutoSolutionWebPage';
import { Typography } from '@material-ui/core';
import AutoManufacturer from '../Components/AutoManufacturer/AutoManufacturer';
import AutoModel from './../Components/AutoModel'
const AUTOSOLUTIONROUTING = () => {
    return (
        <div>
            <Switch>
                {/* <Route exact path={AUTOSOLUTIONPATH.HOME}>
                    <AUTOSOLUTIONWEBPAGE.HOME />
                </Route> */}
                <Route exact path={AUTOSOLUTIONPATH.AUTOMANUFACTURER}>
                    {/* <Container> */}
                    {/* <Typography variant="h3" gutterBottom> */}
                    <AutoManufacturer />
                    {/* </Typography> */}
                    {/* </Container> */}
                </Route>
                <Route exact path={AUTOSOLUTIONPATH.AUTOMODEL}>
                    <AutoModel />
                </Route>
            </Switch>
        </div>

    )
}
export default AUTOSOLUTIONROUTING