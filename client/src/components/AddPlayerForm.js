import React from 'react';

import { useForm } from '../hooks/useForm';

//set initialFormValues

const initialFormValues = {
    name: '',
    country: ''
}


const AddPlayerForm = () => {

    //setup and use 'useForm' 
    const [values, handleSubmit, handleChanges] = useForm('addNewPlayer', initialFormValues);

    return (
        <div>
            <h2>Player Form --> add new player</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={values.name}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    placeholder='country'
                    name='country'
                    value={values.country}
                    onChange={handleChanges}
                />
                <button>Submit</button>
                {/* <button onClick={clearForm} >Clear</button> */}
            </form>
        </div>
    )
}

export default AddPlayerForm;