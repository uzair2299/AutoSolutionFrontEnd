import { Grid, TextField, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import useForm from '../../Common/useForm'
import * as actions from "../../Redux/actions/autoManufactureAction";
import { connect } from "react-redux";
import { useEffect } from 'react';
import { useToasts } from "react-toast-notifications";

const initialFieldValue = {
    autoManufacturerName: ""
}
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));
function AutoManufactureform(props) {
    //toast
    const { addToast } = useToasts();
    const classes = useStyles();
    // const [values, setValues]   = useState(initialFieldValue);

    // const handleInputChange = e => {
    //     const { name, value } = e.target;
    //     setValues({
    //         ...values,
    //         [name]: value
    //     });
    // }

    useEffect(() => {
        console.log("current : ", props.currentId)
        console.log("current : ", props)

        if (props.currentId != 0) {
            setValues({
                ...props.dCandidateList.find(x => x.id == props.currentId)
            })
            console.log("current v : ", values)
            setErrors({})
        }
    }, [props.currentId])

    //as a whole validation validate()
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('autoManufacturerName' in fieldValues) {
            temp.autoManufacturerName = fieldValues.autoManufacturerName != "" ? "" : "Required"
        }
        setErrors({
            ...temp
        })
        console.log("fieldvalues:", fieldValues)
        console.log("values:", values)
        if (fieldValues == values) {
            return Object.values(temp).every(x => x == "");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {

            if (props.currentId == 0) {
                const onSuccess = () => addToast('Submitted Successfully', { appearance: 'success' })
                props.createAutoManufacturer(values, onSuccess);
            }
            else {
                const onSuccess = () => addToast('Update Successfully', { appearance: 'success' })
                props.updateAutoManufacturer(props.currentId, values, onSuccess);
            }
            resetForm();
        }
        //            console.log("Form Submitted :", values);
    }

    const { values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFieldValue, validate, props.setCurrentId);
    // console.log(values);
    return (
        <div>
            <div>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <TextField

                            name="autoManufacturerName"
                            variant="outlined"
                            label="AutoManufacturer Name"
                            value={values.autoManufacturerName}
                            onChange={handleInputChange}
                            // error={true}
                            //helperText={errors.AutoManufacturerName}
                            {
                            ...(errors.autoManufacturerName && { error: true, helperText: errors.autoManufacturerName })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        type="submit"
                        startIcon={<AddIcon />}
                    >
                        {"Add New"}
                    </Button>
                    <Button
                        color="secondary"
                        size="small"
                        variant="contained"
                        startIcon={<RefreshIcon />}
                        onClick={resetForm}
                    >
                        {"Reset"}
                    </Button>
                    </Grid>

                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    dCandidateList: state.autoManufactureReducer.list
})

const mapActionToProps = {
    createAutoManufacturer: actions.create,
    updateAutoManufacturer: actions.update,
    // deleteDCandidate: actions.Delete
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(useStyles)(AutoManufactureform));
