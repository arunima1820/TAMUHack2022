import React from "react";
import logo from './logo.png';

export default function Header(props:{page:number}){
    return(
           <div style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
           }}>
            <div style={{
              flex: 1
            }}>
              <img src={logo} alt="logo" style={{
                height:50,
                resize:'inline',
                marginLeft:73,
                marginTop:32,
              }}/>
            </div>
            <div style={{
              flex: 1,
            }}>
              <div style={{
                backgroundColor: '#F5F5F5',
                flex: 1,
                height:60,
                borderRadius:30,
                marginTop:27,
                flexDirection: 'row',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontSize: 'medium',
                  color: props.page===1?'black':"#C5C5C5",
                }}>
                  Home
                </div>
                <div style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontSize: 'medium',
                  color: props.page===2?'black':"#C5C5C5",
                }}>
                  Get Started
                </div>
                <div style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontSize: 'medium',
                  color: props.page===3?'black':"#C5C5C5",
                }}>
                  Suggestions
                </div>
              </div>
            </div>
            <div style={{
              flex: 1
            }}/>
           </div>
    )
}