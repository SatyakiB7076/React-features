import { useState, useEffect } from 'react';
import './App.css';
import Search from './Components/Search';
import MediaCard from './Components/Cards';

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/movies");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
const handleSearch=(data)=>{
setSearchData(data.toLowerCase());
}
const filteredData=
searchData.trim===""?data:data.filter((film)=>film.Title.toLowerCase().includes(searchData))
  return (
    <div className='w-fit-content'>
      <Search handleSearch={handleSearch}/>
      <div className='flex flex-wrap items-center justify-center gap-4 mx-3'>
        {filteredData.map((film) => (
          <MediaCard 
            key={film.Year}  
            title={film.Title} 
            description={film.Plot} 
            image={film.Poster} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
