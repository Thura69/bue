import React,{useState,useEffect} from 'react'
import { AiFillCalendar } from 'react-icons/ai';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Saleinvoice() {
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
              <h3 className=' text-2xl font-extrabold'>Sale Invoice Report</h3>
              <div>
                  <form className='my-[50px] text-sm px-[30px]'>
                <div className='one  flex items-center justify-start gap-[100px]'>
                 <div className='w-[300px] flex items-center justify-between'>
                  <input type="radio" id="summary" name="fav_language" value="session_date"/>
                  <label for="summary">Session Date</label>
                  <input type="radio" id="detail" name="fav_language" value="transaction_date"/>
                  <label for="detail">Transaction Date</label>
                      </div>
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
                      </div>
                      <div className='two mt-6 flex items-center justify-start gap-[100px]'>
                  <div className='tank_one  gap-3 flex items-center justify-center'>
                <h3>Group By:</h3>
                <div  className=''>
    <select name="cars" className='w-[200px] border-[0.8px] px-2 py-1 rounded-md border-black' id="cars">
    <option value="volvo">None</option>
    <option value="volvo">Yearly</option>
    <option value="saab">Monthly</option>
    <option value="opel">Daily</option>
    <option value="audi">Cashier</option>
    <option value="audi">Fill Staff</option>
    <option value="audi">Counter</option>           
    <option value="audi">Pump</option>           
    <option value="audi">Fuel</option>           
    <option value="audi">Customer</option>           
    <option value="audi">Member</option>           
    <option value="audi">Car No</option>           
    
  </select>
              </div>
              </div>
             <div className='tank_one  gap-3 flex items-center justify-center'>
                <h3>Station Name:</h3>
                <div  className=''>
    <select name="cars" className='w-[240px] border-[0.8px] px-2 py-1 rounded-md border-black' id="cars">
    <option value="volvo">Please Select Station Name...</option>
    <option value="volvo">020(PPRD-0976)</option>        
    
  </select>
        </div>
                              
                          </div>   
          <div className='tank_one  gap-3 flex items-center justify-center'>
                <h3>Cashier:</h3>
                <div  className=''>
    <select name="cars" className='w-[300px] border-[0.8px] px-2 py-1 rounded-md border-black' id="cars">
    <option value="volvo">Please Select Cashier Name...</option>
    <option value="volvo">(PPRD-0976)-Administrator</option>        
    <option value="volvo">(PPRD-0976)-Daw Mi Mi Aung</option>        
    <option value="volvo">(PPRD-0976)-Daw Mya Mya</option>        
    <option value="volvo">(PPRD-0976)-Daw Thein Su</option>        
    
  </select>
        </div>
                              
                          </div>                    
                      </div>
                      <div className='three mt-6 flex items-center justify-start gap-[100px]'>
                         <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Customers:</h3>
               <input className='border-[0.8px] w-[200px] gap-3 px-2 py-1 border-black rounded-md'/>
                          </div>    
                  <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>CustomerCard :</h3>
               <input className='border-[0.8px] w-[200px] gap-3 px-2 py-1 border-black rounded-md'/>
              </div>    
               <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Vehicle ID :</h3>
               <input className='border-[0.8px] w-[200px] gap-3 px-2 py-1 border-black rounded-md'/>
              </div>         
                      </div>
                      <div className='four mt-6 flex items-center justify-start gap-[100px]'>
                         <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Mem Name :</h3>
               <input className='border-[0.8px] w-[200px] gap-3 px-2 py-1 border-black rounded-md'/>
                          </div> 
                  <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Member Card :</h3>
               <input className='border-[0.8px] w-[200px] gap-3 px-2 py-1 border-black rounded-md'/>
                          </div> 
                 <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Amount :</h3>
               <input className='border-[0.8px] w-[100px] gap-3 px-2 py-1 border-black rounded-md'/>
                          </div> 
                 <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Remark :</h3>
               <input className='border-[0.8px] w-[100px] gap-3 px-2 py-1 border-black rounded-md'/>
                          </div> 
                      </div>
                      <div className='five mt-6 flex items-center justify-start gap-[100px]'>
                     <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Fill Type :</h3>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="vehicel_id"/>
  <label for="vehicle1"> Vehicle ID</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="tank"/>
  <label for="vehicle2"> Tank</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="test"/>
  <label for="vehicle3"> Test</label>
   <input type="checkbox" id="vehicle4" name="vehicle4" value="office_use"/>
  <label for="vehicle4"> Office Use</label>
  <input type="checkbox" id="vehicle5" name="vehicle5" value="other"/>
  <label for="vehicle4"> Other</label>
                          </div>    
                      </div>
                      <div className='six mt-6 flex items-center justify-start gap-[100px]'>
                          <div className='Bowser  gap-3 flex items-center justify-center'>
                <h3>Sale Type :</h3>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="normal_cash"/>
  <label for="vehicle1"> Normal Cash</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="corporate_credit"/>
  <label for="vehicle2"> Corporate Credit</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="presale"/>
  <label for="vehicle3"> Presale</label>
   <input type="checkbox" id="vehicle4" name="vehicle4" value="prepaid"/>
  <label for="vehicle4"> Prepaid</label>
  <input type="checkbox" id="vehicle5" name="vehicle5" value="member"/>
  <label for="vehicle4"> Member</label>
  <input type="checkbox" id="vehicle6" name="vehicle6" value="member_foc"/>
  <label for="vehicle4"> Member FOC</label>
  <input type="checkbox" id="vehicle7" name="vehicle7" value="partner"/>
  <label for="vehicle4"> Partner</label>
                          </div>     
                      </div>
                      <div className='seven mt-6 flex items-center justify-start gap-[10px]'>
                            <button type='submit' className=' bg-blue-900 p-2  rounded-lg text-white'>Preview</button>
              <button type='submit' className=' bg-blue-900 p-2  rounded-lg text-white'>ShowAll</button>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Saleinvoice