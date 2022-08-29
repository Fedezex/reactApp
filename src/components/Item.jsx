import React from "react";

const item = ({info}) => {
    return (
        <a href="" className="game">
            <img src={info.image} alt="game-image" />
            <p>{info.title}</p>
        </a>
    )
}

export default item