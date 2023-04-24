import React,{useState} from 'react'
import UserChart from './UserChart'
import USERS from '../../assets/data/UserData.json';


function UserControl() {
    const [searchValue, setSearchValue] = useState();
    const [userData, setUserData] = useState(USERS);
    

   

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(USERS);
       
        if (searchValue.length > 1) {
            const searchUser = USERS.filter((e) => e.role === searchValue.toLowerCase());
            if (!searchUser) {
                setUserData(USERS)
            } else {
             setUserData(searchUser);
                
            }
             setSearchValue(''); 
            
        } else {
        setSearchValue('');
        }

    }

  return (
      <div className='flex-[8] p-6 text-sm select-none'>
          <div className='add_new flex gap-3 items-center justify-start'>
              <h3 className=' font-light text-lg'>Users</h3>
              <button className='border-[0.8px] text-blue-900  bg-gray-300 border-black py-1 px-2'>Add new</button>
          </div>
          <div className='all_user my-4 flex items-center justify-between'>
              <h3 className='flex gap-2'><span>All (6)</span>|<span className='text-blue-900'>Having Users (1)</span>|<span className='text-blue-900'>No Users (5)</span>|<span className='text-blue-900'>Built-in(5)</span>|<span className='text-blue-900'>Custom (1)</span></h3>
              <div>
                  <form onSubmit={handleSubmit} className='flex items-center justify-center gap-3'>
                      <input className='border-[0.8px] py-1 px-4 border-black' onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} placeholder='Search Role'/>
                      <button className='border-[0.8px] border-black bg- p-1' type='submit'>Search Roles</button>
                  </form>           
              </div>
          </div>
          <UserChart userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default UserControl