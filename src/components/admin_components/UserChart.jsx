import React,{useState} from 'react'
import User from './User'
import Edit from './Edit';


function UserChart({userData,setUserData}) {
    const [activeEdit, setActiveEdit] = useState(false);
    const [updateUser, setUpdateUser] = useState();

  return (
    <div className='mt-12'>
          <div className='userChartHead p-2 border-b border-[0.8] border-gray-400 bg-[#04AA6D] flex'>
              <div className='flex-1'><h3>User Name</h3></div>
              <div className='flex-1'><h3>Name</h3></div>
              <div className='flex-1'><h3>Email</h3></div>
              <div className='flex-1'><h3>Role</h3></div>
              <div className='flex-1'><h3>Permit</h3></div>
              <div className='flex-1'><h3>Tools</h3></div>


          </div>      
          {
              userData.map((e, i) => (<User setUpdateUser={setUpdateUser} setActiveEdit={setActiveEdit} userData={userData} setUserData={setUserData} key={i} id={e.id} username={e.username} name={e.name} email={e.email} role={e.role} permits={e.permits} />))
          }
          <div className='userChartHead p-2 border-b border-[0.8] border-gray-400 bg-[#04AA6D] flex'>
              <div className='flex-1'><h3>User Name</h3></div>
              <div className='flex-1'><h3>Name</h3></div>
              <div className='flex-1'><h3>Email</h3></div>
              <div className='flex-1'><h3>Role</h3></div>
              <div className='flex-1'><h3>Permit</h3></div>
              <div className='flex-1'><h3>Tools</h3></div>


          </div>   
          {
              activeEdit?  <Edit userData={userData} setUserData={setUserData} updateUser={updateUser} setActiveEdit={setActiveEdit} />:""
        }
    </div>
  )
}

export default UserChart