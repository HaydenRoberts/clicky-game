import React from "react";

const Items = props => (
    <div className="item" onClick={props.clickImage}>
        <img alt={props.name} src={props.image} />
    </div>
);

export default Items;