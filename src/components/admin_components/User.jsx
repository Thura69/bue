import React,{useRef} from 'react'
import UserPic from '../../assets/images/user.webp';
import { MdOutlineArrowDropDown } from 'react-icons/md';


function User({ id, username, name, email, role, permits,setUserData,userData,setActiveEdit,setUpdateUser }) {
    const userRef = useRef();
    const handleEdit = () => {
        setActiveEdit(true);
        setUpdateUser(userRef.current.id);
    };
    const handleDelete = () => {
        const id = userRef.current.id;
         
        const afterData = userData.filter((e) => e.id !== id);
        setUserData(afterData);
    }
  return (
   <div ref={userRef} key={id} id={id} className='User p-2 bg-slate-200 h-[60px] justify-center items-center mt-1 flex'>
              <div className='flex-1'>
              <div className='flex justify-start gap-2 items-center'>
                  <img className='w-[30px] h-[30px]' src={UserPic} alt="user" />
                  <h3 className='text-blue-900'>{username}</h3>
              </div>
              </div>
          <div className='flex-1'><h3>{name}</h3></div>
          <div className='flex-1'><h3>{email}</h3></div>
          <div className='flex-1'><h3>{role}</h3></div>
          <div className='flex-1  '><h3 className='flex relative w-[70px] group justify-start items-center cursor-pointer'>Permit<MdOutlineArrowDropDown />
          
           <ul className=' z-20 p-2 hidden group-hover:flex flex-col top-full absolute bg-blue-400 rounded-md w-[80px]'>
                  {
                      permits.map((e) => <li key={id} className='text-xs p-1'>{e}</li>)
                 }
          </ul>
          </h3>
         
          </div>
          <div className='flex-1 flex items-center justify-start gap-3'>
              <button className=' bg-green-500 w-[60px] h-[30px] rounded-md' onClick={handleEdit}>Edit</button>
              <button className=' bg-red-500 w-[60px] h-[30px] rounded-md' onClick={handleDelete}>Delete</button>

          </div>
          </div>    
  )
}

export default User