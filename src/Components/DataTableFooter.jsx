import React from 'react'
import Flex from './Flex/Flex'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function DataTableFooter() {
  return (
    <>
      <footer className='bg-gray-100 w-full absolute left-0 bottom-0'>
        <Flex className='justify-between py-5 px-6'>
          <div>1-10 of 97</div>
          <Flex className='gap-2'>
              <div>Rows per page:</div>
              <div>
                <select className='bg-white border border-gray-200 px-2 py-2 rounded-xl'>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <Flex className='gap-2'>
                <div className='p-2 bg-white border border-gray-300 rounded-2xl'><a href="#"><ChevronLeft /></a></div>
                  <div>1-10</div>
                  <div className='p-2 bg-white border border-gray-300 rounded-2xl'><a href="#"><ChevronRight /></a></div>
              </Flex>
          </Flex>
        </Flex>
      </footer>
    </>
  )
}

export default DataTableFooter