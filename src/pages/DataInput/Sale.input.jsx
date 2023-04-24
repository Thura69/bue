import React, { useRef,useEffect } from 'react'
import MOCK_DATA from '../../assets/data/MOCK_DATA-3.json';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SaleInput() {
    const fuelDateRef = useRef();
    const fuelCodeRef = useRef();
    const driverRef = useRef();
    const bowserRef = useRef();
    const tankRef = useRef();
    const stationRef = useRef();
    const balaceRef = useRef();
    const remarkRef = useRef();
    const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  

  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
  },[navigate,user])


    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newdata = {
            fuel_in_date: fuelDateRef.current.value,
            fuel_in_code: fuelCodeRef.current.value,
            driver: driverRef.current.value,
            bowser: bowserRef.current.value,
            tank: tankRef.current.vlaue,
            station: stationRef.current.value,
            tank_balance: balaceRef.current.value,
            remark:remarkRef.current.value
        }

        MOCK_DATA.push(newdata);
    }


    const div = "flex items-center justify-start gap-2 mt-2";
    const two = "flex mt-3 items-center justify-evenly gap-3";
    const input = "rounded-sm border-[0.8px] border-black p-2";
    const header = "text-md w-[200px]";
    const tableHeader = "flex-1 flex items-center justify-center p-2 border-[0.8px] bg-green-600";
    const tableChild = "flex-1 flex items-center justify-start p-2 border-[0.8px] bg-gray-100";

  return (
      <div className='mt-[100px]'>
          <div className='w-[98%] py-[40px] mx-auto'>
              <h3 className='text-2xl font-extrabold'>Sale Data Input</h3>
              <div className=' p-4 mt-[40px] bg-gray-300'>
                  <form onSubmit={handleSubmit}>
                      <div className={two}>
                          <div className={div}>
                          <h3 className={header}>Sale in Date :</h3>
                          <input ref={fuelDateRef} className={input} placeholder="dd/MM/yyyy"/>
                      </div>
                      <div className={div}>
                          <h3 className={header}>Total Sale :</h3>
                          <input ref={fuelCodeRef} className={input} placeholder="####"/>
                      </div>
                      </div>
                      <div className='flex-1 mt-12 flex items-center justify-center gap-6'>
              <button type='onSubmit' className=' bg-green-500 w-[100px] h-[40px] rounded-md' >Add</button>
              <button className=' bg-red-500 w-[100px] h-[40px] rounded-md'>Cancel</button>

          </div>
                  </form>
              </div>
              <div className='mt-3'>
                  <h3>Last Data</h3>
              </div>
              <div className=' flex flex-col mt-3  bg-blue-100'>
            <div className=' text-sm text-center flex'>
                      <div className={tableHeader}>Sale in Date</div>
                  <div className={tableHeader}>Total</div>
                      
              </div>
              <div className=' text-sm text-center flex'>
                  <div className={tableChild}>null</div>
                  <div className={tableChild}>null</div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default SaleInput