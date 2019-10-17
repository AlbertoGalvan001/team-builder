import React from 'react';

const Team = props => {
    console.log("hello", props.teamList);
    return (
        <>
            {props.teamList.map((team, index) => {
                return (

                    <div className='team' key={index}>
                        <h2>{team.name}</h2>
                        <p>{team.email}</p>
                        <p>{team.role}</p>
                    </div>
                )
            })}
        </>
    );
};

export default Team;