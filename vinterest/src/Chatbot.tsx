import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Header from "./Header";
import robot from "./robot.png";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
export default function Chatbot() {
    const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/suggestions'), [history]);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        paddingBottom: "100px",
      }}
    >
      <Header page={2} />
      <div
        style={{
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "300px",
          marginRight: "300px",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            border: "1px solid #e0e0e0",
            padding: "20px",
            borderRadius: "10px",
            alignItems: "center",
            width: "400px",
            marginTop: "30px",
            marginBottom: "30px",
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
            Hey, my name is VI-ctoria, I am here to help you start investing in
            what you care about!<br></br>
            <b>Lets start with what should I call you?</b>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "400px",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            Enter your name!
            <input
              type="text"
              id="userName"
              style={{
                height: "45px",
                borderRadius: "10px",
                marginTop: "5px",
                border: "1px solid #e0e0e0",
              }}
            />
          </div>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: "30px",
            marginBottom: "30px",
            border: "1px solid #e0e0e0",
            padding: "20px",
            borderRadius: "10px",
            alignItems: "center",
            width: "400px",
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
            <p>
              Hello User, the first bit of information we need is{" "}
              <b>how much do you value a companies environment impact?</b>
            </p>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
            }}
          >
            {" "}
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  How important is environmental impact to you?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: "30px",
            marginBottom: "30px",
            border: "1px solid #e0e0e0",
            padding: "20px",
            borderRadius: "10px",
            alignItems: "center",
            width: "400px",
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
          <div>Thank you! What social ideas matter to you?</div>
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "400px",
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <p> Select all that apply </p>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: "10px",
              }}
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Environment" />
                <FormControlLabel control={<Checkbox />} label="Privacy" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Equal Representation"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Women's Rights"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Animal Conservation"
                />
                <FormControlLabel control={<Checkbox />} label="LGBTQ" />
              </FormGroup>
            </div>
          </div>
          
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
            Next
          </button>
      </div>
    </div>
  );
}
