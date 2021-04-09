import React from "react";

const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.order}</p>
        </div>
    )
}

export default Article