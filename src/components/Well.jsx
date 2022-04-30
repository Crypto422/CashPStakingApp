import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ChartCompnent from "./Chart";
import img_Casher2 from "../assests/images/Casher2.png";
import img_logo from "../assests/images/logo.png";
import img_fantom from "../assests/images/fantom.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Well = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tokenPercent, setTokenPercent] = useState("");
  const setPercent = (value) => (e) => {
    setTokenPercent(value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <div className="flex">
              <div className="stats_text_title gradient-text1">THE BANK</div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={6} sm={4} md={3}>
            <div className="stats_card_grp_well">
              <div className="stats_card_avatar">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 288 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                </svg>
              </div>
              <div className="stats_card_text_name_well">CashP Price</div>{" "}
              <div className="stats_card_text_number_well">
                <div>$34.525</div>
                <div>0.36846 FTM/CashP</div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <div className="stats_card_grp_well">
              <div className="stats_card_avatar">
              <img src={img_fantom} width="70" height="70" alt="logo" style={{borderRadius:"50%"}}/>

              </div>
              <div className="stats_card_text_name_well">FTM Balance</div>{" "}
              <div className="stats_card_text_number_well">
                <div>29,134.75</div>
                <div>$2,729,925.67</div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <div className="stats_card_grp_well">
              <div className="stats_card_avatar">
             <img src={img_logo} width="70" height="70" alt="logo" style={{borderRadius:"50%"}}/>
              </div>
              <div className="stats_card_text_name_well">CashP Balance</div>{" "}
              <div className="stats_card_text_number_well">79,088.98</div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="panel_back">
        <div className="container" style={{ marginTop: "30px" }}>
          <Tabs>
            <TabList>
              <Tab>BUY CashP Tokens</Tab>
              <Tab>SELL CashP Tokens</Tab>
            </TabList>

            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_price btn_formart_mobile">
                    CashPrice : $34.697
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_unit btn_formart_mobile">
                    Balance :<span>0 FTM</span>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_price btn_formart_mobile">
                    Estimate received :<span>0.000 Cashptokens</span>
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_unit btn_formart_mobile">
                    Slippage tolerance :<span>{tokenPercent} %</span>
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10}>
                  <div className="ipt_grp btn_formart_mobile">
                    <div className="ipt_avatar">
                      <img
                        src={img_logo}
                        alt="logo"
                        width="28"
                        height="28"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="ipt_inpunt">
                      <input
                        type="number"
                        placeholder="Enter FTM amount"
                        className="ipt"
                      />
                    </div>
                    <div className="ipt_menu">
                      <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="20px"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#03a9f4"
                            d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          ></path>
                        </svg>
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem style={{ padding: "5px 25px" }}>
                          <div className="set_slippage">Set Slippage</div>
                        </MenuItem>
                        <MenuItem style={{ padding: "5px 25px" }}>
                          <div className="menu_grp">
                            <div className="menu_btn_grp">
                              <button
                                className="menu_btn"
                                onClick={setPercent(1)}
                              >
                                1 %
                              </button>
                              <button
                                className="menu_btn"
                                onClick={setPercent(5)}
                              >
                                5 %
                              </button>
                              <button
                                className="menu_btn"
                                onClick={setPercent(10)}
                              >
                                10 %
                              </button>
                            </div>
                            <div className="menu_btn_grp">
                              <input type="bumber" value={tokenPercent} />%
                            </div>
                          </div>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_price btn_formart_mobile">
                    Minimum received : <span>0.000 Cashptokens</span>
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_unit btn_formart_mobile">
                    10% Tax is applied on buys
                  </div>
                </Grid>
                <button
                  className="theme_button"
                  style={{ width: "90%", marginTop: "30px" }}
                  disabled
                >
                  BUY
                </button>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_price btn_formart_mobile">
                    CashP price : $34.697
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_unit btn_formart_mobile">
                    Balance :<span>0 CAHSP</span>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_price btn_formart_mobile">
                    Estimate received :<span>0.000 CashP tokens</span>
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_unit btn_formart_mobile">
                    Slippage tolerance :<span>{tokenPercent} %</span>
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10}>
                  <div className="ipt_grp btn_formart_mobile">
                    <div className="ipt_avatar">
                      <img
                        src={img_logo}
                        alt="logo"
                        width="28"
                        height="28"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="ipt_inpunt">
                      <input
                        type="number"
                        placeholder="Enter CashP amount"
                        className="ipt"
                      />
                    </div>
                    <div className="ipt_menu">
                      <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="20px"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#03a9f4"
                            d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                          ></path>
                        </svg>
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem style={{ padding: "5px 25px" }}>
                          <div className="set_slippage">Set Slippage</div>
                        </MenuItem>
                        <MenuItem style={{ padding: "5px 25px" }}>
                          <div className="menu_grp">
                            <div className="menu_btn_grp">
                              <button
                                className="menu_btn"
                                onClick={setPercent(1)}
                              >
                                1 %
                              </button>
                              <button
                                className="menu_btn"
                                onClick={setPercent(3)}
                              >
                                3 %
                              </button>
                              <button
                                className="menu_btn"
                                onClick={setPercent(5)}
                              >
                                5 %
                              </button>
                            </div>
                            <div className="menu_btn_grp">
                              <input type="bumber" value={tokenPercent} />%
                            </div>
                          </div>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_price btn_formart_mobile">
                    Minimum received : <span>0.000 CashP tokens</span>
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <div style={{ marginTop: "20px" }} className="well_tab_unit btn_formart_mobile">
                    10% Tax is applied on buys
                  </div>
                </Grid>
                <button
                  className="theme_button"
                  style={{ width: "90%", marginTop: "30px" }}
                  disabled
                >
                  BUY
                </button>
              </Grid>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <ChartCompnent />
      <div className="img_wave_grp">
        <img src={img_Casher2} alt="img_wave2" className="img_wave2" />
      </div>
    </div>
  );
};

export default Well;
