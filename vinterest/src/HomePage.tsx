import React, { useCallback } from "react";
import "./HomePage.css";
import Header from "./Header";
import HomePageCarousel from "./HomePageCarousel";
import {useHistory} from 'react-router-dom';

function HomePage() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/chat'), [history]);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <Header page={1} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 0.5,
            padding: "105px",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: "72px",
              fontWeight: "bold",
            }}
          >
            Invest in What You Care About
          </div>
          <div
            style={{
              color: "black",
              fontSize: "24px",
              fontWeight: "regular",
              marginTop: "20px",
            }}
          >
            Find and invest in companies that truly meet your expectations
            environmentally and socially.
          </div>
          <button
            style={{
              backgroundColor: "#B75CFF",
              borderRadius: "50px",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "20px",
              padding: "15px",
              width: "250px",
              borderWidth: "0px",
            }}
            onClick={handleOnClick}
          >
            Get Started
          </button>
        </div>
        <div
          style={{
            flex: 0.6,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HomePageCarousel page={1}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
