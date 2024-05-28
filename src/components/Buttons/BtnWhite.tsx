
import { MdArrowOutward } from 'react-icons/md'



function BtnWhite() {
  return (
    <button className='bg-white  text-colorPrimary w-fit mt-10 px-8 py-3 font-medium btn rounded-xl transition-all text-lg flex items-center gap-3'>
Join Us Today <span><MdArrowOutward size={20} />
</span>
    </button>
  )
}

export default BtnWhite