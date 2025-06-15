import React from 'react';
import { FaFilter } from "react-icons/fa";
import SearchBar from './SearchBar';


function DataTableHeader() {
  return (
    <>
        <section>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div className='bg-white border border-gray-200 p-3 rounded-md shadow-md'><FaFilter /></div>
                    <div><SearchBar /></div>
                </div>
                <div>
                    <button className='bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-800 hover:transition-colors'>+ Add Books</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default DataTableHeader;