import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from "react-apexcharts";


const Chats1 = () => {




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




      <div>
        <h3>Academics Development</h3>

        <table className="table table-bordered  ">
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
              <th>Value Eduacation</th>

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
              <th>IIT-Maths</th>
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

<div className='chats'>
      {recordList.map((info) => {
        return (
          <Chart key={info.id}
            options={{

              title: { text: "Sutdents Marks graph" },

              xaxis: {
                title: { text: "Subjects" },
                categories: ["Academic"]
              },
              yaxis: {
                title: { text: "Marks" }
              }
            }}
            series={
              [
                {
                  name: "English",
                  data: [info.english]
                },
                {
                  name: "Hindi",
                  data: [info.hindi]
                },
                {
                  name: "Telugu",
                  data: [info.telugu]
                },
                {
                  name: "Maths",
                  data: [info.maths]
                },
                {
                  name: "Science",
                  data: [info.science]
                },
                {
                  name: "Social",
                  data: [info.social]
                },
                {
                  name: "Environmental Sciente",
                  data: [info.es]
                },
                {
                  name: "ICT",
                  data: [info.ict]
                },
                {
                  name: "Robotics",
                  data: [info.robotics]
                },
                {
                  name: "General Knowledge",
                  data: [info.gk]
                },
                {
                  name: "Value Eduacation",
                  data: [info.ve]
                },
                {
                  name: "Life Skills",
                  data: [info.skills]
                },
                {
                  name: "IIT-Maths",
                  data: [info.iitm]
                },
                {
                  name: "IIT-Physics",
                  data: [info.iitp]
                },
                {
                  name: "IIT-Chemistry",
                  data: [info.iitc]
                },
                {
                  name: "IIT-Reasoning",
                  data: [info.iitr]
                },
                {
                  name: "NEET-Biology",
                  data: [info.neetb]
                },
                {
                  name: "NEET-Zoology",
                  data: [info.neetz]
                }

              ]
            }
            type="bar"
            width="600"
          />
        );
      })
      }
      </div>
    </React.Fragment>
  )
}
export default Chats1;
