import React from "react";

const HelloYou = (props) => {
    return (
        <div>Witaj {props.match.params.name}</div>
    )
}

export default HelloYou;