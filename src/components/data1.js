import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '@mui/material';


const Data11 = () => {


    // const [image, setImage] = useState('');
    
    // const handleChange=(e)=>{
    //     console.log(e.target.value)
    //     setImage(e.target.value)
    // }
    //     const handleSubmit=()=>{
    //       var  formData= new FormData()
    //       formData.append('image',image)
    //    var formData={
    //         photo:image.photo
        // }
    // var url = "https://mti-school-data.onrender.com/student";
    //     axios.post(url, formData).then(response => {
    //         console.log(response);
            // setUserData('');   
            // setImage();

    //     })
    // }

    const [userData, setUserData] = useState({
        // formData.append=("photo")
    })
    
    //   const handleChange = (e) => {
    //     const newdata={...inputs}
    //      newdata[e.target.id] = e.target.files[0];
    //     // const value = e.target.value;
    //     setInputs(newdata)
    //     // console.log(e.target.files[0]);
    //     setInputs(newdata);
    //   }
    
      const handleSubmit = () => {
        // e.preventDefault();
        // var Data={ name:inputs.name}
        var  formData= new FormData()
              formData.append('image',userData)
    
              var url = "https://mti-school-data.onrender.com/student";
              axios.post(url, formData).then(response => {
                  console.log(response);
                //   setUserData('');   ;
      })
    }

    return (
        <>
            <div id="Main-Container">
                

                <div className="Home-Left-Menu-Main">
                    <div className="wrapper">
                        <div className="sidebar">

                        <ul>
                                <p id='menu3'> Achivement Developnrmt</p>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="main-contents">

                <form onSubmit={handleSubmit}>
      <div>
                                    <h6>Student Photo</h6>
                                    <TextField  
                                         onChange={(e) => setUserData({ ...userData, "photo": e.target.files[0] })}
                                        margin="normal" type="file" varient="oulined" color="secondary" required />
                            
                                </div>
      
      
      {/* <label>Enter your age:
        <input type="number" 
                        // value={userData['age']} onChange={(e)=>setUserData({...userData, "age":e.target.value})}
        id="age" value={inputs.age} onChange={(e)=>handleChange(e)}
        />
        </label> */}
        <input type="submit"  />
    </form>


                  

                </div>



            </div>

           
        </>
    )
}
export default Data11;
