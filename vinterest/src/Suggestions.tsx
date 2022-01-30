import React, { useState, useEffect } from "react";
import robot from "./robot.png";
import { useLocation } from 'react-router-dom';
import { Line } from "@nivo/line";
import envicon from "./envicon.png";
import socialicon from "./socialicon.png";
import animalicon from "./animalicon.png";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Header from "./Header";
import backarrow from "./backarrow.png";
import CircularProgress from '@mui/material/CircularProgress';
export default function Suggestions(props: { data: any }) {
  const { state } = useLocation();
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    if (!state) {
      return;
    }
    // axios.post(state)
    fetch("http://localhost:8080/recommendations", {
      method: "POST",
      mode: "cors",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    }).then(data => {
      return data.json()
    }).then(res => { console.log(res.data); setData(JSON.parse(JSON.stringify(res.data))); });
  }, []);

  if (data.length === 0 && state) {
    return (
      <>
        <Header page={3} />
        <div
          style={{
            flex: 1,
            fontSize: "24px",
            textAlign: "center",
            color: "black",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <img
              src={robot}
              alt="robot"
              style={{
                height: "64px",
                marginRight: "10px",
              }}
            ></img>
            <div>
              I'm loading up your portfolio data now, this may take a second<br></br>
            </div>
          </div>
          <br />
          <br />
          <CircularProgress />
        </div>

      </>
    )
  }
  else {
    return (
      <>
        <Header page={3} />
        <div
          style={{
            flex: 1,
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
            color: "black",
            marginTop: "30px",
          }}
        >
          Our Suggestions For You
        </div>
        <button
          style={{
            color: "black",
            backgroundColor: "#F5F5F5",
            borderRadius: "30px",
            borderWidth: "0px",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "20px",
            alignItems: "left",
            justifyContent: "left",
            alignContent: "center",
            flexDirection: "row",
            display: "flex",
            flex: 1,
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          <img
            src={backarrow}
            alt="backarrow"
            style={{ height: 18, marginRight: "10px" }}
          />
          <div>Edit Preferences</div>
        </button>
        <div style={{ display: "flex", flexWrap: "wrap", padding: "2rem", justifyContent: "center" }}>
          {data.map((item: any) => {
            return <Card data={item}></Card>;
          })}
        </div>
      </>
    );
  }
}

function Card(props: { data: any }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 1px #000000",
        marginLeft: "50px",
        marginTop: "30px",
        marginBottom: "30px",
        flex: 1,
        width: "530px",
        maxWidth: "530px",
        borderRadius: "30px",
        padding: "40px",
      }}>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
          alignItems: "baseline-start",
        }}>
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginRight: "20px",
          }}>
          {props.data.ticker}
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "baseline",
            paddingBottom: "10px",
          }}
        >
          <div style={{ flex: 1 }}></div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {props.data.name}
          </div>
        </div>
        <div
          style={{
            flex: 1,
          }}
        ></div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Today
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >$ {props.data.price}</div>
        </div>
      </div>

      <Line
        data={[props.data.data]}
        margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
        width={500}
        height={150}
        curve="natural"
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        colors={["#B75CFF"]}
        lineWidth={3}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
      />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        borderTop: "1px solid #EFEFEF",
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
      }}>
        <img src={envicon} alt={"envicon"} style={{ width: 15, height: 15 }} />
        <div style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}>Environmental Rating</div>
        <div style={{ flex: 1 }}></div>
        <div style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: getColor(props.data.environmentalImpact),
        }}>{props.data.environmentalImpact}</div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        borderTop: "1px solid #EFEFEF",
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
      }}>
        <img src={socialicon} alt={"envicon"} style={{ width: 15, height: 15 }} />
        <div style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}>Social Impact Rating</div>
        <div style={{ flex: 1 }}></div>
        <div style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: getColor(props.data.socialImpact),
        }}>{props.data.socialImpact}</div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        borderTop: "1px solid #EFEFEF",
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
      }}>
        <img src={animalicon} alt={"envicon"} style={{ width: 15, height: 15 }} />
        <div style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}>Animal Conservation</div>
        <div style={{ flex: 1 }}></div>
        <div style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: getColor(props.data.animalConservation),
        }}>{props.data.animalConservation}</div>
      </div>
    </div>
  );
}

function getColor(rating: string) {
  switch (rating) {
    case "A":
      return "#00AD26";
    case "B":
      return "#FFB800";
    case "C":
      return "#74ABFF";
    case "F":
      return "#FF2936";
    default:
      return "#F5F5F5";
  }
}