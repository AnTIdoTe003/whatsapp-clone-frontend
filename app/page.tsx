"use client";
import React, { useEffect } from "react";
import "./style.scss";
import io from "socket.io-client";
const Home = () => {
  useEffect(() => {
    const socket = io("http://localhost:8080");
    socket.on("connect", () => {
      console.log("Connected to Socket.io");
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">I am Home</div>
      </div>
    </div>
  );
};

export default Home;
