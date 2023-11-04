import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
const PlaylistItem = ({ imageUrl, playlistName }) => (
  <div>
    <ul
      style={{
        width: "150px",
        height: "190px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        borderRadius: "20px",
      }}
    ></ul>
    <div
      style={{
        marginTop: "10px",
        height: "20px",
        lineHeight: "20px",
        fontSize: "14px",
        fontWeight: "700",
      }}
    >
      {playlistName}
    </div>
  </div>
);
const Homerecommend = () => {
  const [playlistDetail, setPlaylistDetail] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlistDetail1, setPlaylistDetail1] = useState([]);
  const [playlistDetail2, setPlaylistDetail2] = useState([]);
  const [playlistDetail3, setPlaylistDetail3] = useState([]);
  useEffect(() => {
    // 构建API请求的URL
    const apiUrl = "http://localhost:3000/playlist/detail?id=6817959304";
    const apiUrl1 = "http://localhost:3000/playlist/detail?id=7378805635";
    const apiUrl2 = "http://localhost:3000/playlist/detail?id=5395431790";
    const apiUrl3 = "http://localhost:3000/playlist/detail?id=2701866695";
    // 发送GET请求
    // 使用Promise.all同时发送多个请求
    Promise.all([
      axios.get(apiUrl),
      axios.get(apiUrl1),
      axios.get(apiUrl2),
      axios.get(apiUrl3),
    ])
      .then((responses) => {
        // 处理API响应数据
        const [response1, response2, response3, response4] = responses;
        setPlaylistDetail(response1.data.playlist);

        setPlaylistDetail1(response2.data.playlist);
        setPlaylistDetail2(response3.data.playlist);
        setPlaylistDetail3(response4.data.playlist);
        console.log(playlistDetail);

        // 提取 tracks 值并存储在 tracks 变量中
        const extractedTracks = Object.values(response1.data.playlist.tracks);
        setTracks(extractedTracks);
      })
      .catch((error) => {
        console.error("API请求失败", error);
      });
  }, []);

  console.log(tracks);
  return (
    <>
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
        />
        <div style={{ marginLeft: "40px" }}>
          <PlaylistItem
            imageUrl="/img/re2.png"
            playlistName={playlistDetail1.name}
          />
        </div>
        <div style={{ marginLeft: "40px" }}>
          <PlaylistItem
            imageUrl="/img/re3.png"
            playlistName={playlistDetail2.name}
          />
        </div>
        <div style={{ marginLeft: "40px" }}>
          <PlaylistItem
            imageUrl="/img/re4.png"
            playlistName={playlistDetail3.name}
          />
        </div>
      </Container>

      {tracks.map((track) => track.name)}
    </>
  );
};

export default Homerecommend;
