import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchBar({rounded}) {
  return (
    <>
        <div className='px-6'>
            <div className={`flex items-center border-white border px-6 py-2 ${rounded ? 'rounded-full' : 'rounded-md'}`}>
                <div><FaSearch /></div>
                <div><input type="search" name="" id="" className='bg-gray-200 w-full outline-none' /></div>
            </div>   
        </div>
    </>
  )
}

export default SearchBar