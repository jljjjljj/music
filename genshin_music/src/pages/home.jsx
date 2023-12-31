import React, { useEffect, useState } from "react";
import { Layout } from "@douyinfe/semi-ui";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Homerecommend from "../components/Homerecommend";
import { Container, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export default function Home() {
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
            height: "auto",
          }}
          breakpoint={["md"]}
          onBreakpoint={onbreakpoint}
        >
          <Navbar />
        </Sider>
        <Layout>
          <Header style={commonStyle}>
            <Searchbar />

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
                  width: "98%",
                  height: "1000px",
                  marginTop: "40px",
                  borderRadius: "20px",
                  boxShadow: "3px 3px 30px 10px #4b4b4b59",
                }}
              >
                <Homerecommend />
              </Box>
            </div>
          </Header>

          {/* <Footer style={commonStyle}>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}
