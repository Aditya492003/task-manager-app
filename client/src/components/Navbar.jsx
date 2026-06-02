import { useClerk, UserButton, useUser } from "@clerk/react"
import { ArrowRightIcon, PenBoxIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  const {user} = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className=' fixed z-5 w-full px-3 py-4 flex items-center justify-between cursor-pointer bg-blue-100'>
      <PenBoxIcon size={40} onClick={() =>
        navigate('/')} />

      {
        user ? <UserButton/>
        :
          (
            <button onClick={openSignIn} className=' bg-blue-500 p-5 rounded-full text-sm text-white cursor-pointer gap-2 flex items-center '>Getting started <ArrowRightIcon /> </button>
          )
      }

    </div>
  )
}

export default Navbar