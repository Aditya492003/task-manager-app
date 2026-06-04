import { useClerk, useUser } from "@clerk/react"
import { FileText, HouseIcon, Plus, User } from 'lucide-react'
import { Link } from "react-router-dom"

const navItem = [
    { to:'/layout', label: 'Dashboard' , Icon: HouseIcon  },
    { to:'/layout/task', label: 'Task' , Icon: FileText  },
    { to:'/layout/addtask', label: 'New Task' , Icon: Plus  },
    { to:'/layout/profile', label: 'Profile' , Icon: User  }
]

const Sidebar = () => {

    const { user } = useUser()
    const { signOut, openUserProfile } = useClerk()

    return (
        <div className='w-60 h-screen bg-amber-50 flex flex-col justify-between items-center'>

            {/* Top Section */}
            <div className="my-5 w-full">

                {
                    user && (
                        <>
                            <img
                                src={user.imageUrl}
                                alt=""
                                className="w-13 rounded-full mx-auto"
                            />

                            <p className="mt-1 text-center">
                                {user.fullName}
                            </p>
                        </>
                    )
                }

                {/* NAV ITEMS */}
                <div className="mt-10 flex flex-col gap-3 px-5">

                    {
                        navItem.map((item, index) => {

                            const Icon = item.Icon

                            return (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-200 transition"
                                >

                                    <Icon size={20} />

                                    <span>{item.label}</span>

                                </Link>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Sidebar