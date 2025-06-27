import React from 'react'

function BooksPices({image, alt, title, author}) {
  return (
    <div className='flex flex-col gap-2 font-bona text-black'>
        <img src={image} alt={alt} />
        <div className='px-14'>
          <h3 className=' font-bold text-lg'>{title}</h3>
          <p className='text-base'>{author}</p>
        </div>
    </div>
  )
}

export default BooksPices