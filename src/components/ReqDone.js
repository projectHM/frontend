import React from 'react';

const ReqDone = (props) => {
    return (
        <div>
            <h1>Req Done</h1>
            <button onClick={() => props.setActivePage('app')}>Home</button>
        </div>
    )
}
export default ReqDone;