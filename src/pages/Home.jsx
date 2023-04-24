import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Home() {
  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  

  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
  },[navigate,user])

  const card = "w-[300px] flex items-center justify-center mx-auto h-[150px] text-black rounded-md bg-blue-400 border-[1px] drop-shadow-lg border-black"

  return (
      <div className='w-screen  py-[100px]'>
            {/* <div className=' -z-10 mt-[100px] drop-shadow-lg flex flex-col justify-center bg-white rounded-lg items-center w-[700px] p-5'>
          <h3 className='text-center mb-10 text-md'>Welcome <span className='text-blue-900 font-bold'>Central Management System</span></h3>
     <img className='w-[400px]' src={Chart} alt="chart" ></img>
          </div> */}
      <div className=' mt-[30px] py-[20px] w-[98%] mx-auto'>
        {
          user.name === "admin"?  <div className='usercontrol mb-[40px]'>
          <h1 className='text-xl ml-[30px] mb-[10px]'>Admin Panel</h1>
           <div className="w-[300px] mt-[30px] ml-[30px] flex items-center justify-center h-[150px] text-black rounded-md bg-[#04AA6D] border-[1px] drop-shadow-lg border-black">
              <Link to="/adminpanel">  <h3 className='hover:underline'>Dashboard</h3></Link>
              </div>
    </div>:''
        }
         <div className='usercontrol mb-[40px]'>
          <h1 className='text-xl ml-[30px] mb-[10px]'>Instock</h1>
           <div className="w-[300px] mt-[30px] ml-[30px] flex items-center justify-center h-[150px] text-black rounded-md bg-[#04AA6D] border-[1px] drop-shadow-lg border-black">
              <Link to="/instock">  <h3 className='hover:underline'>Instock</h3></Link>
              </div>
    </div>
    <div className='report'>
     <h1 className='text-xl ml-[30px] mb-[10px]'>Reports</h1>
          <Swiper
      className='mt-[40px]'
      spaceBetween={0}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
              <div className={card}>
              <Link to="/fuelinreport">  <h3 className='hover:underline'>Fuel in Report</h3></Link>
              </div>      
      </SwiperSlide>
      <SwiperSlide>
              <div className={card}>
              <Link to="/dailysalereport"><h3 className='hover:underline'>Daily Sale Report</h3></Link>
              
              </div>          
      </SwiperSlide>
      <SwiperSlide>
              <div className={card}>
              <Link to="/fuelbalancereport"> <h3 className='hover:underline'>Fuel Balance Report</h3></Link>
             
              </div>         
      </SwiperSlide>
            <SwiperSlide>
              <div className={card}>
              <Link to="/salesummeryreport"><h3 className='hover:underline'>Sale Summary Report</h3></Link>
              
              </div>    
      </SwiperSlide>
    </Swiper>
        </div>
        <div className='data_input mt-[40px]'>
          <h1 className='text-xl ml-[30px] mb-[10px]'>Data Input</h1>
           <Swiper
      className='mt-[40px]'
      spaceBetween={0}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
              <div className={card}>
              <Link to="/fueldatainput">  <h3 className='hover:underline'>Fuel Data Input</h3></Link>
              </div>      
      </SwiperSlide>
      <SwiperSlide>
              <div className={card}>
              <Link to="/dailysaleinput"><h3 className='hover:underline'>Daily Sale Data Input</h3></Link>
              
              </div>          
      </SwiperSlide>
      <SwiperSlide>
              <div className={card}>
              <Link to="/balanceinput"> <h3 className='hover:underline'>Fuel Balance Data Input</h3></Link>
             
              </div>         
      </SwiperSlide>
            <SwiperSlide>
              <div className={card}>
              <Link to="/saleinput"><h3 className='hover:underline'>Sale Summary Data Input</h3></Link>
              
              </div>    
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
     </div>
    
  )
}

export default Home