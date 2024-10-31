"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler= (e) => {
    e.preventDefault()
    setMainTask ([...mainTask, {title, desc}])
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    console.log(mainTask)

  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>
  
  if(mainTask.length>0) {
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className= "flex items-center justify-between mb-6">
          <div className= "flex justify-between mb-4 w-2/3">
            <h5>{i+1}</h5>
            <h5 className= "text-2xl font-semibold">{t.title}</h5>
            <h6 className= "text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
          onClick= {() => {
            {deleteHandler(i)}
          }}
           className= "bg-zinc-500 text-white rounded font-bold p-2">Delete</button>
        </li>
      );
    });
  }
  
  return (
    <>
    <h1 className= 'bg-red-500 text-white p-5 text-center text-2xl font-bold'>Aarchi's Todo List</h1>
    <form onSubmit= {submitHandler}>
      <input className= 'border-red-400 border rounded-3xl text-2xl p-4 m-8 px-4 py-2' type= "text"
      placeholder= "Enter your task"
      value= {title}
      onChange= {(e) => {
        settitle(e.target.value)
      }}
      />
      <input className= 'border-red-400 border rounded-3xl text-2xl p-4 m-8 px-4 py-2' type= "text"
      placeholder= "Enter Description here"
      value= {desc}
      onChange= {(e) => {
        setdesc(e.target.value)
      }}
      />
      <button className= 'bg-gray-600 w-2/3 hover:bg-gray-950 transition-all hover:scale-105  text-white font-bold p-4 m-4 px-4 py-2 text-2xl rounded-full'>Add Task</button>
    </form>
    <hr/>
    <div className= 'p-5 bg-red-300'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page