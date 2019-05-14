import React from 'react';


function Cards (props) {
    return (
        <div className="tileWrapper">
            <div className="cardDiv clickPicture" onClick={() => props.clickPicture(props.id)}>
                <img className={props.class} alt={props.name} src={props.image}/>
            </div>
        </div>
    )
}

export default Cards;