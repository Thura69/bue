import React,{useEffect, useState} from 'react'
import Instockcards from '../components/Cards/Instockcards'
import { useMqttState } from 'mqtt-react-hooks';
import { useSubscription } from 'mqtt-react-hooks';
import axios from 'axios';


function Instock() {
  const [nozzle_one, setNozzle_one] = useState(0)
   const [nozzle_two, setNozzle_two] = useState(0)
   const [nozzle_three, setNozzle_three] = useState(0)
  const [totalLiter, setTotalLiter] = useState(0);
   const [nozzle_four, setNozzle_four] = useState(0)
  


  //  useEffect(() => {
  //   // create a interval and get the id
  //   const myInterval = setInterval(() => {
  //     setNozzle_one((prevTime) => prevTime + 1);
  //   }, 5000);
  //   // clear out the interval using the id when unmounting the component
  //   return () => clearInterval(myInterval);
  //  }, []);
  // useEffect(() => {
  //   // create a interval and get the id
  //   const myInterval = setInterval(() => {
  //     setNozzle_two((prevTime) => prevTime + 1);
  //   }, 5000);
  //   // clear out the interval using the id when unmounting the component
  //   return () => clearInterval(myInterval);
  // }, []);
  // useEffect(() => {
  //   // create a interval and get the id
  //   const myInterval = setInterval(() => {
  //     setNozzle_three((prevTime) => prevTime + 1);
  //   }, 3000);
  //   // clear out the interval using the id when unmounting the component
  //   return () => clearInterval(myInterval);
  // }, []);
  // useEffect(() => {
  //   // create a interval and get the id
  //   const myInterval = setInterval(() => {
  //     setNozzle_four((prevTime) => prevTime + 1);
  //   }, 2000);
  //   // clear out the interval using the id when unmounting the component
  //   return () => clearInterval(myInterval);
  // }, []);


  const { connectionStatus } = useMqttState();
  const { message } = useSubscription(['Fuelpump/set1']);

  useEffect(() => {
    const payloadData = message?.message;
    const payloadDataArray = payloadData?.split("");

     
    if (payloadDataArray) {
       if (payloadDataArray[0] === "1") {
      setNozzle_one((prevTime) => prevTime + 1);
      setTotalLiter((prevTime) => prevTime + 1);
      
       }
      


    if (payloadDataArray[1] === "1") {
      setNozzle_two((prevTime) => prevTime + 1);
      setTotalLiter((prevTime) => prevTime + 1);

    }
    
    if (payloadDataArray[2] === "1") {
      setNozzle_three((prevTime) => prevTime + 1);
      setTotalLiter((prevTime) => prevTime + 1);

    }
    

    if (payloadDataArray[3] === "1") {
      setNozzle_four((prevTime) => prevTime + 1);
      setTotalLiter((prevTime) => prevTime + 1);
      
    }
   
    
    }
    
    

  }, [message])
  

useEffect(() => {
    const payloadData = message?.message;
    const payloadDataArray = payloadData?.split("");
  
  let myInterval0;
  if (payloadDataArray) {
     myInterval0 = setInterval(() => {
      if (payloadDataArray[0] === "0") {
       setNozzle_one(0);
     }
  }, 3000);
  }
  
  return () => clearInterval(myInterval0);
}, [message])
  
useEffect(() => {
    const payloadData = message?.message;
    const payloadDataArray = payloadData?.split("");
  
  let myInterval0;
  if (payloadDataArray) {
     myInterval0 = setInterval(() => {
      if (payloadDataArray[1] === "0") {
       setNozzle_two(0);
     }
  }, 3000);
  }
  
  return () => clearInterval(myInterval0);
}, [message])
  
useEffect(() => {
    const payloadData = message?.message;
    const payloadDataArray = payloadData?.split("");
  
  let myInterval0;
  if (payloadDataArray) {
     myInterval0 = setInterval(() => {
      if (payloadDataArray[2] === "0") {
       setNozzle_three(0);
     }
  }, 3000);
  }
  
  return () => clearInterval(myInterval0);
}, [message])
  
  useEffect(() => {
    const payloadData = message?.message;
    const payloadDataArray = payloadData?.split("");
  
  let myInterval0;
  if (payloadDataArray) {
     myInterval0 = setInterval(() => {
      if (payloadDataArray[3] === "0") {
       setNozzle_four(0);
     }
  }, 3000);
  }
  
  return () => clearInterval(myInterval0);
  },[message])

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get(
   "http://54.179.72.138:9000/nozzle"
  );
      const latestData = response.data;
      if (latestData) {
        console.log(latestData.result)

        const latestDataArray = latestData.result[0];
        

        
      

        const currentLiterArray = latestDataArray.currentLiter;
       


        setTotalLiter(currentLiterArray);


      }
    }

    fetchData();
  },[])

  return (
    <div className='mt-[100px] h-[88svh]'>
          <div className='py-[20px] w-[98%] mx-auto'>
              <h3 className=' mt-6 text-center text-xl font-extrabold'>Your Liters  {connectionStatus}</h3>
          </div>    
          <div className='card_container mt-[60px] flex justify-center items-center gap-6'>
              <Instockcards nozzle={1} total={nozzle_one} />
              <Instockcards nozzle={2} total={nozzle_two} />
              <Instockcards nozzle={3} total={nozzle_three} />
               <Instockcards nozzle={4} total={nozzle_four}/>
      </div>
      <div className='text-center mt-6'>
        <h3>Total Liters : {totalLiter} liters </h3>
      </div>
    </div>
  )
}

export default Instock