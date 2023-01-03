import React from "react";
import "antd/dist/antd.css";
import { Table, Tag } from "antd";
import s from "./Schedule.module.css";

const SuburbianTrains = () => (
  <div>
    <div className={s.title}>
      <h1>
        <b>Suburbian trains departure every 8-10 minutes!</b>
      </h1>
      <h2>Comfort, safety, speed!</h2>

      <marquee
        direction="left"
        scrollamount="10"
        scrolldelay="0"
        bgcolor="yellow"
      >
        ATTENTION! Trains towards Rompale-city are canceled from January 24
        until further notice.
      </marquee>
    </div>

    <Table className={s.tableSub} columns={columns} dataSource={data} />
  </div>
);

const columns = [
  {
    title: "Time of departures",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Days",
    key: "days",
    dataIndex: "days",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color;

          if (tag === "days-off") {
            color = "volcano";
          }

          if (tag === "weekdays") {
            color = "geekblue";
          }

          if (tag === "everyday") {
            color = "green";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Point of destination",
    dataIndex: "destination",
    key: "destination",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Train type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Stops",
    dataIndex: "stops",
    key: "stops",
  },
  {
    title: "Train number",
    dataIndex: "number",
    key: "number",
  },
];

const data = [
  {
    key: "1",
    time: "6:30",
    tags: ["weekdays"],
    destination: "Syres-Hollow",
    type: ["general"],
    stops: "all",
    number: "462383",
  },
  {
    key: "2",
    time: "6:38",
    tags: ["everyday"],
    destination: "Green Village",
    type: ["general"],
    stops: "all except Roseluck, Hamfire, Lumbersbruck, 45 km",
    number: "274639",
  },
  {
    key: "3",
    time: "7:23",
    tags: ["days-off"],
    destination: "Fillidelphia",
    type: ["express"],
    stops: "only Syres-Hollow, Green Village, Twi-Rye",
    number: "033",
  },
  {
    key: "4",
    time: "7:46",
    tags: ["everyday"],
    destination: "Fillidelphia",
    type: ["general"],
    stops: "all",
    number: "463865",
  },
  {
    key: "5",
    time: "8:00",
    tags: ["everyday"],
    destination: "Syres-Hollow",
    type: ["general"],
    stops: "all except 45 km, 83 km",
    number: "357352",
  },
  {
    key: "6",
    time: "8:11",
    tags: ["everyday"],
    destination: "Green Village",
    type: ["general"],
    stops: "all",
    number: "345678",
  },
  {
    key: "7",
    time: "8:17",
    tags: ["days-off"],
    destination: "Vanhoover",
    stops: "only Syres-Hollow",
    type: ["bullet"],
    number: "0023",
  },
  {
    key: "8",
    time: "8:30",
    tags: ["weekdays"],
    destination: "Rampale",
    stops: "all",
    type: ["general"],
    number: "124658",
  },
  {
    key: "9",
    time: "8:42",
    tags: ["everyday"],
    destination: "Syres-Hollow",
    stops: "all",
    type: ["general"],
    number: "985467",
  },
  {
    key: "10",
    time: "8:53",
    tags: ["everyday"],
    destination: "Green Village",
    stops: "all",
    type: ["general"],
    number: "427486",
  },
];

export default SuburbianTrains;
