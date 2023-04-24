import React, { useState,useEffect  } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiFillCalendar,AiFillPrinter } from 'react-icons/ai';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Daily() {
    const [activeCal_one, setActiveCal_one] = useState(false);
  const [activeCal_two, setActiveCal_two] = useState(false);
  const [fromValue, setFromValue] = useState(new Date());
  const [toValue, SetToValue] = useState(new Date());


  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  

  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
  },[navigate,user])
  return (
 <div className='mt-[100px]'>
      <div className='w-[98%] py-[30px] mx-auto'>
        <h3 className=' text-2xl font-extrabold'>Daily Sale Report</h3>
        <div>
          <form className='my-[50px] text-sm px-[30px]'>
            <div className='one  flex items-center justify-start gap-[100px]'>
              <div className='date_one relative flex items-center gap-3 justify-center'>
                <h3>From Date:</h3>
                <div className='border-[0.8px] w-[150px] flex items-center justify-center gap-3 px-2 py-1 border-black rounded-md' >
                 <AiFillCalendar className="scale-150"/> <input onClick={()=>{setActiveCal_one(true)}} className='w-full border-none outline-none' value={fromValue.toDateString()}/>
                </div>
                {
                  activeCal_one ? <div className="absolute top-[40px] w-[300px]">
                    <h3 onClick={()=>{setActiveCal_one(false)}} className='absolute font-extrabold cursor-pointer text-xs right-2 top-2'>close</h3>
                    <Calendar value={fromValue}  onChange={setFromValue} className="p-5" />
              </div>:""
                }
              </div>
               <div className='date_one relative gap-3 flex items-center justify-center'>
                <h3>To Date:</h3>
               <div className='border-[0.8px] w-[150px] flex items-center justify-center gap-3 px-2 py-1 border-black rounded-md' >
                  <AiFillCalendar className="scale-150" /> <input onClick={() => { setActiveCal_two(true) }} className='w-full border-none outline-none' value={toValue.toDateString()} />
                </div>
                {
                  activeCal_two?  <div className="absolute top-[40px] w-[300px]">
                   <h3 onClick={()=>{setActiveCal_two(false)}} className='absolute font-extrabold cursor-pointer text-xs right-2 top-2'>close</h3>
                    <Calendar value={toValue} onChange={SetToValue}  className="p-5" />
              </div>:""
              }
              </div>
              <div className='tank_one  gap-3 flex items-center justify-center'>
                <h3>Tank:</h3>
                <select name="cars" className='w-[300px] px-2 py-1 border-[0.8px] rounded-md border-black' id="cars">
    <option value="volvo">Please Select Tank...</option>
    <option value="volvo">.020(PPRD-0976)-Premium Tank 1</option>
    <option value="saab">.020(PPRD-0976)-Premium Tank 2</option>
    <option value="opel">.020(PPRD-0976)-Diesel Tank</option>
    <option value="audi">.020(PPRD-0976)-92 Tank 1</option>
    <option value="audi">.020(PPRD-0976)-92 Tank 2</option>
    <option value="audi">.020(PPRD-0976)-92 Tank 3</option>           
  </select>
              </div>
            </div>
            <div className='two mt-6 flex items-center justify-start gap-[100px]'>
              <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Bowser:</h3>
    <select name="cars" className='w-[300px] px-2 py-1 border-[0.8px] rounded-md border-black' id="cars">
    <option value="volvo">Please Select Bowser...</option>
    <option value="saab">1L-7971</option>
    <option value="saab">1C-7509</option>
    <option value="saab">1N-8502</option>
    <option value="saab">1A-3691</option>
    <option value="saab">1Z-9812</option>
    <option value="saab">1L-4562</option>
    <option value="saab">1T-2816</option>
    <option value="saab">1B-6382</option>
    <option value="saab">1N-5372</option>
    <option value="saab">1K-6382</option>
    <option value="saab">1O-2830</option>
    <option value="saab">1E-1832</option>
    <option value="saab">1M-9372</option>
                  
        
  </select>
              </div>
               <div className='Driver  gap-3 flex items-center justify-center'>
                <h3>Driver:</h3>
    <select name="cars" className='w-[300px] px-2 py-1 border-[0.8px] rounded-md border-black' id="cars">
    <option value="volvo">Please Select Driver...</option>
    <option value="saab">U Zaw Zaw</option>
    <option value="saab">U Tun Tun</option>
    <option value="saab">U Aye Min Tun</option>
    <option value="saab">U Thiha</option>
    <option value="saab">U Ye Yint</option>
    <option value="saab">U Kyaw Swar</option>
  </select>
              </div>
               <div className='Driver  gap-3 flex items-center justify-center'>
                <h3>Station:</h3>
    <select name="cars" className='w-[300px] px-2 py-1 border-[0.8px] rounded-md border-black' id="cars">
    <option value="volvo">Please Select Station...</option>
    <option value="saab">Zone 101.020(PPRD-0976)</option>
  </select>
              </div>
            </div>
            <div className='three mt-6 flex items-center justify-start gap-[100px]'>
              <div className='w-[160px] flex items-center justify-between'>
                  <input type="radio" id="summary" name="fav_language" value="HTML"/>
              <label for="summary">Summary</label>
             <input type="radio" id="detail" name="fav_language" value="CSS"/>
            <label for="detail">Detail</label>
            </div>
                <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Fuel in Code:</h3>
    <input className='border-[0.8px] w-[150px] gap-3 px-2 py-1 border-black rounded-md'>
    
                  
        
  </input>
              </div>
            </div>
            <div className='four mt-6 flex items-center justify-start gap-[10px]'>
              <button type='submit' className=' bg-blue-900 p-2  rounded-lg text-white'>Preview</button>
              <button type='submit' className=' bg-blue-900 p-2  rounded-lg text-white'>ShowAll</button>
            </div>
          </form>
        </div>
       
      </div>
      <div className='flex p-3 mt-[30px] items-center justify-start gap-3'>
          <button className='flex items-center justify-center gap-2 text-md' >To Excel <RiFileExcel2Fill /></button>
      <button className='flex items-center justify-center gap-2 text-md' >To Print <AiFillPrinter/></button>
    </div>
      
    </div>
  )
}

export default Daily