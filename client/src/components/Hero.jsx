import { useClerk, useUser } from "@clerk/react"
import { useNavigate } from "react-router-dom"



const Hero = () => {


    const {user} = useUser()
    const {openSignIn} = useClerk()
    const navigate = useNavigate()

    const handler = () => {
        if (user) {
            navigate('/layout')
        } else {
            openSignIn()
        }
    }
        


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-amber-50 ">

            <div>
                <h1 className="text-6xl  text-black mb-2">
                    Welcome to <span className="text-blue-900 font-bold">Task Manager</span> App !!
                </h1>
                <p className="text-2xl text-blue-500 mt-2 mb-2 flex items-center justify-center">welcome tho the task manager app create manage and dlt the task here </p>
            </div>
            <div className="flex  gap-4">
                <button onClick={handler} className="bg-blue-950 text-3xl text-white px-4 py-4 rounded-full mt-2 cursor-pointer">create now</button>
                <button className="bg-blue-950 text-3xl text-white px-4 py-4 rounded-full mt-2 cursor-pointer">demo</button>
            </div>
        </div>
    )
}

export default Hero