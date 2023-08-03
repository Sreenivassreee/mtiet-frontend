import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Link, useParams, Outlet } from "react-router-dom";

import axios from 'axios';


const Datas1 = () => {




    const { rollnumber } = useParams(); // it use to capture value coming to url/path



    const [recordList, setRecordList] = useState([]);

    const getRecord = () => {
        var url = "https://mti-apidata.onrender.com/student";
        axios.get(url).then(response => {
            let test = response.data.filter(student => student.rollnumber == rollnumber);
            setRecordList(test)

        })
    }

    useEffect(() => {
        getRecord();

    }, [true])


    return (
        <>
            <div id="Main-Container">
                <div className="Banner-Top-Main">
                    <h1 className="text-danger">Student Marks List</h1>

                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-primary">

                                <th>RollNumber</th>
                                <th>Student Name</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recordList.map((studentinfo) => {
                                return (
                                    <tr key={studentinfo.id}>

                                        <td>{studentinfo.rollnumber}</td>
                                        <td>{studentinfo.name}</td>
                                        <td>{studentinfo.class}</td>


                                    </tr>
                                );
                            })
                            }

                        </tbody>
                    </table>

                </div>

                <div className="Home-Left-Menu-Main">
                    <div className="wrapper">
                        <div className="sidebar">

                            <ul>
                                <Link className='back' to="/"><button>Back</button></Link>


                                <Link to="chats1" style={{textDecoration:'none'}}>  <p id='menu3' > Academics Development</p></Link>
                                <Link to="chats2" style={{textDecoration:'none'}}>   <p id='menu3'> Emotional Development</p></Link>
                                <Link to="chats3" style={{textDecoration:'none'}}>   <p id='menu3'> Skill/Talent Development</p></Link>
                                <Link to="chats4" style={{textDecoration:'none'}}>  <p id='menu3'>Physical Development</p></Link>
                                <Link to="chats5" style={{textDecoration:'none'}}> <p id='menu3'> Achievement Development</p></Link>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="main-contents">



                    <div className="main_container1">
                        <div className="sub_container1">


                            <div className="tables">



                                <Outlet />

                            </div>
                        </div>
                    </div>

                </div>



            </div>




        </>
    )
}
export default Datas1;
