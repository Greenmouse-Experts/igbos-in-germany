
import { MdArrowOutward } from 'react-icons/md'



function BtnPrimary() {
  return (
    <button className='bg-colorPrimary text-white mt-10 px-8 py-3 font-medium btn rounded-xl transition-all text-lg flex items-center gap-3'>
Learn more <span><MdArrowOutward size={20} />
</span>
    </button>
  )
}

export default BtnPrimary