
import { useState } from "react"

const Addtask = () => {

  // =========================================
  // FORM STATE
  // =========================================

  const [formData, setFormData] = useState({

    title: "",
    description: "",
    priority: "",
    status: "",
    dueDate: ""

  })


  // =========================================
  // HANDLE CHANGE
  // =========================================

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    })

  }




  const handleSubmit = (e) => {

    e.preventDefault()

    console.log(formData)

    alert("Task Created Successfully ")

  }


  return (

    <div className="p-6 bg-[#f8f9fc] min-h-screen">

      {/* ========================================= */}
      {/* TOP SECTION */}
      {/* ========================================= */}

      <h1 className="text-4xl font-bold mb-2">

        Add New Task

      </h1>


      <div className="flex items-center gap-2 text-gray-400 mb-8">

        <p>Dashboard</p>

        <span>›</span>

        <p>Tasks</p>

        <span>›</span>

        <p className="text-blue-600">

          Add Task

        </p>

      </div>


      {/* ========================================= */}
      {/* FORM CARD */}
      {/* ========================================= */}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
      >

        <div className="p-6">

          <h1 className="text-2xl font-semibold mb-8">

            Task Details

          </h1>


          {/* ========================================= */}
          {/* TITLE */}
          {/* ========================================= */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">

              Title <span className="text-red-500">*</span>

            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full border border-gray-200 rounded-lg p-4 outline-none focus:border-blue-500"
              required
            />

          </div>


          {/* ========================================= */}
          {/* DESCRIPTION */}
          {/* ========================================= */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">

              Description

            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description (optional)"
              rows={5}
              className="w-full border border-gray-200 rounded-lg p-4 outline-none focus:border-blue-500 resize-none"
            ></textarea>

          </div>


          {/* ========================================= */}
          {/* PRIORITY + STATUS */}
          {/* ========================================= */}

          <div className="grid grid-cols-2 gap-5 mb-6">


            {/* Priority */}

            <div>

              <label className="block mb-2 font-medium">

                Priority

              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-4 outline-none focus:border-blue-500"
              >

                <option value="">

                  Select priority

                </option>

                <option value="High">

                  High

                </option>

                <option value="Medium">

                  Medium

                </option>

                <option value="Low">

                  Low

                </option>

              </select>

            </div>


            {/* Status */}

            <div>

              <label className="block mb-2 font-medium">

                Status

              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-4 outline-none focus:border-blue-500"
              >

                <option value="">

                  Select status

                </option>

                <option value="Pending">

                  Pending

                </option>

                <option value="In Process">

                  In Process

                </option>

                <option value="Completed">

                  Completed

                </option>

              </select>

            </div>

          </div>


          {/* ========================================= */}
          {/* DUE DATE */}
          {/* ========================================= */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">

              Due Date

            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg p-4 outline-none focus:border-blue-500"
            />

          </div>

        </div>


        {/* ========================================= */}
        {/* FOOTER BUTTONS */}
        {/* ========================================= */}

        <div className="border-t border-gray-200 p-6 flex justify-end gap-4">

          <button
            type="button"
            className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
          >

            Cancel

          </button>


          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >

            Create Task

          </button>

        </div>

      </form>

    </div>
  )
}

export default Addtask