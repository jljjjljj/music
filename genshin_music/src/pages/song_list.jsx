import React, { useEffect, useState } from "react";
import { Layout } from "@douyinfe/semi-ui";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Tablemusic from "../components/table";
import { Container, Box } from "@mui/material";
export default function Song_list() {
  const location = useLocation();
  const listitem = location.state.tracks;
  console.log(listitem);
  const onbreakpoint = (screen, bool) => {
    console.log(screen, bool);
  };
  const commonStyle = {
    height: "100%",
    lineHeight: "64px",
    backgroundImage: "url(/img/bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <Layout className="components-layout-demo">
        <Sider
          style={{
            background: "var(--semi-color-fill-2)",
            height: "100vh",
          }}
          breakpoint={["md"]}
          onBreakpoint={onbreakpoint}
        >
          <Navbar />
        </Sider>
        <Layout>
          <Header style={commonStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  backgroundColor: "white",
                  width: "95%",
                  height: "100%",
                  marginTop: "40px",
                  borderRadius: "20px",
                  boxShadow: "3px 3px 30px 10px #4b4b4b59",
                }}
              >
                <Tablemusic rows={listitem} />
              </Box>
            </div>
          </Header>
        </Layout>
      </Layout>
    </div>
  );
}
