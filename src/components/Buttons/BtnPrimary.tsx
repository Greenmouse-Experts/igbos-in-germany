
import { MdArrowOutward } from 'react-icons/md'
import { NavLink } from 'react-router-dom'



function BtnPrimary() {
  return (
    <NavLink to="/history" className='bg-colorPrimary text-white mt-10 px-8 py-3 font-medium btn btn-green rounded-xl transition-all text-lg w-fit flex items-center gap-3'>
Learn more <span><MdArrowOutward size={20} />
</span>
    </NavLink>
  )
}

export default BtnPrimary