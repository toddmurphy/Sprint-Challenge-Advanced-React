import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValues) => {
    // import and setup useLocalStorage
    const [values, setValues] = useLocalStorage(key, initialValues);


    //handleChanges
    const handleChanges = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    //handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('player added')
    }

    //clear form
    // const clearForm = (event) => {
    //     if (event) event.preventDefault();
    //     setValues(initialValues)
    // }


    return[values,  handleSubmit, handleChanges]
}