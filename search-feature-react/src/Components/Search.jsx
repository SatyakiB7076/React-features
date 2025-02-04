import React, { useState } from 'react'

const Search = ({handleSearch}) => {
    const [item,setSearchItem]=useState("");
    const handleSearchItem=(data)=>{
setSearchItem(data);
handleSearch(item);
    }
  return (
    <div className='m-5'>
      <input type="search" name="search" id="search" placeholder='Search a movie' onChange={(e)=>handleSearchItem(e.target.value)}/>
    </div>
  )
}

export default Search
