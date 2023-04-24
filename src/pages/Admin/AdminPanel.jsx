import React,{useEffect} from 'react'
import Sidebar from '../../components/admin_components/Sidebar'
import UserControl from '../../components/admin_components/UserControl'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  

  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
  },[navigate,user])
  return (
    <div className='mt-[100px] flex'>
          <Sidebar />
          <UserControl/>
    </div>
  )
}

export default AdminPanel