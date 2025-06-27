import React from 'react'
import Flex from '../../Flex/Flex'
import BooksPices from './BooksPices'
import Books1 from '../../../img/frontend/books/bestbook1.png'
import Books2 from '../../../img/frontend/books/bestbook2.png'
import Books3 from '../../../img/frontend/books/bestbook3.png'
import Books4 from '../../../img/frontend/books/bestbook4.png'


function BestPicks() {
  return (
    <section>
        <div className='max-w-primary mx-auto font-bona'>
            <div className='text-center py-16'>
                <h3 className='text-black text-5xl font-bold px-6 py-4'>Our Best Picks</h3>
            </div>
            <div className='grid grid-cols-1 gap-8 px-10 py-10 extrasmall:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex flex-col'>
                    <BooksPices image={Books1} alt={"Books1"} title={"Thunmanhandiya"} author={"Mahagamasekara"} />
                </div>
                <div className='flex flex-col'>
                    <BooksPices image={Books2} alt={"Books2"} title={"Gamperaliya"} author={"Martin Wickramasinghe"} />
                </div>
                <div className='flex flex-col'>
                    <BooksPices image={Books3} alt={"Books3"} title={"Nectar in a Sieve"} author={"Kamala Markandaya"} />
                </div>
                <div className='flex flex-col'>
                    <BooksPices image={Books4} alt={"Books4"} title={"Adaraneeya Victoria"} author={"Mohan Raj Madawala"} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestPicks