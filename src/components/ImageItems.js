import React from 'react';

function ImageItems(props) {
    let { imageurl} = props;
    return (
        <>
            <img className='w-full h-full' src={imageurl} alt="img"/>
        </>
    );

}

export default ImageItems