import React from 'react'
import { Td, Th } from '../Utils/TableUtils'

function DataTableBody({books}) {



  return (
    <>
        <div className='w-full py-5'>
          <table className='w-full'>
            <thead className='bg-gray-100'>
                <tr>
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
                            <Td className='px-10 py-6 text-center'>{book.name}</Td>
                            <Td className='px-10 py-6 text-center'>{book.desc}</Td>
                            <Td className={`px-10 py-6 text-center ${book.status==="Available" ? "text-green-600 bg-green-200 inline-block py-4 mt-2 rounded-full" : "text-red-600 bg-red-200 inline-block py-4 mt-2 rounded-full"}`}>{book.status}</Td>
                            <Td className='px-10 py-6 text-center'>{book.rate}</Td>
                            <Td className={`px-10 py-6 text-center ${book.balance.includes("-") ? "text-red-600" : "text-green-600"}`}>{book.balance}</Td>
                            <Td className={`px-10 py-6 text-center ${book.deposit.includes("-") ? "text-red-600" : "text-green-600"}`}>{book.deposit}</Td>
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