import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "antd";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "antd/dist/antd.css";
import "./../index.css";
import Avatar from "./../label copy.jpg";
import styles from "./Header.module.css";

export default function Header() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <nav className={styles.general}>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          avatar={<img src={Avatar} alt="avatar" />}
          title="Manehatten Terminal Station"
          subTitle="Equestria Railway North-West"
          extra={[
            // <Button key="1">
            //   <Link to="/support">Support</Link>
            // </Button>,
            // <Button key="1">
            //   <Link to="/news">News</Link>
            // </Button>,
            // <Button key="1">
            //   <Link to="/suburbian">Suburbian trains</Link>
            // </Button>,
            // <Button key="1">
            //   <Link to="/long_distance">Long-distance trains</Link>
            // </Button>,
            // <Button type="primary" key="1">
            //   <Link
            //     to={localStorage.getItem("setAdminMe") ? "/admin" : "/logging"}
            //   >
            //     Administrator
            //   </Link>
            // </Button>,
            <ToggleButtonGroup
              color="standard"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              size="small"
            >
              <ToggleButton value="1">
                <Link to="/support">Support</Link>
              </ToggleButton>
              <ToggleButton value="2">
                <Link to="/news">News</Link>
              </ToggleButton>
              <ToggleButton value="3">
                <Link to="/suburbian">Suburbian trains</Link>
              </ToggleButton>
              <ToggleButton value="4">
                <Link to="/long_distance">Long-distance trains</Link>
              </ToggleButton>
              <ToggleButton value="5">
                <Link
                  to={
                    localStorage.getItem("setAdminMe") ? "/admin" : "/logging"
                  }
                >
                  Administrator
                </Link>
              </ToggleButton>
            </ToggleButtonGroup>,
          ]}
        ></PageHeader>
      </nav>
    </div>
  );
};
