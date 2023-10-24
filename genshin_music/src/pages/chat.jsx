import Navbar from "../components/Navbar";
import { Layout } from "@douyinfe/semi-ui";
import ChatBox from "../components/ChatBox";
export default function Chat() {
  const onbreakpoint = (screen, bool) => {
    console.log(screen, bool);
  };
  const commonStyle = {
    height: 64,
    lineHeight: "64px",
    background: "var(--semi-color-fill-0)",
  };
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <div
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "rgba(242, 250, 230)",
        }}
      >
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
            <Content
              style={{
                height: 300,
                lineHeight: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "90%",
                  backgroundColor: "rgb(50 74 42)",
                  borderRadius: "20px",
                }}
              >
                <ChatBox />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
