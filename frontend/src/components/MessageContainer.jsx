import React from 'react'
import SendInput from './SendInput';
import { Messages } from './Messages';

export const messageContainer = () => {
  return (
    <div className='md: min-w-[550px] flex flex-col'>
        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
          <div className='avatar online'>
            <div className="w-12 rounded-full">
              <img src="https://imgs.search.brave.com/3cAFR5SChliqkVwmxkx5s8AFQx-WY_jXmf513HTWK6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2N1dGUtdGlr/dG9rLXByb2ZpbGUt/cGljdHVyZXMtMWxl/NG81cno5b2VwNmVr/eS5qcGc" alt="user-profile" />
            </div>
          </div>

          <div className=''>
            <div className="flex gap-2 justify-between">
              <p>Siddharth Chhimwal</p>
            </div>
          </div>

        </div>
          <Messages/>
        <SendInput/>
    </div>
  )
}

export default messageContainer;