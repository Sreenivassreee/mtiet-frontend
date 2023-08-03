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


      <h3>Skill/Talent Development</h3>

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

<div className='chats'>
      {
        recordList.map(info =>

          <Chart key={info.id}
            options={{

              title: { text: "Sutdents Marks graph" },

              xaxis: {
                title: { text: "Subjects" },
                categories: ["Skills"]
              },
              yaxis: {
                title: { text: "Marks" }
              }
            }}
            series={
              [
                {
                  name: "Texhnical",
                  data: [info.technical]
                },
                {
                  name: "Art",
                  data: [info.art]
                },
                {
                  name: "Communication",
                  data: [info.communication]
                },
                {
                  name: "Sports",
                  data: [info.sports]
                },
                {
                  name: "Dance",
                  data: [info.dance]
                },
                {
                  name: "Music",
                  data: [info.music]
                },
                {
                  name: "Karate",
                  data: [info.karate]
                },
                {
                  name: "Others1",
                  data: [info.others1]
                },
                {
                  name: "Others2",
                  data: [info.others2]
                }


              ]
            }
            type="bar"
            width="500"
          />

        )
      }
</div>
    </React.Fragment>
  )
}
export default Chats3;
