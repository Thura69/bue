import React from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { RiOilFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'; 
import { LogoutUser } from '../redux/slices/LoginSlice';
import { useSelector,useDispatch } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.login);
  const who = user.name;
  const legit = user.login;
  const dispatch = useDispatch()



  return (
    <header className='fixed top-0 left-0 right-0  z-50  h-[100px] flex items-center justify-center bg-[#dfe4ea] '>
          <div className='w-[90%] flex flex-col justify-between items-center mx-auto'>
              <div className='logo mt-5 w-full flex items-center justify-between'>
                  <div className='text-lg font-bold'>Digital Engineering Tech Ltd.</div>
          {
            legit? <ul className='flex w-[40%] items-center justify-start text-sm gap-10'>
                      <li className='bg-blue-900 text-white px-3 py-2 rounded-lg'> <Link to="/home">Home</Link></li>
                      <li className='px-3 py-4 group duration-1000'><p className='flex items-center relative justify-center gap-2 cursor-pointer '>Report <MdOutlineArrowDropDown /></p>
                      <ul className='bg-blue-900 z-50 mt-4 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2'>
                              <li className=' cursor-pointer  duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black'>
                                <Link to="/fuelinreport">Fuel in Report</Link></li>
                              <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black'> <Link to="/dailysalereport">Daily Sale Report</Link></li>
                              <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black'><Link to="/fuelbalancereport">Fuel Balance Report</Link></li>
                              <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black'><Link to="/salesummeryreport">Sale Summery Report</Link></li>
                              {
                                who === "admin"?   <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black'><Link to="/saleinvoicereport">Sale Invoice Report</Link></li>:''
                              }
                  
                              
                      </ul>
                      
              </li>
              {
                who === "admin"?  <li className='text-black px-3 py-2 rounded-lg'> <Link to="/saleinvoicereport">Sale Invoice</Link></li>:''
                     }
                      <li className='px-3 py-4 group '><p className='flex items-center relative justify-center gap-2 cursor-pointer '>My Account <MdOutlineArrowDropDown /></p>
                       <ul className='bg-blue-900 mt-4 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2'>
                              <li className=' cursor-pointer  duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center text-xs  rounded-md hover:text-black'>Change Password</li>
                  <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black' onClick={()=>{dispatch(LogoutUser())}}>Logout</li>
                    </ul>
              </li>
                 

              </ul>:''
                  }
              </div>
              <div className=' text-sm font-extralight w-full'>
              <h3 className='flex gap-3 items-center mb-7'> <RiOilFill/>Filling Station Central Management System </h3>   
                  </div>
             
          </div>     
   </header>
  )
}

export default Header