import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchBar({rounded,setBooks,allbooks}) {
  const handleChange = (e)=>{
      const filteredBooks = allbooks.filter(book => {
          return book.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setBooks(filteredBooks);
  }
  return (
    <>
        <div className='px-6'>
            <div className={`flex items-center gap-4 border-gray-100 border px-6 py-2 ${rounded ? 'rounded-full' : 'rounded-md'}`}>
                <div><FaSearch /></div>
                <div><input type="search" name="" id="" className='bg-transparent w-full outline-none' onChange={handleChange} /></div>
            </div>   
        </div>
    </>
  )
}

export default SearchBar