import React from 'react';

function ImageItems(props) {
    let { description, imageurl} = props;
    return (
        <>
            <div className="card container" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <img src={imageurl ? imageurl : 'https://static.vecteezy.com/system/resources/previews/000/228/657/original/top-headlines-news-themem-background-vector.jpg'} className="card-img-top mt-3" alt="img"/>
                <div className="card-body">
                    <h4 className="card-title font-bold select-none">{description}</h4>
                </div>
            </div>
        </>
    );

}

export default ImageItems