import React, { useEffect, useState } from "react";
import "../HomeContents/homecontents.css";
import { Jumbotron, Container, NavLink, Button } from "react-bootstrap";
import CarouselComp from "../Carousel/CarouselComp";
import { Bar } from "react-chartjs-2";
import Axios from "axios";

const HomeContents = (props) => {
  const [data, setData] = useState([]);
  const [chartdata1, setChartData1] = useState({
    labels: [
      "home loan",
      "education loan",
      "Car loan",
      "Business loan",
      "Personal loan",
      "Bike Loan",
      "personal loan",
      "personal loan",
      "Loan",
      "CAR LOAN",
    ],
    datasets: [
      {
        backgroundColor: [
          "#df2935",
          "#86BA90",
          "#587291",
          "#93ACB5",
          "#B1EDE8",
          "#FFE66D",
          "#DEC5E3",
          "#0582CA",
          "#0E9594",
          "#175676",
          "#E56399",
        ],
        hoverBackgroundColor: [
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
          "#FF101F",
        ],
        data: [10.2, 15.4, 25.4, 10.4, 12.1, 15, 11.3, 22.5, 12, 21, 8.9],
      },
    ],
  });

  useEffect(() => {
    Axios.get("http://localhost:8080/lms/user/loantypes").then((res) => {
      console.log(res);
      console.log(res.data.response);
      let interests = res.data.response.map((obj) => obj.interestRate);
      let labels1 = res.data.response.map((obj) => obj.loanName);
      console.log(labels1);
      console.log(interests);
      setData(res.data.response);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <NavLink href="/apply">
        <Button variant="outline-light" className="applbtn">
          Apply
        </Button>
      </NavLink>
      <NavLink href="/applicationstatus">
        <Button variant="outline-light" className="applbtn1">
          Check Application Status
        </Button>
      </NavLink>
      <div className="col-md-10 offset-md-1  jmbo">
        <Jumbotron fluid>
          <Container className="jmboctr">
            <h1 className="jmbttl">
              <strong>Welcome To MVB</strong>
            </h1>
            <h6>The Most Trusted Bank in India</h6>
            <hr />
          </Container>
          <Container>
            <div className="jmbpara">
              <p>
                MV Bank of India is an Indian multinational, public sector
                banking and financial services statutory body headquartered in
                Bangalore, Karnataka. MVB is the 30th largest bank in the world
                and ranked 27th in the Fortune Global 500 list of the world's
                biggest corporations of 2019.
              </p>
            </div>
          </Container>
          <Container>
            <div className="jmbpara">Your financial friend.</div>
          </Container>
        </Jumbotron>
      </div>
      <div className="col-md-8 offset-md-2">
        <Bar
          data={chartdata1}
          options={{
            title: {
              display: true,
              text: "Interest Rate in our Bank",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div className="caro offset-md-2 col-md-8 mt-5">
        <CarouselComp />
      </div>
      <div></div>
    </div>
  );
};

export default HomeContents;
