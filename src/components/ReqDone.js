import React from 'react';

const ReqDone = (props) => {
    return (
        <div className="reqDone">
            <h1>We received your request </h1>
            <button onClick={() => props.setActivePage('app')}>Home</button>
        </div>
    )
}
export default ReqDone;