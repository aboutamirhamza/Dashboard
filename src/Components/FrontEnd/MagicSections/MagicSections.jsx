import React from 'react'
import Flex from '../../Flex/Flex'
import Magic from '../../../img/frontend/sectionimage/magic.jpg'

function MagicSections() {
  return (
    <section className='bg-black'>
        <div className='max-w-primary mx-auto py-20 px-6'>
            <Flex className='gap-6'>
                <div>
                    <img src={Magic} alt="Magic" />
                </div>
            </Flex>
        </div>
    </section>
  )
}

export default MagicSections