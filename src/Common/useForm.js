import { useState, useEffect } from "react";

const useForm = (initialFieldValue, validate,setCurrentId) => {

    const [values, setValues] = useState(initialFieldValue);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        console.log("set values before: ", values);
        console.log("fieldValue before: ", fieldValue);
        setValues({
            ...values,
            ...fieldValue
        });
        console.log("set values after: ", values);
        console.log("set fieldValue after: ", fieldValue);
        validate(fieldValue);
    }

    const resetForm = () => {
        setValues({
            ...initialFieldValue
        })
        setErrors({})
        setCurrentId(0)
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}
export default useForm;