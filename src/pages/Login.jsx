import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/slices/LoginSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = usernameRef.current;
        const password = passwordRef.current;
        
        const user = { name:name.value, password:password.value };

        if (user.name === "PPRD" || user.password === 'pprd') {
            dispatch(LoginUser("user"));
            navigate("/home");
        }
        if (user.name === "ADMIN" || user.password === 'admin') {
            dispatch(LoginUser('admin'));
            navigate('/home')
        }
    };

  return (
      <div className='w-screen h-[100svh] flex items-center justify-center'>
          <div className=' bg-gray-50 w-[600px] h-[300px] p-5 drop-shadow-lg rounded-lg'>
          <h3 className='text-xl'>Please Sign in</h3>
          <form onSubmit={handleSubmit} className=' gap-4 relative mt-5 flex flex-col h-[200px]'>
              <input ref={usernameRef} className=' border-[0.5px] border-gray-600 rounded-md h-[50px] px-2' placeholder='username'></input>  
              <input ref={passwordRef} className=' border-[0.5px] border-gray-600 rounded-md h-[50px] px-2' placeholder='password'></input>  
              <button type='submit' className='absolute bottom-0 right-0 bg-blue-900 p-3 text-sm rounded-lg text-white'>Sign in</button>
              
          </form>
          </div>
          
    </div>
  )
}

export default Login