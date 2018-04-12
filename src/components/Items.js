import React from "react";

const Items = props => (
    <div className="item" onClick={() => props.clickImage(props.clicked, props.id)}>
        <img className="image" alt={props.name} src={props.image} />
    </div>
);

export default Items;