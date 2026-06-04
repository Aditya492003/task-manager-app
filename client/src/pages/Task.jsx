
import { useState } from "react"
import dummyData from "../data/dummyData"


import {
  Pencil,
  Trash2
} from "lucide-react"
import { useNavigate } from "react-router-dom"


const Task = () => {

  // =========================================
  // STATE
  // =========================================

  const [tasks, setTasks] = useState(dummyData)

  const [activeFilter, setActiveFilter] = useState("All")

  const navigate = useNavigate()

  // =========================================
  // DELETE TASK
  // =========================================

  const handleDelete = (id) => {

    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    )

    setTasks(updatedTasks)
  }


  // =========================================
  // EDIT TASK
  // =========================================

  const handleEdit = (id) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {
          ...task,
          title: task.title + " (Edited)"
        }

      }

      return task
    })

    setTasks(updatedTasks)
  }


  // =========================================
  // FILTER TASKS
  // =========================================

  const filteredTasks = tasks.filter((task) => {

    if (activeFilter === "All") {

      return true
    }

    return task.status === activeFilter
  })


  return (

    <div className="p-6 bg-[#f8f9fc] min-h-screen">

      {/* ========================================= */}
      {/* TOP SECTION */}
      {/* ========================================= */}

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">

          Tasks

        </h1>


        <button onClick={() => navigate('/layout/addtask')} className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold cursor-pointer ">

          + Add Task

        </button>

      </div>


      {/* ========================================= */}
      {/* FILTER BUTTONS */}
      {/* ========================================= */}

      <div className="flex gap-4 mb-8">

        <button
          onClick={() => setActiveFilter("All")}
          className={`
            px-6 py-3 rounded-xl border

            ${activeFilter === "All"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border-gray-200"
            }
          `}
        >

          All

        </button>


        <button
          onClick={() => setActiveFilter("Pending")}
          className={`
            px-6 py-3 rounded-xl border

            ${activeFilter === "Pending"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border-gray-200"
            }
          `}
        >

          Pending

        </button>


        <button
          onClick={() => setActiveFilter("In Process")}
          className={`
            px-6 py-3 rounded-xl border

            ${activeFilter === "In Process"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border-gray-200"
            }
          `}
        >

          In Progress

        </button>


        <button
          onClick={() => setActiveFilter("Completed")}
          className={`
            px-6 py-3 rounded-xl border

            ${activeFilter === "Completed"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border-gray-200"
            }
          `}
        >

          Completed

        </button>

      </div>


      {/* ========================================= */}
      {/* TASK TABLE */}
      {/* ========================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Table Header */}

        <div className="grid grid-cols-4 p-5 border-b border-gray-200 font-semibold text-gray-700">

          <p>Title</p>

          <p>Status</p>

          <p>Due Date</p>

          <p>Actions</p>

        </div>


        {/* ========================================= */}
        {/* TASKS */}
        {/* ========================================= */}

        {

          filteredTasks.map((task) => (

            <div
              key={task.id}
              className="grid grid-cols-4 p-5 border-b border-gray-100 items-center"
            >

              {/* Title */}

              <h1 className="text-lg font-medium">

                {task.title}

              </h1>


              {/* Status */}

              <div>

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


              {/* Due Date */}

              <p className="text-gray-600">

                {task.dueDate}

              </p>


              {/* Actions */}

              <div className="flex gap-5">

                <button
                  onClick={() => handleEdit(task.id)}
                  className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
                >

                  <Pencil size={20} />

                </button>


                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:text-red-700 transition cursor-pointer"
                >

                  <Trash2 size={20} />

                </button>

              </div>

            </div>

          ))

        }

      </div>


      {/* ========================================= */}
      {/* PAGINATION */}
      {/* ========================================= */}

      <div className="flex items-center gap-3 mt-8">

        <button className="px-5 py-2 border border-gray-200 rounded-lg bg-white text-gray-400">

          Previous

        </button>


        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">

          1

        </button>


        <button className="px-5 py-2 border border-gray-200 rounded-lg bg-white text-gray-600">

          Next

        </button>

      </div>

    </div>
  )
}

export default Task