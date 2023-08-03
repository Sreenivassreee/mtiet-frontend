import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Data1 = () => {




    const { rollnumber } = useParams(); // it use to capture value coming to url/path

  
    const [recordList, setRecordList] = useState([]);

    const getRecord = () => {
        var url = "https://mti-school-data.onrender.com/student";
        // axios.get(url).then(response => {
        //     let test = response.data.filter(student => student.rollnumber == rollnumber);
        //     setRecordList(test)
            axios.get(url).then(response => {
                            let test = response.data.filter(student => student.rollnumber == rollnumber);

                setRecordList(test);
        })
    }

    useEffect(() => {
        getRecord();

    }, [true])


    return (
        <>
            <div id="Main-Container">
                <div className="Banner-Top-Main">
                    <h1 className="text-danger">Student Details</h1>

                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-primary">

                                <th>RollNumber</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Photo</th>                                </tr>
                        </thead>
                        <tbody>
                            {recordList.map((studentinfo) => {
                                return (
                                    <tr key={studentinfo.id}>

                                        <td>{studentinfo.rollnumber}</td>
                                        <td>{studentinfo.name}</td>
                                        <td>{studentinfo.class}</td>
                                        <td><img src={studentinfo.photo} height="50" width="50" /></td>


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
                                <Link className='back' to="/data1"><p id='menu3'> Academic Developnrmt</p></Link>
                                <Link className='back' to="/data2"><p id='menu3' > Emotional Developnrmt</p></Link>
                                <Link className='back' to="/data3"><p id='menu3'> Skill/Talent Developnrmt</p></Link>
                                <Link className='back' to="/data4"><p id='menu3'>Physical Developnrmt</p></Link>
                                <Link className='back' to="/data5"><p id='menu3'> Achivement Developnrmt</p></Link>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="main-contents">



                    <div className="main_container1">
                        <div className="sub_container1">


                            <div>

                            
                             <div>
                                        <table className="table table-bordered ">
                                            <thead>
                                                <tr>
                                                    <th>English</th>
                                                    <th>Hindi</th>
                                                    <th>Telugu</th>
                                                    <th>Maths</th>
                                                    <th>Science</th>
                                                    <th>Social</th>
                                                    <th>Environmental Science</th>
                                                    <th>ICT</th>
                                                    <th>Robotics</th>
                                                    <th>General Knowledge</th>
                                                    <th>Value Education</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    recordList.map((studentinfo) => {
                                                        return (
                                                            <tr key={studentinfo.id}>
                                                                <td>{studentinfo.english}</td>
                                                                <td>{studentinfo.hindi}</td>
                                                                <td>{studentinfo.telugu}</td>
                                                                <td>{studentinfo.maths}</td>
                                                                <td>{studentinfo.science}</td>
                                                                <td>{studentinfo.social}</td>
                                                                <td>{studentinfo.es}</td>
                                                                <td>{studentinfo.ict}</td>
                                                                <td>{studentinfo.robotics}</td>
                                                                <td>{studentinfo.gk}</td>
                                                                <td>{studentinfo.ve}</td>


                                                            </tr>
                                                        );
                                                    })
                                                }

                                            </tbody>
                                        </table>

                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Life Skills</th>
                                                    <th>II-Maths</th>
                                                    <th>IIT-Physics</th>
                                                    <th>IIT-Chemistry</th>
                                                    <th>IIT-Reasoning</th>
                                                    <th>NEET-Biology</th>
                                                    <th>NEET-Zoology</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recordList.map((studentinfo) => {
                                                    return (
                                                        <tr key={studentinfo.id}>
                                                            <td> {studentinfo.skills} </td>
                                                            <td> {studentinfo.iitm} </td>
                                                            <td> {studentinfo.iitp} </td>
                                                            <td> {studentinfo.iitc} </td>
                                                            <td> {studentinfo.iitr} </td>
                                                            <td> {studentinfo.neetb} </td>
                                                            <td> {studentinfo.neetz} </td>

                                                        </tr>
                                                    );
                                                })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                
                               


                            </div>
                        </div>
                    </div>

                </div>



            </div>

          

        </>
    )
}
export default Data1;
