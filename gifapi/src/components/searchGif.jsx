import React, { useEffect, useState } from "react";
import axios from 'axios';
import GifCards from "./giftcard";

const SearchGif = (props) => {
    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        const fetchGifs = async () => {
            let api;
            if (props.txt) {
                api = 'https://api.giphy.com/v1/gifs/search?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&q=' + props.txt + '&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
            } else {
                api = 'https://api.giphy.com/v1/gifs/trending?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&limit=6&offset=0&rating=g&bundle=messaging_non_clips%22';
            }

            try {
                const list = await axios.get(api);
                setSearchRes(list.data.data);
            } catch (error) {
                console.error("" + error);
            }
        }
        fetchGifs();
    }, [props.txt]);

    return (
        <div>
            {searchRes.map((item) => {
                return <GifCards key={item.id} gif={item} />
            })}
        </div>
    );
}

export default SearchGif;
