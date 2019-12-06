import React from 'react';

import {useForm} from '../hooks/useForm';

//set initialFormValues

const initialFormValues = {
    name: '',
    country: ''
}


const AddPlayerForm = () => {

    //setup and use 'useForm' 
    const [values, clearForm, handleSubmit, handleChanges] = useForm('addNewPlayer', initialFormValues);

    return (
        <div>
            <h2>Player Form --> add new player</h2>
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                />
                <input 
                    type='text'
                    placeholder='country'
                    name='country'
                />
                <button>Submit</button>
                <button>Clear</button>
            </form>
        </div>
    )
}

export default AddPlayerForm;