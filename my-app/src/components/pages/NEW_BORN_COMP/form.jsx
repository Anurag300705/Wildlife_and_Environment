import React, { useState } from 'react';

const Form = () => {
    const [species, setSpecies] = useState('');
    const [birth, setBirth] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/new_born', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ species, birth: Number(birth) })
            });

            if (response.ok) {
                alert('Data loaded successfully');
                window.location.reload();
            } else {
                console.error('Failed to create account');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }


        setSpecies('');
        setBirth('');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="species"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                    placeholder="Enter species"
                />
                <input
                    type="text"
                    name="birth"
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    placeholder="Enter birth year"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
