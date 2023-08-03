import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Data3 = () => {




    const { rollnumber } = useParams(); // it use to capture value coming to url/path

    

    const [recordList, setRecordList] = useState([]);

    const getRecord = () => {
        var url = "https://mti-school-data.onrender.com/student";
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

                                
                                
                                
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>

                                                <th>Techinical</th>
                                                <th>Art</th>
                                                <th>Communication</th>
                                                <th>Sports</th>
                                                <th>Dance</th>
                                                <th>Music</th>
                                                <th>Karate</th>
                                                <th>Others-I</th>
                                                <th>Others-II</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recordList.map((studentinfo) => {
                                                return (
                                                    <tr key={studentinfo.id}>

                                                        <td> {studentinfo.technical} </td>
                                                        <td> {studentinfo.art} </td>
                                                        <td> {studentinfo.communication} </td>
                                                        <td> {studentinfo.sports} </td>
                                                        <td> {studentinfo.dance} </td>
                                                        <td> {studentinfo.music} </td>
                                                        <td> {studentinfo.karate} </td>
                                                        <td> {studentinfo.others1} </td>
                                                        <td> {studentinfo.others2} </td>


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

            

        </>
    )
}
export default Data3;
