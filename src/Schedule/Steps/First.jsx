import React from "react";
import s from "./../Schedule.module.css";
import { DatePicker, Space, Calendar, Tabs } from "antd";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};

const First = () => {
  return (
    <div className={s.First}>
      <Tabs defaultActiveKey="1" onChange={onChange} centered={true}>
        <TabPane tab="One direction" key="1">
          <div style={{ textAlign: "center", padding: "5px 0 20px 0" }}>
            Choose a date of departure
          </div>

          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </TabPane>

        <TabPane tab="There and back" key="2">
          <div style={{ textAlign: "center", padding: "5px 0 20px 0" }}>
            Choose dates from departure to arrival
          </div>
          <div className={s.rangePicker}>
            <Space direction="vertical" size={12}>
              <RangePicker format={dateFormat} />
            </Space>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default First;
