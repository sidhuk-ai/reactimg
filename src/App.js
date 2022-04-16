import './App.css';
import React,{useState, useEffect} from 'react';
// import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import ImageItems from './components/ImageItems';
import Loading from './components/Loading';

function App() {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const getImage = () => {
  //   axios.get('https://api.unsplash.com/search/photos?page=1&query=office&client_id=MunrWGF2Ooan3YoS8a81n9yEOirubKzsPTT5yBkuaII')
  //   .then((response)=>{
  //     // console.log(response)
  //     setImage(response.data.results)
  //   })
  // }
  const updateImage = async () => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=MunrWGF2Ooan3YoS8a81n9yEOirubKzsPTT5yBkuaII`;
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
    const url = `https://api.unsplash.com/search/photos?page=${page+1}&query=office&client_id=MunrWGF2Ooan3YoS8a81n9yEOirubKzsPTT5yBkuaII`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setResults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  }
  
  return (
    <>
      <div className="App my-2">
        <div className="row">
          <div className="col-4">
            <button type="button" className="btn btn-secondary">Search</button>
          </div>
        </div>
      </div>
      {loading && <Loading/>}
      <InfiniteScroll
                dataLength={results.length}
                next={fetchMoreData}
                hasMore={results.length !== totalResults}
                loader={<Loading/>}
            >
      <div className="container">
        <div className="row">
            {/* {
              image.map((value,index)=>{
                return(
                  <div key={index} className="col-4">
                  <div className="card" style={{width:'18rem'}}>
                    <img src={value.urls.small} className="card-img-top" alt="..."/>
                  </div>
                  </div>
                )
              })
            } */}
          {results.map((element) => {
            return <div className="col-md-4 mb-3" key={element.id}>
              <ImageItems description={element.alt_description} imageurl={element.urls.small}/>
            </div>;
          })}
        </div>
      </div>
      </InfiniteScroll>
    </>
  );
}

export default App;
