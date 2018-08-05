import React from "react";

const CheckAge = (props) => {

    return (
        <React.Fragment>
            {props.match.params.age >= 18 && "Pełnoletni"}
            {props.match.params.age < 18 && "Niepełnoletni"}
        </React.Fragment>
    )
}

export default CheckAge;