import React, { useEffect, useState } from "react";
import { Layout } from "@douyinfe/semi-ui";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

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
          }}
          breakpoint={["md"]}
          onBreakpoint={onbreakpoint}
        >
          <Navbar />
        </Sider>
        <Layout>
          <Header style={commonStyle}>
            <div>
              <Title />
            </div>
          </Header>

          {/* <Footer style={commonStyle}>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}
