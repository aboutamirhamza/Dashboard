import React from 'react'

import Flex from '../../Flex/Flex';


function ShopCard({image, alt, title, author, price, status, icon, btntext}) {
  return (
    <div className='bg-white border border-black rounded-lg p-12'>
        <div className='flex flex-col items-center gap-4 font-bona text-black'>
  {image && (
    <div>
      <div>
        <img src={image} alt={alt || "Image"} />
      </div>
    </div>
  )}

  {(title || author) && (
    <div>
      {title && (
        <div>
          <h3 className='font-bold text-lg'>{title}</h3>
        </div>
      )}
      {author && (
        <div>
          <p className='text-sm font-bold'>{author}</p>
        </div>
      )}
    </div>
  )}

  {(price || status) && (
    <div>
      {price && (
        <div>
          <p className='text-sm font-bold'>{price}</p>
        </div>
      )}
      {status && (
        <div>
          <p className='text-sm'>{status}</p>
        </div>
      )}
    </div>
  )}

  {(icon || btntext) && (
    <Flex className='border border-section-color rounded-lg px-6 py-2 gap-2 hover:bg-section-color hover:text-white hover:transition-colors'>
      {icon && <div>{icon}</div>}
      {btntext && <button className='text-sm'>{btntext}</button>}
    </Flex>
  )}
</div>

    </div>
  )
}

export default ShopCard