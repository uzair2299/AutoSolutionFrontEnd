
import { Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton } from '@material-ui/core'
import React from 'react';
import { useState,useEffect } from 'react';
import Form from '../Layout/Form';
import { Input, Select, Button } from '../Controls';
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import handleInputChange from './useForm'
import { createAPIEndpoint, ENDPIONTS } from "./api";

const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        float: 'right',
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))


export default function AutoModelForm(props) {
    const classes = useStyles();
    const { values, setValues, errors, setErrors,
        handleInputChange, resetFormControls } = props;

    const [AutoManufacturerList, setAutoManufacturerList] = useState([]);
    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.AUTOMANUFACTURER).fetchAll()
            .then(res => {
                let ManufacturerList = res.data.map(item => ({
                    id: item.id,
                    title: item.autoManufacturerName
                }));
                ManufacturerList = [{ id: 0, title: 'Select' }].concat(ManufacturerList);
                setAutoManufacturerList(ManufacturerList);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div>
                <Form>
                    <Grid container>
                        <Grid item xs={6}>
                            <Input
                                // fullWidth
                                label="Auto Model"
                                name="ModelName"
                                value={values.ModelName}
                            />

                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                label="Auto Manufacturer"
                                name="AutoManufacturerId"
                                options={AutoManufacturerList}
                                onChange={handleInputChange}
                                value={values.id}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonGroup className={classes.submitButtonGroup}>
                                <MuiButton
                                    size="large"
                                    endIcon={<RestaurantMenuIcon />}
                                    type="submit">Submit</MuiButton>
                                <MuiButton
                                    size="small"
                                    //   onClick={resetForm}
                                    startIcon={<ReplayIcon />}
                                />
                            </ButtonGroup>
                            {/* <Button
                            size="large"
                           // onClick={openListOfOrders}
                            startIcon={<ReorderIcon />}
                        >Orders</Button> */}

                        </Grid>
                    </Grid>
                </Form>
            </div>
        </div>
    )
}
