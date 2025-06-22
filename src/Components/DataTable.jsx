import React from 'react'
import DataTableHeader from './DataTableHeader'
import DataTableBody from './DataTableBody'
import DataTableFooter from './DataTableFooter'

  const booksData = [
    {
      id:1,
      name:"Amir Hamza",
      desc:"Books-1",
      status:"Available",
      rate:"$70.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:2,
      name:"Books-2",
      desc:"Books-2",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:3,
      name:"Books-3",
      desc:"Books-3",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:4,
      name:"Books-4",
      desc:"Books-4",
      status:"Not Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:5,
      name:"Books-5",
      desc:"Books-5",
      status:"Available",
      rate:"$100.00",
      balance:"$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:6,
      name:"Books-6",
      desc:"Books-6",
      status:"Available",
      rate:"$100.00",
      balance:"$280.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:7,
      name:"Books-7",
      desc:"Books-7",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:8,
      name:"Books-8",
      desc:"Books-8",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"-$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:9,
      name:"Books-9",
      desc:"Books-9",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:10,
      name:"Books-10",
      desc:"Books-10",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:11,
      name:"Books-11",
      desc:"Books-11",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:12,
      name:"Books-12",
      desc:"Books-12",
      status:"Available",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    }
  ]

function DataTable() {
  const [allbooks, setAllBooks] = React.useState(booksData);
  const [books, setBooks] = React.useState(booksData);
  return (
    <div className='px-4 py-2 w-full min-h-screen relative'>
        <DataTableHeader setBooks={setBooks} allbooks={allbooks} />
        <DataTableBody books={books} />
        <DataTableFooter />
    </div>
  )
}

export default DataTable