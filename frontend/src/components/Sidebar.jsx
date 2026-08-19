import React from 'react'
import { ImSearch } from "react-icons/im";
import { OtherUsers } from './OtherUsers';

export const sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form action="" className='flex items-center gap-2 w-full'>
        <input className='input input-bordered rounded-md bg-white text-black flex-1'
          type="text"
          placeholder='Search...'
        />
        <button type='submit' className='btn bg-zinc-800 rounded-lg'>
          <ImSearch className='w-6 h-6 outline-none' />
        </button>
        <div className="divider px-3"></div>
      </form>
      <div className='divider px-3'></div>
        <OtherUsers/>
      <div className='mt-2'>
        <button className='btn btn-sm bg-zinc-800'>Logout</button>
      </div>
    </div>
  )
}

export default sidebar;