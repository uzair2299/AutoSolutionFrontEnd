import { connect } from "react-redux";
//import React  from "react";
import * as actions from "../../Redux/actions/autoManufactureAction";
import React, { useEffect, useState } from "react";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import AutoManufactureform from "./AutoManufactureform";
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useToasts } from "react-toast-notifications";
import {
    Divider,
    CssBaseline,
} from '@material-ui/core'
import PageHeader from "../../Common/PageHeader";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem",
            backGround: "#f5f5f5",
        }
    },
    paper: {
        //margin: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: "#f5f5f5"

    }
})


const AutoManufacturer = ({ classes, ...props }) => {
    //toast msg.
    const { addToast } = useToasts()

    console.log("component 1 :", props)
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])//componentDidMount

    const onDelete = id => {
        if (window.confirm('Are You Sure to delete this recode')) {
            const onSuccess = () => addToast('Delete Successfully', { appearance: 'info' })
            props.deleteAutoManufacturer(id, onSuccess);
        }
    }
    return (
        <div>
            <CssBaseline />
            <PageHeader 
             icon={<DriveEtaIcon fontSize="large" />}
             title="Auto Manufacturer"
             subtitle="Manage all of automobile manufacturers"
             ></PageHeader>
             <Divider></Divider>
            <Paper className={classes.paper} elevation={0}>
                <Grid container>
                    <Grid item xs={12}>
                        <AutoManufactureform  {...({ currentId, setCurrentId })} />
                        <Divider />
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <TableContainer>
                            <Table>
                                <TableHead className={classes.root}>
                                    <TableRow>

                                        <TableCell>
                                            {"Index"}
                                        </TableCell>
                                        <TableCell>
                                            {"Auto Manufacturer"}
                                        </TableCell>
                                        <TableCell>
                                            {"Actions"}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.dCandidateList.map((record, index) => {
                                            return (<TableRow key={index} hover>
                                                <TableCell>{record.id}</TableCell>

                                                <TableCell>{record.autoManufacturerName}</TableCell>

                                                <TableCell>
                                                    <ButtonGroup>
                                                        <Button>
                                                            <EditIcon color="primary" onClick={() => { setCurrentId(record.id) }}></EditIcon>
                                                        </Button>
                                                        <Button>
                                                            <DeleteIcon color="secondary" onClick={() => { (onDelete(record.id)) }}></DeleteIcon>
                                                        </Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>)
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const mapStateToProps = state => ({
    dCandidateList: state.autoManufactureReducer.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteAutoManufacturer: actions.Delete
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(AutoManufacturer));
