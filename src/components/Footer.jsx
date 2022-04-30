import React from "react";
import Grid from "@material-ui/core/Grid";
import img_logo from "../assests/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container justifyContent="center">
        <Grid item xs={12} style={{ maxWidth: "30%" }}>
          <div className="flex">
            <div>
              <img src={img_logo} className="img_home_logo" alt="home_logo" />
            </div>

            <div className="grid footer-grid">
              <p className="halftone halftone-color" style={{color:"white"}}>CashP</p>
            </div>
          </div>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: "40px" }}>
          <Grid item xs={12}>
            <div className="flex">
              <div>
                <a
                  className="theme_button"
                 
                    href="/cashP"
                  style={{ backgroundColor: "#0f5266", color: "white" }}
                >
                  <img
                    className="ant-image-img"
                    src="https://splassive.com/rugfreecoins.png"
                    alt="http://localhost:3000/cashP"
                  />
                  AUDIT
                </a>
                <div style={{ color: "#fff", marginTop: "10px" }}>
                  2022 © CashP Network
                </div>
              </div>
              <div className="flex social-flex" style={{ width: "55%" }}>
                <a
                  className="theme_button"
                  href="https://twitter.com/Cashprinters"
                  style={{ backgroundColor: "#00aced", color: "white" }}
                >
                  {" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                      space="preserve"
                      viewBox="0 0 50 50"
                      height="30"
                      width="30"
                    >
                      <path
                        fill="#FFF"
                        d="M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z"
                      ></path>
                    </svg>
                    TWITTER
                  </div>
                </a>
          
                <a
                  className="theme_button"
                  href="https://t.me/cashprinter_ann"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                    </svg>
                    TELEGRAM CHANNEL
                  </div>
                </a>

                <a
                  className="theme_button"
                  href="https://t.me/cashprinter_ann"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                    </svg>
                    TELEGRAM GROUP
                  </div>
                </a>
              </div>
            </div>
          </Grid>
   
        </Grid>
          <a
            href="https://www.youtube.com/watch?v=OBGjpmBy918"
            style={{ marginTop: "30px", color: "#fff", fontSize: "18px" ,width:"100%" ,textAlign:"center"}}>
           CashP - Officially Signed
          </a>
      </Grid>
    </div>
  );
};

export default Footer;
