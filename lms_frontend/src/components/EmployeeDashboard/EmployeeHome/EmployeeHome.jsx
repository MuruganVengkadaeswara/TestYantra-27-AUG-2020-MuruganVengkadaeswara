import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

const workingData = {
  labels: ["week1", "week2", "week3", "week4"],
  datasets: [
    {
      label: "label",
      backgroundColor: ["#A3C3D9", "#B0FE76", "#62BFED", "#0CCE6B"],
      hoverBackgroundColor: ["#501800", "#4B5000", "#501800", "#4B5000"],
      data: [50, 48, 54, 44],
    },
  ],
};

const EmployeeHome = (props) => {
  const [apprno, setapprno] = useState(0);
  const [pendno, setpendno] = useState(0);
  let chartData = {
    labels: ["Pending Applications", "Approved Applications"],
    datasets: [
      {
        label: "Label",
        backgroundColor: ["#F42B03", "#0CCE6B"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: [pendno, apprno],
      },
    ],
  };

  useEffect(() => {
    Axios.get(`http://localhost:8080/lms/employee/applications-pending`).then(
      (res) => {
        console.log(res.data.response.length);
        setpendno(res.data.response.length);
      }
    );
    Axios.get(`http://localhost:8080/lms/employee/applications-approved`).then(
      (res) => {
        console.log(res.data.response.length);
        setapprno(res.data.response.length);
      }
    );
  }, []);

  return (
    <div
      className="col-md-8 offset-md-2  mt-5 row"
      style={{ fontFamily: "courier new" }}
    >
      <div className="col-md-6">
        <Doughnut
          data={workingData}
          options={{
            title: {
              display: true,
              text: "Working Hours This Month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div className="col-md-6">
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Efficiency",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default EmployeeHome;
