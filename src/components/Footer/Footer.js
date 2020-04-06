import React from "react";
import { render } from "react-dom";

const footerStyle = {
  backgroundColor: "#303f9f;",
  fontSize: "1.5em",
  color: "#ffff",
  /*borderTop: "1px solid #E7E7E7",*/
  textAlign: "left",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  fontFamily: "Comic Neue, cursive",
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

export default Footer;
