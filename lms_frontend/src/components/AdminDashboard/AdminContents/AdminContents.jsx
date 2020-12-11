import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Doughnut, Pie,Bar } from "react-chartjs-2";
import '../AdminContents/admincont.css'

const chartdata = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: ["perform"],
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const AdminContents = (props) => {
  return (
    <div className="col-md-8 offset-md-2 mt-5 block">
      <div className="row">
        <div className="col-md-6">
          <Doughnut
            data={chartdata}
            options={{
              title: {
                display: true,
                text: "Performance",
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
          <Pie
            data={chartdata}
            options={{
              title: {
                display: true,
                text: "Profit",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
      <div className="col-md-8 mt-5 offset-md-2">
      <Bar
            data={chartdata}
            options={{
              title: {
                display: true,
                text: "New Customers",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
      </div>
    </div>
  );
};

export default AdminContents;
