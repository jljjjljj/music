import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Hidden, List, ListItemText, Button } from "@mui/material";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { IconSemiLogo } from "@douyinfe/semi-icons";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3Icon from "@mui/icons-material/Person3";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar() {
  const data = [
    {
      title: "主页",
      path: "/",
      icon: <HomeIcon />,
      info: "",
    },
    {
      title: "分区",
      path: "/divide",
      icon: <DashboardIcon />,
      info: "",
    },
    {
      title: "我的",
      path: "/my",
      icon: <Person3Icon />,
      info: "",
    },
    {
      title: "客服",
      path: "/chat",
      icon: <HeadsetMicIcon />,
      info: "",
    },
    {
      title: "设置",
      path: "/setting",
      icon: <SettingsIcon />,
      info: "",
    },
  ];
  function NavItem({ item }) {
    const { title, path, icon, info, countStyle } = item;

    return (
      <StyledNavItem
        component={RouterLink}
        to={path}
        sx={{
          "&.active": {
            bgcolor: "action.selected",
            fontWeight: "fontWeightBold",
            color: countStyle && countStyle.color,
          },
        }}
      >
        <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

        <ListItemText disableTypography primary={title} />

        {info && info}
        {item.title === "Notification" && (
          <span
            style={{
              color:
                countStyle && countStyle.color ? countStyle.color : "inherit",
            }}
          >
            {newMessageCount > 0 ? `(${newMessageCount})` : ""}
          </span>
        )}
      </StyledNavItem>
    );
  }

  const containerStyle = {
    position: "relative", // 使伪元素相对于父元素定位
    height: "100%",
  };

  const pseudoElementStyle = {
    content: '""',
    backgroundImage: "url(/img/nav.png)",
    opacity: 0.5, // 设置背景图片的透明度
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // 确保伪元素位于实际内容的后面
  };
  return (
    <Nav
      style={{
        height: "100%",
        // backgroundColor: "#ecf7ec",
        backgroundImage: "url(/img/nav.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "0px solid black",
        boxShadow: "3px 3px 20px 5px #acacac75",
      }}
      defaultOpenKeys={["user", "union"]}
      onSelect={(data) => console.log("trigger onSelect: ", data)}
      onClick={(data) => console.log("trigger onClick: ", data)}
    >
      <Nav.Header
        logo={<IconSemiLogo style={{ height: "36px", fontSize: 36 }} />}
        text={"Genshin music"}
      />
      <Box sx={{ width: "220px" }}>
        <List disablePadding style={{ backgroundColor: "" }}>
          {data.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
      </Box>

      <Nav.Footer collapseButton={true} />
    </Nav>
  );
}
