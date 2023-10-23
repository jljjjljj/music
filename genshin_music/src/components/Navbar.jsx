import React from "react";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconStar,
  IconUser,
  IconUserGroup,
  IconSetting,
  IconSemiLogo,
  IconHome,
  IconSong,
} from "@douyinfe/semi-icons";

export default function Navbar() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Nav
        style={{ height: "100%" }}
        items={[
          { itemKey: "homepage", text: "首页", icon: <IconHome /> },
          { itemKey: "divide", text: "分区精选", icon: <IconSong /> },
          {
            itemKey: "union-management",
            text: "我的",
            icon: <IconUser />,
            items: ["最近播放", "本地下载", "我的收藏"],
          },
          {
            text: "设置",
            icon: <IconSetting />,
            itemKey: "job",
            items: ["客服", "切换主题"],
          },
        ]}
        onSelect={(key) => console.log(key)}
        header={{
          logo: <IconSemiLogo style={{ height: "36px", fontSize: 36 }} />,
          text: "Genshin music",
        }}
        footer={{
          collapseButton: true,
        }}
      />
    </div>
  );
}
