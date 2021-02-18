import React, { Component } from "react";
import Logo from "./logo.png";
import MyDropzone from "./mydropzone";

function Validator() {
  return (
    <div style={{ flex: 1 }}>
      <div>
        <img
          src={Logo}
          style={{ height: "5%", width: "15%", marginTop: "2%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          //alignItems: 'center',
          // height:'100vh',
          fontSize: 25,
        }}
      >
        Welcome to EDI Validator
      </div>
      <div style={{marginLeft:'15%',marginRight:'15%',marginTop:20}}>
      
        <MyDropzone />
     
      </div>
    </div>
  );
}

export default Validator;
