import React from "react";
import envBackground from "./envBackground.png";
import envLeaf from "./envLeaf.png";
export default function HomePageCarousel(props: { page: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 1px #000000",
        marginRight: "105px",
        marginLeft: "105px",
        marginTop: "30px",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${envBackground})`,
        backgroundPosition: "bottom center",
        backgroundSize: "400px",
        backgroundRepeat: "no-repeat",
        borderRadius: "30px",
        padding: "50px",
flex:1      }}
    >
      <div style={{
          flexDirection:"row",
          display:"flex",
      }}>
        <div style={{
            backgroundColor:"rgba(0, 173, 38, 0.2)",
            borderRadius:"80px",
            color:"rgba(0, 173, 38, 1)",
            fontSize:"12px",
            fontWeight:"bold",
            padding:"10px",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <img src={envLeaf} alt="leaf" style={{
                width:"20px",
                marginRight:"5px",
            }}/>
          Environment
        </div>
    </div>
      <div
        style={{
          color: "black",
          fontSize: "36px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Track Companies Enivormental Impact
      </div>
      <div
        style={{
          color: "black",
          fontSize: "18px",
          fontWeight: "regular",
          marginTop: "20px",
          borderWidth:"1px",
            borderColor:"black",
        }}
      >
        We track over 25 different metrics to calculate a companies
        environmental impact, so that you can find which companies work for you.{" "}
      </div>
      <div style={{flex:1}}/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#B75CFF",
            borderRadius: "50px",
            marginRight: "10px",
          }}
        />
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#C4C4C4",
            borderRadius: "50px",
            marginRight: "10px",
          }}
        />
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#C4C4C4",
            borderRadius: "50px",
          }}
        />
      </div>
    </div>
  );
}
