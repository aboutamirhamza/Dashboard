import React from 'react'
import { Td, Th } from '../Utils/TableUtils'

function DataTableBody({books}) {



  return (
    <>
        <div className='w-full py-5 extrasmall:min-w-screen extrasmall:overflow-x-scroll lg:overflow-x-hidden'>
          <table className='w-full'>
            <thead className='bg-gray-100'>
                <tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Status</Th>
                  <Th>Rate</Th>
                  <Th>Balance</Th>
                  <Th>Deposit</Th>
                </tr>
            </thead>

            <tbody>
                {
                    books.map(book => (
                        <tr key={book.id} className={`${book.bgColor} text-center`}>
                            <Td className='px-10 py-6 text-center font-inter text-sm font-medium'>{book.id}</Td>
                            <Td className='px-10 py-6 text-center font-inter text-sm font-medium'>{book.name}</Td>
                            <Td className='px-10 py-6 text-center font-inter text-sm'>{book.desc}</Td>
                            <Td className={`px-10 py-2 text-center inline-block mt-2 rounded-full font-inter text-sm font-medium ${book.status === "Open" ? "bg-purple-200 text-purple-600" : book.status === "Paid" ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"}`}>{book.status}</Td>
                            <Td className='px-10 py-6 text-center font-inter text-sm'>{book.rate}</Td>
                            <Td className={`px-10 py-6 text-center font-inter text-sm ${book.balance.includes("-") ? "text-red-600" : "text-green-600"}`}>{book.balance}</Td>
                            <Td className={`px-10 py-6 text-center font-inter text-sm ${book.deposit.includes("-") ? "text-red-600" : "text-green-600"}`}>{book.deposit}</Td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
    </>
  )
}

export default DataTableBody