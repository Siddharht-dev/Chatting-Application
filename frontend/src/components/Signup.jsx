import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { toast } from "react-hot-toast"

export const Signup = () => {

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("http://localhost:8080/api/v1/user/register", user, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });
      if (resp.data.success) {
        navigate("/login");
        toast.success(resp.data.message);
      }

      setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })

    }
    catch (e) {
      console.log(e.response.data);
      toast.error(e.response.data.message);
    }

  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='p-6 h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center text-gray-300'>Signup</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Full Name</span>
            </label>
            <input className='w-full input input-borderedh-10 hover:bg-gray-800'
              type="text"
              placeholder='Full Name'
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Username</span>
            </label>
            <input className='w-full input input-borderedh-10 hover:bg-gray-800'
              type="text"
              placeholder='Enter your Username'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}

            />     </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Password</span>
            </label>
            <input className='w-full input input-borderedh-10 hover:bg-gray-800'
              type="password"
              placeholder='Create Password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}

            />         </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Confirm Password</span>
            </label>
            <input className='w-full input input-bordered-10 hover:bg-gray-800'
              type="password"
              placeholder='Confirm Password'
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            />
          </div>
          <div className="flex items-center gap-6 my-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="radio"
                checked={user.gender === "Male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <span>Male</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="radio"
                checked={user.gender === "Female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <span>Female</span>
            </label>
          </div>
          <div className='flex text-center'>
            <p>Already have an account?</p>
            <div className='mx-2'>
              <Link className='text-red-200' to="/login">
                signup
              </Link>
            </div>

          </div>

          <div>
            <button type='submit' className="btn w-full mt-4 btn-sm sm:btn-md lg:btn-lg bg-gray-850 hover:bg-black">Signup</button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Signup;