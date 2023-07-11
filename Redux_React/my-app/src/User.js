import React from 'react'

function User(props) {
    const {data} = props;
    // console.warn(props.data.name);
    return (
        <>
            <h1>User Component</h1>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </>
    )
}

export default User