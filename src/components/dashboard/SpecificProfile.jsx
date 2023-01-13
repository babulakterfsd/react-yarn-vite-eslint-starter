import React from 'react';
import { useParams } from 'react-router-dom';

function SpecificProfile() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <p>Your profile id is {id} </p>
        </div>
    );
}

export default SpecificProfile;
