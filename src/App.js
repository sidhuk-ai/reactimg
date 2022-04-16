import './App.css';
import React,{useState} from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState([]);
  const getImage = () => {
    axios.get('https://api.unsplash.com/search/photos?page=1&query=office&client_id=MunrWGF2Ooan3YoS8a81n9yEOirubKzsPTT5yBkuaII')
    .then((response)=>{
      // console.log(response)
      setImage(response.data.results)
    })
  }
  return (
    <>
      <div className="App my-2">
        <div className="row">
          <div className="col-4">
            <button type="button" className="btn btn-secondary" onClick={getImage}>Search</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            {
              image.map((value,index)=>{
                return(
                  <div key={index} className="col-4">
                  <div className="card" style={{width:'18rem'}}>
                    <img src={value.urls.small} className="card-img-top" alt="..."/>
                  </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </>
  );
}

export default App;
