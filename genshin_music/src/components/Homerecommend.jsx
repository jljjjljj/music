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
    <div style={{ width: "20%", height: "250px", overflow: "hidden" }}>
      <ul
        style={{
          marginLeft: "10px",
          width: "65%",
          height: "65%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          borderRadius: "20px",
          boxShadow: "#7f7f7f 1px 1px 10px 1px",
          transition: "transform 0.3s ease", // 添加过渡效果
          cursor: "pointer", // 添加手型指针样式
        }}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.07)"; // 鼠标悬浮时放大
          setFlag(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // 鼠标离开时恢复原始大小
          setFlag(false);
        }}
      ></ul>

      <div
        style={{
          marginLeft: "10px",
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
  const [playlistDetail5, setPlaylistDetail5] = useState([]);
  const [tracks6, setTracks6] = useState([]);

  const list = [
    { imgUrl: "/img/re1.png", name: playlistDetail.name, trackState: tracks },
    { imgUrl: "/img/re2.png", name: playlistDetail1.name, trackState: tracks2 },
    { imgUrl: "/img/re3.png", name: playlistDetail2.name, trackState: tracks3 },
    { imgUrl: "/img/re4.png", name: playlistDetail3.name, trackState: tracks4 },
    { imgUrl: "/img/re5.png", name: playlistDetail4.name, trackState: tracks5 },
    { imgUrl: "/img/re6.png", name: playlistDetail5.name, trackState: tracks6 },
  ];
  // 从列表中随机选择三个元素，打乱，挑前五个
  const shuffledList = [...list].sort(() => Math.random() - 0.5); //打乱
  const selectedPlaylists = shuffledList.slice(0, 5);
  const navigate = useNavigate(); // 获取 useNavigate 函数

  useEffect(() => {
    // 构建API请求的URL
    const apiUrl = "http://localhost:3000/playlist/detail?id=7440326502";
    const apiUrl1 = "http://localhost:3000/playlist/detail?id=7378805635";
    const apiUrl2 = "http://localhost:3000/playlist/detail?id=7437331292";
    const apiUrl3 = "http://localhost:3000/playlist/detail?id=7260028404";
    const apiUrl4 = "http://localhost:3000/playlist/detail?id=7822788988";
    const apiUrl5 = "http://localhost:3000/playlist/detail?id=7068025847";
    // 发送GET请求
    // 使用Promise.all同时发送多个请求
    Promise.all([
      axios.get(apiUrl),
      axios.get(apiUrl1),
      axios.get(apiUrl2),
      axios.get(apiUrl3),
      axios.get(apiUrl4),
      axios.get(apiUrl5),
    ])
      .then((responses) => {
        // 处理API响应数据
        const [
          response1,
          response2,
          response3,
          response4,
          response5,
          response6,
        ] = responses;
        setPlaylistDetail(response1.data.playlist);
        setPlaylistDetail1(response2.data.playlist);
        setPlaylistDetail2(response3.data.playlist);
        setPlaylistDetail3(response4.data.playlist);
        setPlaylistDetail4(response5.data.playlist);
        setPlaylistDetail5(response6.data.playlist);

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
        const extractedTracks6 = Object.values(response6.data.playlist.tracks);
        setTracks6(extractedTracks6);
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
        {selectedPlaylists.map((item) => (
          <PlaylistItem
            imageUrl={item.imgUrl}
            playlistName={item.name}
            onClick={() =>
              navigate("/songlist", { state: { tracks: item.trackState } })
            }
          />
        ))}
      </Container>
    </>
  );
};

export default Homerecommend;
