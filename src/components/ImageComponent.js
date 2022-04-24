import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import ImageItems from './ImageItems';
import Loading from './Loading';

function ImageComponent(props) {
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    // let textInput = React.createRef();

    // function handleClick() {
    //     console.log(textInput.current.value);
    // }
    const updateImage = async () => {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${props.query}&client_id=MunrWGF2Ooan3YoS8a81n9yEOirubKzsPTT5yBkuaII`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setResults(parsedData.results);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }
    useEffect(() => {
        updateImage()
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        const url = `https://api.unsplash.com/search/photos?page=${page+1}&query=${props.query}&client_id=MunrWGF2Ooan3YoS8a81n9yEOirubKzsPTT5yBkuaII`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setResults(results.concat(parsedData.results));
        setTotalResults(parsedData.totalResults);
    }
    
    return (
        <>
            {loading && <Loading />}
            <InfiniteScroll
                dataLength={results.length}
                next={fetchMoreData}
                hasMore={results.length !== totalResults}
                loader={<Loading/>}
            >
                <div className='flex flex-wrap'>
                    {results.map((element) => {
                        return <div className='m-1 p-1' key={element.id}>
                            <ImageItems description={element.alt_description} imageurl={element.urls.small} />
                        </div>;
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

export default ImageComponent