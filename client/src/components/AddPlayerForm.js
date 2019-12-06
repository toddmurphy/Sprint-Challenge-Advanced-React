import React from 'react';

const AddPlayerForm = () => {

    return (
        <div>
            <h2>Player Form --> add new player</h2>
            <form>
                <input
                    type='text'
                    placeholder='First name'
                    name='firstname'
                />
                <input
                    type='text'
                    placeholder='Last name'
                    name='lastname'
                />
                <button>Submit</button>
                <button>Clear</button>
            </form>
        </div>
    )
}

export default AddPlayerForm;