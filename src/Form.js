import React, { useState } from 'react';

const Form = props => {
    console.log(props);

    const [team, setTeam] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = (event) => {
        setTeam(
            { ...team, [event.target.name]: event.target.value }
        );
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(team);
        setTeam({ name: '', email: '', role: '' })
    }

    return (
        <form onSubmit={submitForm} className='team-form'>
            <label htmlFor="name">Name: </label>
            <input name='name' id='name' type='text' placeholder='name' onChange={changeHandler} value={team.name}>
            </input>

            <label htmlFor='name'>Email: </label>
            <input name='email' id='email' type='text' placeholder='email' onChange={changeHandler} value={team.email}>
            </input>

            <label htmlFor='name'>Role: </label>
            <input name='role' id='role' type='text' placeholder='role' onChange={changeHandler} value={team.role}>
            </input>

            <button type='submit'>Add New Team Member</button>
        </form>
    );
}

export default Form;