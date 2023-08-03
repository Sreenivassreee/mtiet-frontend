import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from "react-apexcharts";


const Chats3 = () => {




    const { rollnumber } = useParams(); // it use to capture value coming to url/path

    const [show, setShow] = useState(false);

    const [recordList, setRecordList] = useState([]);

    const getRecord = () => {
        var url = "https://mti-apidata.onrender.com/student";
        axios.get(url).then(response => {
            let test = response.data.filter(student => student.rollnumber == rollnumber);
            setRecordList(test)
            // console.log(test)
        })
    }

    useEffect(() => {
        getRecord();

    }, [true])

    
    return (
        <React.Fragment>
            <h3>Physical Development</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="text-primary">

                                                <th>Height</th>
                                                <th>Weight</th>
                                                <th>BodyMassIndex</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recordList.map((studentinfo) => {
                                                return (
                                                    <tr key={studentinfo.id}>

                                                        <td> {studentinfo.height} </td>
                                                        <td> {studentinfo.weight} </td>
                                                        <td> {studentinfo.bmi} </td>


                                                    </tr>
                                                );
                                            })
                                            }

                                        </tbody>
                                    </table>

        </React.Fragment>
    )
}
export default Chats3;
