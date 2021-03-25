import React from 'react';

export default function CatPic(props) {
    return(
        <li>
            <img src={props.image.url} alt={props.image.id}/>
        </li>
    )
}