import React, { useState } from "react";
import s from "./../Schedule.module.css";
import { Cascader, Form, Input, InputNumber, Switch, Row, Col } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const Second = () => {
  const [componentSize, setComponentSize] = useState("large");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className={s.Second}>
      <Row gutter={[12]}>
        <Col span={3}></Col>
        <Col span={21}>
          <Form
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Your full name">
              <Input placeholder="Surname at first. Ex: Sparkle Twilight" />
            </Form.Item>
            <Form.Item label="Your fax-number">
              <Input placeholder="You will give your ticket on your fax after transaction" />
            </Form.Item>
            <Form.Item label="City of destination">
              <Cascader
                options={[
                  {
                    value: "Philidelphia",
                    label: "Philidelphia",
                    children: [
                      {
                        value: "Philidelphia Express №343",
                        label: "Philidelphia Express №343",
                      },
                      {
                        value: "Philidelphia Express №351",
                        label: "Philidelphia Express №351",
                      },
                    ],
                  },
                  {
                    value: "Canterlot",
                    label: "Canterlot",
                    children: [
                      {
                        value: "Canterlot Royal №4",
                        label: "Canterlot Royal №4",
                      },
                    ],
                  },
                  {
                    value: "Vanhoover",
                    label: "Vanhoover",
                    children: [
                      {
                        value: "South Griffin Express",
                        label: "South Griffin Express",
                      },
                    ],
                  },
                  {
                    value: "Appleloosa",
                    label: "Appleloosa",
                    children: [
                      {
                        value: "South Wild Express",
                        label: "South Wild Express",
                      },
                    ],
                  },
                  {
                    value: "Las Pegasus",
                    label: "Las Pegasus",
                    children: [
                      {
                        value: "LP Supreme Train",
                        label: "LP Supreme Train",
                      },
                    ],
                  },
                  {
                    value: "Crystal Empire",
                    label: "Crystal Empire",
                    children: [
                      {
                        value: "Princess Amore Express",
                        label: "Princess Amore Express",
                      },
                    ],
                  },
                  {
                    value: "Saddle Arabia",
                    label: "Saddle Arabia",
                    children: [
                      {
                        value: "Chidjaz Al-Horse Train",
                        label: "Chidjaz Al-Horse Train",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Carriage">
              <InputNumber min={1} max={10} placeholder="max 10" />
            </Form.Item>
            <Form.Item label="Sitting place">
              <InputNumber min={1} max={100} placeholder="max 100" />
            </Form.Item>
            <Form.Item label="Order a meal" valuePropName="checked">
              <span>
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </span>
              <span style={{ padding: "0 0 0 20px", color: "green" }}>
                New level of service! Tasty food right in carriage!
              </span>
            </Form.Item>
          </Form>
        </Col>
        <Col span={0}></Col>
      </Row>
    </div>
  );
};

export default Second;
