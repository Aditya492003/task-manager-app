import { useNavigate } from "react-router-dom"
import dummyData from "../data/dummyData"

import {
  CheckCircle,
  CircleDashed,
  ClipboardList,
  Clock3
} from "lucide-react"

const Dashboard = () => {

const navigate = useNavigate()

  const totalTasks = dummyData.length

  const completedTasks = dummyData.filter(
    (task) => task.status === "Completed"
  ).length

  const pendingTasks = dummyData.filter(
    (task) => task.status === "Pending"
  ).length

  const inProgressTasks = dummyData.filter(
    (task) => task.status === "In Process"
  ).length


  // =========================================
  // PERCENTAGES FOR CIRCLE
  // =========================================

  const completedPercentage =
    (completedTasks / totalTasks) * 100

  const inProgressPercentage =
    (inProgressTasks / totalTasks) * 100

  const pendingPercentage =
    (pendingTasks / totalTasks) * 100


  // Circle Calculation

  const greenEnd = completedPercentage

  const yellowEnd =
    completedPercentage + inProgressPercentage

  const redEnd = 100


  return (

    <div className="p-6 bg-[#f8f9fc] min-h-screen">

      {/* ========================================= */}
      {/* TOP CARDS */}
      {/* ========================================= */}

      <div className="grid grid-cols-4 gap-5 mb-8">

        {/* Total */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4">

          <div className="bg-blue-100 p-3 rounded-xl">

            <ClipboardList className="text-blue-600" />

          </div>

          <div>

            <p className="text-gray-500 text-sm">

              Total Tasks

            </p>

            <h1 className="text-4xl font-bold mt-1">

              {totalTasks}

            </h1>

          </div>

        </div>


        {/* Completed */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4">

          <div className="bg-green-100 p-3 rounded-xl">

            <CheckCircle className="text-green-500" />

          </div>

          <div>

            <p className="text-gray-500 text-sm">

              Completed

            </p>

            <h1 className="text-4xl font-bold mt-1">

              {completedTasks}

            </h1>

          </div>

        </div>


        {/* In Progress */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4">

          <div className="bg-yellow-100 p-3 rounded-xl">

            <Clock3 className="text-yellow-500" />

          </div>

          <div>

            <p className="text-gray-500 text-sm">

              In Progress

            </p>

            <h1 className="text-4xl font-bold mt-1">

              {inProgressTasks}

            </h1>

          </div>

        </div>


        {/* Pending */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4">

          <div className="bg-red-100 p-3 rounded-xl">

            <CircleDashed className="text-red-500" />

          </div>

          <div>

            <p className="text-gray-500 text-sm">

              Pending

            </p>

            <h1 className="text-4xl font-bold mt-1">

              {pendingTasks}

            </h1>

          </div>

        </div>

      </div>


      {/* ========================================= */}
      {/* BOTTOM SECTION */}
      {/* ========================================= */}

      <div className="grid grid-cols-2 gap-6">


        {/* ========================================= */}
        {/* TASK OVERVIEW */}
        {/* ========================================= */}

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <h1 className="text-3xl font-bold mb-10">

            Task Overview

          </h1>


          <div className="flex items-center justify-between">

            {/* Circle */}

            <div
              className="relative w-52 h-52 rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(
                  #22c55e 0% ${greenEnd}%,
                  #f59e0b ${greenEnd}% ${yellowEnd}%,
                  #ef4444 ${yellowEnd}% ${redEnd}%
                )`
              }}
            >

              {/* Inner Circle */}

              <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center">

                <h1 className="text-5xl font-bold">

                  {totalTasks}

                </h1>

                <p className="text-gray-500 mt-1">

                  Total

                </p>

              </div>

            </div>


            {/* Labels */}

            <div className="flex flex-col gap-6">

              {/* Completed */}

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded-full bg-green-500"></div>

                <p className="text-gray-700 text-lg">

                  Completed ({completedTasks})

                </p>

              </div>


              {/* In Progress */}

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

                <p className="text-gray-700 text-lg">

                  In Progress ({inProgressTasks})

                </p>

              </div>


              {/* Pending */}

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded-full bg-red-400"></div>

                <p className="text-gray-700 text-lg">

                  Pending ({pendingTasks})

                </p>

              </div>

            </div>

          </div>

        </div>




        

        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <h1 className="text-3xl font-bold mb-6">

            Upcoming Tasks

          </h1>


          <div className="flex flex-col gap-5 max-h-[350px] overflow-y-auto pr-2">

            {

              dummyData.map((task) => (

                <div
                  key={task.id}
                  className="flex items-center justify-between border-b border-gray-100 pb-4"
                >

                  {/* Left */}

                  <div>

                    <h2 className="text-xl font-semibold">

                      {task.title}

                    </h2>

                    <p className="text-gray-400 mt-1">

                      Due: {task.dueDate}

                    </p>

                  </div>


                  {/* Right Badge */}

                  <span
                    className={`
                      px-4 py-1 rounded-lg text-sm font-semibold

                      ${task.status === "Completed"
                        ? "bg-green-100 text-green-500"
                        : ""
                      }

                      ${task.status === "Pending"
                        ? "bg-red-100 text-red-500"
                        : ""
                      }

                      ${task.status === "In Process"
                        ? "bg-yellow-100 text-yellow-500"
                        : ""
                      }
                    `}
                  >

                    {task.status}

                  </span>

                </div>

              ))

            }

          </div>


          {/* Footer */}

          <div className="flex justify-center mt-8">

            <button onClick={()=> navigate('/layout/task')} className="text-blue-600 font-semibold text-lg hover:underline cursor-pointer ">

              View all tasks →

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard