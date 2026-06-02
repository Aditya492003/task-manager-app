import { useClerk, useUser } from "@clerk/react"

const Sidebar = () => {

    const { user } = useUser()

    const { signOut, openUserProfile } = useClerk()

    return (

        <div className='w-60 h-screen bg-amber-50 flex flex-col justify-between items-center'>
            <div className="my-5 w-full">
                {
                    user && (
                        <>
                            <img src={user.imageUrl} alt="" className="w-13 rounded-full mx-auto"/>
                            <p className="mt-1 text-center"> {user.fullName}</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar