// write your CatList component here
import React from 'react';
// import CatPic from './CatPic'




function CatList(props) {

    const renderCats = () => props.catPics.map(image => <li><img key={image.id} src={image.url} alt={image.id} /></li>)

    return(
        <ul>
            {renderCats()}
        </ul>
    )


}

export default CatList