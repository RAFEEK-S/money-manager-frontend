import React from 'react';
import {Modal} from 'antd' 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Createmoney } from './Createmoney';


function Home() {

const [visible, setVisible] = useState(false);



function showmodel(){
  setVisible(true)
}

const handleCancel = () => {
  setVisible(false);
};
 


  
  return (
    
    <div className='container mt-5'>

       
       <div className='row mx-auto'>
        <div className='col-1'>
          <button className='btn btn-primary'  onClick={showmodel}>ADDNEW</button>
          <Modal open={visible} onCancel={handleCancel}> 
          <Link to='/hello'><button className='btn btn-primary'>ADD Income/Expenses</button></Link></Modal>
         </div>
  <div className='col-6 ms-auto'>
  
  </div>
  </div>
  <Createmoney/>
  </div>
  )
}

export default Home