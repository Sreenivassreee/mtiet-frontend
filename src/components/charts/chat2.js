import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Chart from "react-apexcharts";

const Chats2 = () => {
  const { rollnumber } = useParams(); // it use to capture value coming to url/path

  const [show, setShow] = useState(false);

  const [recordList, setRecordList] = useState([]);

  const getRecord = () => {
    var url = "https://mtiet-api-v2.onrender.com/student";
    axios.get(url).then((response) => {
      let test = response.data.filter(
        (student) => student.rollnumber == rollnumber
      );
      setRecordList(test);
      // console.log(test)
    });
  };

  useEffect(() => {
    getRecord();
  }, [true]);

  return (
    <React.Fragment>
      <h3>Emotional Development</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>AngerManagement</th>
            <th>HappinessIndex</th>
            <th>DecissionMaking</th>
            <th>Obediance</th>
            <th>Understanding</th>
            <th>Brave</th>
            <th>ProblemSolving</th>
          </tr>
        </thead>
        <tbody>
          {recordList.map((studentinfo) => {
            return (
              <tr key={studentinfo.id}>
                <td> {studentinfo.am} </td>
                <td> {studentinfo.happy} </td>
                <td> {studentinfo.dm} </td>
                <td> {studentinfo.obedience} </td>
                <td> {studentinfo.under} </td>
                <td> {studentinfo.brave} </td>
                <td> {studentinfo.ps} </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="chats">
        {recordList.map((info) => {
          return (
            <Chart
              key={info.id}
              options={{
                title: { text: "Sutdents Marks graph" },

                xaxis: {
                  title: { text: "Subjects" },
                  categories: ["Emotion"],
                },
                yaxis: {
                  title: { text: "Marks" },
                },
              }}
              series={[
                {
                  name: "AngerManagement",
                  data: [info.am],
                },
                {
                  name: "HappyIndex",
                  data: [info.happy],
                },
                {
                  name: "DecissionMaking",
                  data: [info.dm],
                },
                {
                  name: "Obideance",
                  data: [info.obedience],
                },
                {
                  name: "Understanding",
                  data: [info.under],
                },
                {
                  name: "Brave",
                  data: [info.brave],
                },
                {
                  name: "Problem Solving",
                  data: [info.ps],
                },
              ]}
              type="bar"
              width="500"
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Chats2;
