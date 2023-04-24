import React,{useEffect, useState} from 'react'

function Edit({ setActiveEdit ,updateUser,userData,setUserData}) {
    const [username, setUserName] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();
    const [permits, setPermits] = useState();


    
    useEffect(() => {
        const user = userData.filter((e) => (e.id === updateUser));
        setUserName(user[0].username);
        setName(user[0].name);
        setEmail(user[0].email);
        setRole(user[0].role);
        setPermits(user[0].permits);

    }, [userData,updateUser])
    
    const handleUpdate = () => {
        const user = {
            id:updateUser,
            username,
            name,
            email,
            role,
            permits
        }

        const renew = userData.filter((e) => e.id !== updateUser);
        renew.push(user);

        setUserData(renew);
        setActiveEdit(false);
    }


   

  return (
    <div className='edit absolute flex items-center justify-center top-0 left-0 right-0 bottom-0  bg-[#060606b0]'>
    <div className='border-2 p-3 w-[400px] h-[300px] bg-gray-100'>
              <div className='flex items-center justify-start gap-3'>
                  <p className='w-[100px]'>User Name :</p>
                  <input className='w-[200px] border-[0.8px] border-black p-2 rounded-sm' placeholder='' onChange={(e)=>setUserName(e.target.value)} value={username} />
              </div>  
              <div className='flex items-center mt-3 justify-start gap-3'>
                  <p className='w-[100px]'>Name :</p>
                  <input className='w-[200px] border-[0.8px] border-black p-2 rounded-sm' placeholder='' onChange={(e)=>setName(e.target.value)} value={name} />
              </div>  
               <div className='flex items-center mt-3 justify-start gap-3'>
                  <p className='w-[100px]'>Email :</p>
                  <input className='w-[200px] border-[0.8px] border-black p-2 rounded-sm' placeholder='' onChange={(e)=>setEmail(e.target.value)} value={email} />
              </div> 
               <div className='flex items-center mt-3 justify-start gap-3'>
                  <p className='w-[100px]'>Role :</p>
                  <input className='w-[200px] border-[0.8px] border-black p-2 rounded-sm' placeholder='' onChange={(e)=>setRole(e.target.value)} value={role} />
              </div>  
               <div className='flex items-center mt-3 justify-start gap-3'>
                  <p className='w-[100px]'>Permits :</p>
                  <input  type="checkbox" id="vehicle1"  name="vehicle1" value="normal_cash"/>
  <label for="vehicle1"> All</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="corporate_credit"/>
  <label for="vehicle2"> Edit</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="presale"/>
  <label for="vehicle3"> Read</label>
   <input type="checkbox" id="vehicle4" name="vehicle4" value="prepaid"/>
  <label for="vehicle4"> Check</label>
              </div>  
              <div className='flex mt-5 gap-3 justify-center items-center'>
                  <button className='w-[70px] rounded-md bg-green-500 h-[40px]' onClick={handleUpdate}>Update</button>
                  <button className='w-[70px] rounded-md bg-red-500 h-[40px]' onClick={()=>setActiveEdit(false)}>Cancel</button>

              </div>
    </div>
    </div>
  )
}

export default Edit