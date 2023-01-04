import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SmileOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Result } from "antd";
import s from "./Support.module.css";

const { TextArea } = Input;

const Support = () => {
  const [sendRequest, setSendRequest] = useState(false);

  return (
    <div>
      {sendRequest ? (
        <div>
          <Result
            style={{ padding: "140px" }}
            icon={<SmileOutlined />}
            title="Your message has been sent to support"
            subTitle="Please wait for a response few minutes"
            extra={
              <Button type="primary">
                <Link to="/news">Go Home</Link>
              </Button>
            }
          />
        </div>
      ) : (
        <div>
          <div className={s.title}>
            <h1>
              <b>Support service 365/7/24</b>
            </h1>
            <h2>
              Describe your problem or wish. You can attach photos or documents
              if you want.
            </h2>
          </div>
          <Form className={s.textarea}>
            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <TextArea rows={8} cols={100} />
            </Form.Item>
            <Form.Item
              valuePropName="fileList"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item className={s.button}>
              <Button type="primary" onClick={() => setSendRequest(true)}>
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Support;
