import React from 'react'
import DataTableHeader from './DataTableHeader'
import DataTableBody from './DataTableBody'
import DataTableFooter from './DataTableFooter'

  const booksData = [
    {
      id:1,
      name:"Dune",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting",
      status:"Open",
      rate:"$70.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:2,
      name:"Stephen King",
      desc:"industry. Lorem Ipsum has been the industry's standard dummy",
      status:"Paid",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:3,
      name:"Siddhartha",
      desc:"text ever since the 1500s, when an unknown printer took a galley",
      status:"Open",
      rate:"$65.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:4,
      name:"Beloved",
      desc:"survived not only five centuries, but also the leap into electronic",
      status:"Inactive",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:5,
      name:"Frankenstein",
      desc:"typesetting, remaining essentially popularised in",
      status:"Open",
      rate:"$30.00",
      balance:"$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:6,
      name:"Dracula",
      desc:"Ipsum passages, and more recently with desktop publishing",
      status:"Paid",
      rate:"$100.00",
      balance:"$280.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:7,
      name:"Outliers",
      desc:"software like Aldus PageMaker including versions of Lorem Ipsum.",
      status:"Inactive",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:8,
      name:"Hamlet",
      desc:"It is a long established fact that a reader will be distracted",
      status:"Open",
      rate:"$120.00",
      balance:"-$270.00",
      deposit:"-$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:9,
      name:"Inferno",
      desc:"roots in a piece of classical Latin literature from 45 BC",
      status:"Paid",
      rate:"$20.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:10,
      name:"Blink",
      desc:"more obscure Latin words, consectetur, from a Lorem",
      status:"Inactive",
      rate:"$100.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"bg-gray-100",
    },
    {
      id:11,
      name:"Misery",
      desc:"The standard chunk of Lorem Ipsum used since",
      status:"Open",
      rate:"$60.00",
      balance:"-$270.00",
      deposit:"$500.00",
      bgColor:"white",
    },
    {
      id:12,
      name:"Matilda",
      desc:"reproduced below for those interested. Sections",
      status:"Paid",
      rate:"$220.00",
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