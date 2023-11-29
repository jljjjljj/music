import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import Table from "./table";
import Carousel1 from "./Banner";
import Tablemusic from "./table";
import { Link } from "react-router-dom";


const PlaylistItem = ({ imageUrl, playlistName, onClick }) => {
  const [flag, setFlag] = useState(false);
  return (
    <div style={{width:'180px', height:'220px',overflow:'hidden'}}>
      <ul
        style={{
          marginLeft:'10px',
          width: "65%",
          height: "65%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          borderRadius: "20px",
          transition: "transform 0.3s ease", // 添加过渡效果
          cursor: "pointer", // 添加手型指针样式
        }}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)"; // 鼠标悬浮时放大
          setFlag(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // 鼠标离开时恢复原始大小
          setFlag(false);
        }}
      ></ul>

      <div
        style={{
          marginTop: "10px",
          height: "20px",
          lineHeight: "20px",
          fontSize: "13px",
          fontWeight: "700",
          color: flag ? "#53d0c7" : "black",
        }}
      >
        {playlistName}
      </div>
    </div>
  );
};
const Homerecommend = () => {
  const [playlistDetail, setPlaylistDetail] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [collection, setCollection] = useState([]);
  const [playlistDetail1, setPlaylistDetail1] = useState([]);
  const [tracks2, setTracks2] = useState([]);
  const [playlistDetail2, setPlaylistDetail2] = useState([]);
  const [tracks3, setTracks3] = useState([]);
  const [playlistDetail3, setPlaylistDetail3] = useState([]);
  const [tracks4, setTracks4] = useState([]);
  const [playlistDetail4, setPlaylistDetail4] = useState([]);
  const [tracks5, setTracks5] = useState([]);

  const navigate = useNavigate(); // 获取 useNavigate 函数
  const handlePlaylistClick = () => {
    // 在这里进行页面导航
    navigate("/songlist", {
      state: { tracks: tracks },
    });
  };
  const handlePlaylistClick1 = () => {
    // 在这里进行页面导航
    navigate("/songlist", { state: { tracks: tracks2 } });
  };
  const handlePlaylistClick2 = () => {
    // 在这里进行页面导航
    navigate("/songlist", { state: { tracks: tracks3 } });
  };
  const handlePlaylistClick3 = () => {
    // 在这里进行页面导航
    navigate("/songlist", { state: { tracks: tracks4 } });
  };
  const handlePlaylistClick4 = () => {
    // 在这里进行页面导航
    navigate("/songlist", { state: { tracks: tracks5 } });
  };

  useEffect(() => {
    // 构建API请求的URL
    const apiUrl = "http://localhost:3000/playlist/detail?id=7440326502";
    const apiUrl1 = "http://localhost:3000/playlist/detail?id=7378805635";
    const apiUrl2 = "http://localhost:3000/playlist/detail?id=7437331292";
    const apiUrl3 = "http://localhost:3000/playlist/detail?id=7260028404";
    const apiUrl4 = "http://localhost:3000/playlist/detail?id=7822788988";
    // 发送GET请求
    // 使用Promise.all同时发送多个请求
    Promise.all([
      axios.get(apiUrl),
      axios.get(apiUrl1),
      axios.get(apiUrl2),
      axios.get(apiUrl3),
      axios.get(apiUrl4),
    ])
      .then((responses) => {
        // 处理API响应数据
        const [response1, response2, response3, response4, response5] =
          responses;
        setPlaylistDetail(response1.data.playlist);
        setPlaylistDetail1(response2.data.playlist);
        setPlaylistDetail2(response3.data.playlist);
        setPlaylistDetail3(response4.data.playlist);
        setPlaylistDetail4(response5.data.playlist);

        // 提取 tracks 值并存储在 tracks 变量中
        const extractedTracks = Object.values(response1.data.playlist.tracks);
        setTracks(extractedTracks);
        const extractedTracks2 = Object.values(response2.data.playlist.tracks);
        setTracks2(extractedTracks2);
        const extractedTracks3 = Object.values(response3.data.playlist.tracks);
        setTracks3(extractedTracks3);
        const extractedTracks4 = Object.values(response4.data.playlist.tracks);
        setTracks4(extractedTracks4);
        const extractedTracks5 = Object.values(response5.data.playlist.tracks);
        setTracks5(extractedTracks5);
      })
      .catch((error) => {
        console.error("API请求失败", error);
      });
  }, []);
  console.log(tracks);

  return (
    <>
    <Carousel1 />
      <div
        style={{
          marginLeft: "35px",
          height: "40px",
          lineHeight: "40px",
          fontSize: "18px",
          marginTop: "10px",
          color: "red",
          fontWeight: "700",
        }}
      >
        热门
        <span style={{ color: "black", marginLeft: "5px" }}>推荐</span>
      </div>
      <Container style={{ display: "flex", marginLeft: "10px" }}>
        <PlaylistItem
          imageUrl="/img/re1.png"
          playlistName={playlistDetail.name}
          onClick={handlePlaylistClick}
        />

        <div style={{ marginLeft: "60px"}}>
          <PlaylistItem
            imageUrl="/img/re2.png"
            playlistName={playlistDetail1.name}
            onClick={handlePlaylistClick1}
          />
        </div>
        <div style={{ marginLeft: "60px" }}>
          <PlaylistItem
            imageUrl="/img/re3.png"
            playlistName={playlistDetail2.name}
            onClick={handlePlaylistClick2}
          />
        </div>
        <div style={{ marginLeft: "60px" }}>
          <PlaylistItem
            imageUrl="/img/re4.png"
            playlistName={playlistDetail3.name}
            onClick={handlePlaylistClick3}
          />
        </div>
        <div style={{ marginLeft: "60px" }}>
          <PlaylistItem
            imageUrl="/img/re5.png"
            playlistName={playlistDetail4.name}
            onClick={handlePlaylistClick4}
          />
        </div>
      </Container>
    </>
  );
};

export default Homerecommend;
