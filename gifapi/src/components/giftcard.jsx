import React from 'react';

const GifCard = ({ gif }) => (
    <div>
        <h2>{gif.title}</h2>
        <img src={gif.images.original.url} alt="Gif" />
    </div>
);

export default GifCard;
