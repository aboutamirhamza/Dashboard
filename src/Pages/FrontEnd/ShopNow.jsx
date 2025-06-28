import Flex from '../../Components/Flex/Flex'
import ShopCard from '../../Components/FrontEnd/ShopNow/ShopCard'
import { ShoppingCart } from 'lucide-react';
import BookOne from '../../img/frontend/shopnow/book1.png'
import BookTwo from '../../img/frontend/shopnow/book2.png'
import BookThree from '../../img/frontend/shopnow/book3.png'



function ShopNow() {
  return (
    <section>
      <div className='max-w-primary mx-auto px-6'>
        <div className='font-bona text-center'>
          <h3 className='font-bold text-5xl text-section-color py-10'>Explore All Books Here</h3>
        </div>
        <Flex className='gap-10 justify-center py-10 px-6 extrasmall:flex-col md:flex-row'>
          <Flex className='gap-3'>
            <input type="checkbox" name="all" id="all" className='appearance-none w-4 h-4 bg-white border rounded-sm border-white outline checked:bg-black' />
            <label htmlFor="all" className='font-bold text-black text-2xl'>All</label>
          </Flex>
          <Flex className='gap-3'>
            <input type="checkbox" name="novel" id="novel" className='appearance-none w-4 h-4 bg-white border rounded-sm border-white outline checked:bg-black' />
            <label htmlFor="novel" className='font-bold text-black text-2xl'>Novel</label>
          </Flex>
          <Flex className='gap-3'>
            <input type="checkbox" name="translations" id="translations" className='appearance-none w-4 h-4 bg-white border rounded-sm border-white outline checked:bg-black' />
            <label htmlFor="translations" className='font-bold text-black text-2xl'>Translations</label>
          </Flex>
          <Flex className='gap-3'>
            <input type="checkbox" name="kids" id="kids" className='appearance-none w-4 h-4 bg-white border rounded-sm border-white outline checked:bg-black' />
            <label htmlFor="kids" className='font-bold text-black text-2xl'>Kids’ Stories</label>
          </Flex>
        </Flex>

        <div className='grid grid-cols-4 gap-6 py-20 px-6 extrasmall:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          <ShopCard image={BookOne} alt={"BookOne"} title={"Thunmanhandiya"} author={"Mahagamasekara"} price={"Rs. 700/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          <ShopCard image={BookTwo} alt={"BookTwo"} title={"Manikkawatha"} author={"Mahinda Prasad Masimbula"} price={"Rs. 900/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          <ShopCard image={BookThree} alt={"BookThree"} title={"Manjula Wediwardena"} author={"Manjula Wediwardena"} price={"Rs. 990/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          <ShopCard image={BookOne} alt={"BookOne"} title={"The Book Thief"} author={"Markus Zusaf"} price={"Rs. 1200/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          
          <ShopCard image={BookTwo} alt={"BookTwo"} title={"Manikkawatha"} author={"Mahinda Prasad Masimbula"} price={"Rs. 900/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          <ShopCard image={BookThree} alt={"BookThree"} title={"Manjula Wediwardena"} author={"Manjula Wediwardena"} price={"Rs. 990/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          <ShopCard image={BookOne} alt={"BookOne"} title={"Thunmanhandiya"} author={"Mahagamasekara"} price={"Rs. 700/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
          <ShopCard image={BookTwo} alt={"BookTwo"} title={"Manikkawatha"} author={"Mahinda Prasad Masimbula"} price={"Rs. 900/="} status={"Available across all branches"} icon={<ShoppingCart />} btntext={"Add to Cart"} />
        </div>

        <div className='py-8 flex flex-col items-end'>
          <div className='bg-section-color p-2 rounded-lg text-white w-fit'><ShoppingCart className='w-6 h-6' /></div>
        </div>
      </div>
    </section>
  )
}

export default ShopNow