import React from 'react'
import Sidebar from "./Sidebar"
import MessageContainer from "./MessageContainer"

export const Homepage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Homepage;