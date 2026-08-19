import React, { use, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { toast } from "react-hot-toast"
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

export const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8080/api/v1/user/login", user, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });
      navigate("/");
      dispatch(setAuthUser(resp.data))

      setUser({
      username: "",
      password: ""
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
        <h1 className='text-3xl font-bold text-center text-gray-300'>Login</h1>
        <form onSubmit={handleSubmit} action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Username</span>
            </label>
            <input className='w-full input input-borderedh-10 hover:bg-gray-800'
              type="text"
              placeholder='Enter your Username'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Password</span>
            </label>
            <input className='w-full input input-bordered-10 hover:bg-gray-800'
              type="password"
              placeholder='Enter Password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className='flex text-center mt-4'>
            <p>Don't have an account?</p>
            <div className='mx-2'>
              <Link className='text-red-200' to="/register">
                Register
              </Link>
            </div>

          </div>

          <div>
            <button type='submit' className="btn w-full mt-4 btn-sm sm:btn-md lg:btn-lg bg-gray-850 hover:bg-black">Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login;