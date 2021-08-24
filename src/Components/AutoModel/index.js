import React from 'react'
import AutoModelForm from './AutoModelForm'
import PageHeader from '../../Common/PageHeader'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { CssBaseline, Grid, Paper, Divider, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useForm } from './useForm';


const useStyles = makeStyles((theme) => ({
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
}));
export default function AutoModel() {
    const classes = useStyles();

    const autoModel = {
        Id: 0,
        ModelName: "aa",
        AutoManufacturerId: 0
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    } = useForm(autoModel);
    return (
        <div>

            <CssBaseline />
            <PageHeader
                icon={<DriveEtaIcon fontSize="large" />}
                title="Auto Model"
                subtitle="Manage all of automobile models"
            ></PageHeader>
            <Divider></Divider>
            <Paper className={classes.paper} elevation={0}>
                <Container maxWidth="md">

                    <Grid container>
                        <h1>Form</h1>
                        <Grid item xs={12}>
                            <AutoModelForm
                                {...{
                                    values,
                                    setValues,
                                    errors,
                                    setErrors,
                                    handleInputChange,
                                    resetFormControls
                                }} />
                            <Divider />
                        </Grid>

                    </Grid>
                </Container>
                <Divider />
            </Paper>
        </div>
    )
}
