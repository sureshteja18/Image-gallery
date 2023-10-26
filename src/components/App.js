import { useState } from 'react';
import Gallery from './Gallery';
import '../App.css';
import axios from 'axios';

function App() {
  const[search,setSearch]=useState();
  const[data,setData]=useState([]);

  const handleChangeInput=(e)=>{
    setSearch(e.target.value)
  }
  
  const apiKey="636e1481b4f3c446d26b8eb6ebfe7127"

  const handleSubmitButton=async(e)=>{
    e.preventDefault();
    try {
      const apiGet = await axios.get(`https://api.flickr.com/services/rest/? 
    method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`);
     const data = await apiGet.data;
     setData(data.photos.photo);
    setSearch('')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <center>
        <h2 className="mt-3">Image Gallery</h2>
        <form className="form-control input-form ">
          <input className="form-control mt-3" type="text" value={search} onChange={handleChangeInput} placeholder="Image Search"/> <br/> 
           <br/>
          <button className="btn btn-primary mb-3 shadow" onClick={handleSubmitButton}>submit</button>
        </form>
        <br/>
        {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
      </center>
    </div>
  );
}

export default App;
