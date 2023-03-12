import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Editmoney() {
    
    

  const [topic, setTopic] = useState('');
  const [categories, setCategories] = useState('');
  const [division, setDivision] = useState('');
  const [date, setDate] = useState('');

  const{ id } = useParams();
 

  useEffect(()=>{


    console.log('#############' +  id)
    const amount = async() => {
     axios.get("http://localhost:5000/economy/" + id )
      .then((res)=> {
        console.log('#############' +res.data.topic)
        setTopic(res.data.topic)
        setCategories(res.data.categories)
        setDivision(res.data.division)
        setDate(new Date(res.data.date))
      });
      
    }
    
    amount()

    },[id]);
  
  const onChangeTopic = (e) => {
      setTopic(e.target.value)
  }
  const onChangeCategories = (e) => {
      setCategories(e.target.value)
  }
  const onChangeDivision= (e) => {
      setDivision(e.target.value)
  }
  const onChangeDate= (e) => {
      setDate(e.target.value)
  }

  const handleSubmit = async e => {
      e.preventDefault();

      const editData = async () => {
          try{
              const money= {
                  
                  topic : topic,
                  categories : categories,
                  division : division,
                  date : date
              }
              axios.post(`http://localhost:5000/economy/update/${id}`, money)
                              .then(res => console.log(res))
                              window.location='/';
          }
          catch (err){
              console.warn(err)
          }
      }

      editData();
  }
  return (
    <div className='container mt-5'>
      <h3>Edit Income/Expenses</h3>
        <form onSubmit={handleSubmit}>
            
        <div className='mt-3'><select className="form-select" aria-label="Default select example" value={topic}
                onChange={onChangeTopic}>
                    <option >Select Income/Expenses</option>
                    <option value="Income">Income</option>
                    <option value="Expenses">Expenses</option>
                    
                    </select>
               
            
</div>
            <div className='mt-3'>
            <select className="form-select" aria-label="Default select example"  value={categories}
                            onChange={onChangeCategories}>
                            <option>Select Categories</option>
                            <option value="food">food</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Investment">Investment</option>
                            <option value="fuel">fuel</option>
                            <option value="loan">loan</option>
                            <option value="medical">medical</option>
                            <option value="others">others</option>
                </select>
                           
                            
               

            </div>
            <div className='mt-3'>
              
                <select className="form-select" aria-label="Default select example" value={division}
                onChange={onChangeDivision}>
                <option>select Division</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
                </select>

                </div>
                <div className="form-group">
                <label>Date:</label>
                <input type='text'
                required
                className="form-control"
                value={date}
                onChange={onChangeDate}
                >
                </input>
                </div>
<div>
                <button type="submit" className="btn-btn-primary mt-3">update</button>

            </div>
        </form>
    </div>
  )
}

export default Editmoney