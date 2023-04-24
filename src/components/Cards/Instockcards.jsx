import React from 'react'
import CountUp from 'react-countup';

function Instockcards({nozzle,total}) {
  return (
      <div className=' bg-gray-100 p-3 relative rounded-3xl drop-shadow-2xl w-[300px] h-[400px]'>
          <h3 className='text-lg font-extrabold text-center mb-5'>Nozzle {nozzle}</h3>
          <div className=' flex mt-9 items-center justify-center border-[12px] rounded-full border-r-blue-900 border-b-orange-500 border-l-orange-500 border-t-blue-900 mx-auto w-[200px] h-[200px]'>
              <h3 className='text-5xl font-extrabold'><CountUp end={total} /></h3>
          </div>
          <h3 className='text-lg absolute bottom-[40px] left-8 font-extrabold'>Total : {total} liters</h3>
    </div>
  )
}

export default Instockcards