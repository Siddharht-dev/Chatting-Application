import React from 'react'

export const OtherUser = () => {
  return (
    <div>
        <div className='flex gap-2 items-center hover:bg-pink-300 rounded-lg p-2 cursor-pointer '>
        <div className='avatar online'>
          <div className="w-12 rounded-full">
            <img src="https://imgs.search.brave.com/3cAFR5SChliqkVwmxkx5s8AFQx-WY_jXmf513HTWK6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2N1dGUtdGlr/dG9rLXByb2ZpbGUt/cGljdHVyZXMtMWxl/NG81cno5b2VwNmVr/eS5qcGc" alt="user-profile" />
          </div>
        </div>

        <div className=''>
          <div className="flex gap-2 justify-between text-black">
            <p>Siddharth Chhimwal</p>
          </div>
        </div>

      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}
