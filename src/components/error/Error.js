import React from "react";

const Error = ({ touched, message, action }) => {
    if (!touched){
        return <div className="invalid-feedback">&nbsp;</div>;
    }
    if (message && !action){
        return <div className="invalid-feedback">{message}</div>;
    }
    else if(message && action){
        return <div className="invalid-feedback2" >{message}</div>;
    }
    return '';
}

export default Error;