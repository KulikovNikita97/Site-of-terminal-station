import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Button, Steps, Result } from "antd";
import s from "./Schedule.module.css";
import First from "./Steps/First";
import Second from "./Steps/Second";
import Third from "./Steps/Third";

const { Step } = Steps;
const steps = [
  {
    title: "Choose a date/dates",
    content: <First />,
  },
  {
    title: "Fill an order form",
    content: <Second />,
  },
  {
    title: "Transaction",
    content: <Third />,
  },
];

const LongDistanceTrains = () => {
  const [current, setCurrent] = useState(0);

  const [giveResult, setGiveResult] = useState(false);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      {giveResult ? (
        <Result
          style={{ padding: "150px 0 0 0" }}
          status="success"
          title="Successfully Paid!"
          subTitle="Order number: 2017182818828182881. Your ticket has been sent. Please check your fax-number."
          extra={[
            <Button type="primary">
              <Link to="/news">Go Home</Link>
            </Button>,
            <Button
              onClick={() => {
                setGiveResult(false);
                setCurrent(0);
              }}
            >
              Order else
            </Button>,
          ]}
        />
      ) : (
        <div>
          <div className={s.title}>
            <h1>
              <b>Long-distance trains to more 20 cities!</b>
            </h1>
            <h2>Comfort, safety, speed!</h2>
            <marquee
              direction="left"
              scrollamount="10"
              scrolldelay="0"
              bgcolor="yellowgreen"
            >
              NEW! Trains towards Saddle Arabia without transfers!
            </marquee>
          </div>

          <div className={s.generalBody}>
            <Steps current={current} style={{ justifyContent: "space-around" }}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>

            <div className="steps-content" style={{ padding: "30px 0 30px 0" }}>
              {steps[current].content}
            </div>

            <div
              className="steps-action"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => setGiveResult(true)}>
                  Pay
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LongDistanceTrains;
