import { transcode } from "buffer";
import Header from "./Header";
import robot from './robot.png';
export default function Chatbot(){
    return (
    <>
    <div    
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}>
      <Header page={1} />
    </div>
    <div
    style={{
        backgroundColor: "white",
        borderColor: "gray",
        borderRadius: "10px",
        width: "532px",
        marginTop: "100px",
        marginLeft: "367px" 
    }}>
        <div 
        style={{
            flexDirection: 'row',
            display: 'flex',
        }}>
        <img src={robot} alt="robot" style={{
            height:"64px",
            marginRight: "10px"
        }}></img>
        <div>
        <p>Hey, my name is VI-ctoria, I am here to help you start investing in what you care about!<br></br><b>Lets start with what should I call you?</b></p>
        </div>
        </div>
        
        <div 
        style={{
            flexDirection: 'column',
            display: 'flex',
            marginLeft: "542px",
            width:"400px"
        }}>
        <p> Enter your name!</p>
        <input type="text" id="userName" style={{
            height: "45px",
            borderRadius: "10px"
        }}/>
        </div>

        <div 
        style={{
            flexDirection: 'row',
            display: 'flex',
            marginTop: '10px'
        }}>
        <img src={robot} alt="robot" style={{
            height:"64px",
            marginRight: "10px"
        }}></img>
        <div>
        <p>Hello User, the first bit of information we need is <b>how much do you value a companies environment impact?</b></p>
        </div>
        </div>
        
        <div 
        style={{
            flexDirection: 'column',
            display: 'flex',
            marginLeft: "542px",
            width:"400px"
        }}>
        <p> How important is environmental impact to you? </p>
        <div style={{
            flexDirection: "row",
            display: "flex",
            padding: "10px",
            justifyContent: "space-between"
        }}>
        <input type="radio" id="1" name="1" value="child"/>
        <input type="radio" id="1" name="1" value="child"/>
        <input type="radio" id="1" name="1" value="child"/>
        <input type="radio" id="1" name="1" value="child"/>
        <input type="radio" id="1" name="1" value="child"/>
        </div>
        </div>


    </div>
    </>
    )
}