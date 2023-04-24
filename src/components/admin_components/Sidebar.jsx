import React,{useState} from 'react'
import { HiUsers } from 'react-icons/hi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FiMinimize2,FiMaximize2 } from 'react-icons/fi';


function Sidebar() {
    const [isMizi, setIsMizi] = useState(false);
  return (
      <div className={isMizi?"flex-[0.3] relative bg-[#c8caca] h-[88svh] ":"flex-[1] relative bg-[#c8caca] h-[88svh]"}>
         
          <ul className='p-3 mt-4 text-sm'>
              <li className='flex duration-300  hover:bg-white my-3 cursor-pointer p-2 rounded-md items-center justify-center'>
                   {
              isMizi?<FiMaximize2 onClick={()=>setIsMizi(!isMizi)} className=' scale-125 cursor-pointer left-2 top-2'/>: <FiMinimize2 onClick={()=>setIsMizi(!isMizi)} className=' scale-125 cursor-pointer left-2 top-2' />
   }
              </li>
              <li className='flex duration-300  hover:bg-white my-3 cursor-pointer p-2 rounded-md items-center justify-start gap-3'><HiUsers className='scale-125' />
                  {
                      isMizi?"":"User Control"
              }
              </li>   
              <li className='flex duration-300 hover:bg-white my-3 cursor-pointer p-2 rounded-md items-center justify-start gap-3'><BsFillFuelPumpFill />
                  {
                      isMizi?"":"Instock"
              }
              </li>
    </ul>
    </div>
  )
}

export default Sidebar