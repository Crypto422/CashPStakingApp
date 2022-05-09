/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useContext, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Switch from "@material-ui/core/Switch";
import img_Casher2 from "../assests/images/Casher2.png";
import img_logo from "../assests/images/logo.png";
import { AppContext } from "../context/AppContext";
import { ethers } from "ethers";

const Tap = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    account,
    library,
    getStakingContract,
    getCashpContract,
    totalClaimedAmount,
    totalDepositAmount,
    cashpBalance,
    currentClaimAmount,
    cashpPrice,
    setContractTotalLiquidity
  } = useContext(AppContext);
  const [depositAmount, setDepositAmount] = useState(0);
  const [isCompounding, setIsCompounding] = useState();
  const [isPreClaiming, setIsPreClaiming] = useState();
  const [isDepositing, setIsDepositing] = useState();
  const [isClaiming, setIsClaming] = useState();

  const handleDeposite = (event) => {
    let value = event.target.value;
    setDepositAmount(value);
  }

  const Deposite = async () => {
    setIsDepositing(true);
    let tokenContract;
    tokenContract = getCashpContract(library.getSigner());
    let stakingContract;
    stakingContract = getStakingContract(library.getSigner());

    try {
      const res = await tokenContract
        .approve(
          stakingContract.address,
          ethers.utils.parseUnits(depositAmount, 18)
        )
        .catch((err) => setIsDepositing(false));
      const data = await res.wait();
      if (account && data) {
        const res = await stakingContract
          .deposite(ethers.utils.parseUnits(depositAmount, 18))
          .catch((err) => { setIsDepositing(false) });
        const data = await res.wait();
        if (data) {
          setIsDepositing(false);
          setContractTotalLiquidity();
        } else {
          setIsDepositing(false);
        }
      }
    } catch (error) {
      console.log(error);
    }

  };

  const Compound = async () => {
    setIsCompounding(true);
    let stakingContract;
    stakingContract = getStakingContract(library.getSigner());
    try {
      if (account) {
        const res = await stakingContract
          .compound()
          .catch((err) => { setIsCompounding(false) });
        const data = await res.wait();
        if (data) {
          setIsCompounding(false);
          setContractTotalLiquidity();
        } else {
          setIsCompounding(false);
        }
      } else {
        setIsCompounding(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PreClaim = async () => {
    setIsPreClaiming(true);
    let stakingContract;
    stakingContract = getStakingContract(library.getSigner());
    try {
      if (account) {
        const res = await stakingContract
          .preClaim()
          .catch((err) => { setIsPreClaiming(false) });
        const data = await res.wait();
        if (data) {
          setIsPreClaiming(false);
          setContractTotalLiquidity();
        } else {
          setIsPreClaiming(false);
        }
      } else {
        setIsPreClaiming(false);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const Claim = async () => {
    setIsClaming(true);
    let stakingContract;
    stakingContract = getStakingContract(library.getSigner());
    try {
      if (account) {
        const res = await stakingContract
          .claim()
          .catch((err) => { setIsClaming(false) });
        let data = await res.wait();
        if (data) {
          setIsClaming(false);
          setContractTotalLiquidity();
        } else {
          setIsClaming(false);
        }
      } else {
        setIsClaming(false);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(async () => {
    if (account) {
      setContractTotalLiquidity();
    }

  }, [account])



  return (
    <div>
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <div className="flex">
              <div
                className="stats_text_title gradient-text1"
                style={{ marginTop: "30px" }}
              >
                {
                  account ? "THE ATM" : "Please connect your wallet!"
                }

              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="container">
        <Grid container>
          <Grid item xs={6} sm={4} md={4} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="stats_card_grp_well tap_card_grp" style={{ justifyContent: 'space-between', width: '-webkit-fill-available' }}>
                <div className="stats_card_avatar">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M264.4 95.01c-35.6-.06-80.2 11.19-124.2 34.09C96.27 152 61.45 182 41.01 211.3c-20.45 29.2-25.98 56.4-15.92 75.8 10.07 19.3 35.53 30.4 71.22 30.4 35.69.1 80.29-11.2 124.19-34 44-22.9 78.8-53 99.2-82.2 20.5-29.2 25.9-56.4 15.9-75.8-10.1-19.3-35.5-30.49-71.2-30.49zm91.9 70.29c-3.5 15.3-11.1 31-21.8 46.3-22.6 32.3-59.5 63.8-105.7 87.8-46.2 24.1-93.1 36.2-132.5 36.2-18.6 0-35.84-2.8-50.37-8.7l10.59 20.4c10.08 19.4 35.47 30.5 71.18 30.5 35.7 0 80.3-11.2 124.2-34.1 44-22.8 78.8-52.9 99.2-82.2 20.4-29.2 26-56.4 15.9-75.7zm28.8 16.8c11.2 26.7 2.2 59.2-19.2 89.7-18.9 27.1-47.8 53.4-83.6 75.4 11.1 1.2 22.7 1.8 34.5 1.8 49.5 0 94.3-10.6 125.9-27.1 31.7-16.5 49.1-38.1 49.1-59.9 0-21.8-17.4-43.4-49.1-59.9-16.1-8.4-35.7-15.3-57.6-20zm106.7 124.8c-10.2 11.9-24.2 22.4-40.7 31-35 18.2-82.2 29.1-134.3 29.1-21.2 0-41.6-1.8-60.7-5.2-23.2 11.7-46.5 20.4-68.9 26.1 1.2.7 2.4 1.3 3.7 2 31.6 16.5 76.4 27.1 125.9 27.1s94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9z"></path>
                  </svg>
                </div>
                <div className="stats_card_text_name_well">Available</div>{" "}
                <div className="stats_card_text_number_well" style={{ width: '-webkit-fill-available' }}>
                  <div>
                    {
                      cashpBalance >= 0 ? cashpBalance : "Fetching.."
                    } &nbsp; CashP
                  </div>
                  <div style={{ wordBreak: 'break-all' }}>$ &nbsp;
                    {
                      cashpPrice >= 0 && cashpBalance >= 0 ? cashpPrice * cashpBalance : "Fetching..."
                    }
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={4} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="stats_card_grp_well tap_card_grp tap_card_grp" style={{ justifyContent: 'space-between', width: '-webkit-fill-available' }}>
                <div className="stats_card_avatar">
                  <img
                    src={img_logo}
                    alt="logo"
                    width="80"
                    height="80"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="stats_card_text_name_well">Deposit</div>{" "}
                <div className="stats_card_text_number_well" style={{ width: '-webkit-fill-available' }}>
                  <div>
                    {
                      totalDepositAmount >= 0 ? totalDepositAmount : "Fetching.."
                    } &nbsp; CashP
                  </div>
                  <div style={{ wordBreak: 'break-all' }}>$ &nbsp;
                    {
                      cashpPrice >= 0 && totalDepositAmount >= 0 ? cashpPrice * totalDepositAmount : "Fetching..."
                    }
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={4} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="stats_card_grp_well tap_card_grp" style={{ justifyContent: 'space-between', width: '-webkit-fill-available' }}>
                <div className="stats_card_avatar">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"></path>
                  </svg>
                </div>
                <div className="stats_card_text_name_well">Claimed</div>{" "}
                <div className="stats_card_text_number_well" style={{ width: '-webkit-fill-available' }}>
                  <div>
                    {
                      totalClaimedAmount >= 0 ? totalClaimedAmount : "Fetching.."
                    } &nbsp; CashP
                  </div>
                  <div style={{ wordBreak: 'break-all' }}>$ &nbsp;
                    {
                      cashpPrice >= 0 && totalClaimedAmount >= 0 ? cashpPrice * totalClaimedAmount : "Fetching..."
                    }
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={4} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="stats_card_grp_well tap_card_grp" style={{ justifyContent: 'space-between', width: '-webkit-fill-available' }}>
                <div className="stats_card_avatar">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                  </svg>
                </div>
                <div className="stats_card_text_name_well">Rewarded</div>{" "}
                <div className="stats_card_text_number_well" style={{ width: '-webkit-fill-available' }}>
                  <div>Coming Soon no (referral Program is not yet available)</div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={4} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="stats_card_grp_well tap_card_grp" style={{ justifyContent: 'space-between', width: '-webkit-fill-available' }}>
                <div className="stats_card_avatar">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 23v466h466v-18H41v-82.184l85.854-57.234 70.023 70.022 65.133-260.536L387.28 203.7 455.07 95.73l19.317 11.858 6.102-71.1-60.644 37.616 19.884 12.207-59.01 93.99-130.732-65.366-62.865 251.462-57.98-57.978L41 367.184V23H23z"></path>
                  </svg>
                </div>
                <div className="stats_card_text_name_well">Max Payout</div>{" "}
                <div className="stats_card_text_number_well" style={{ width: '-webkit-fill-available' }}>
                  <div>Coming Soon no (referral Program is not yet available)</div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={4} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="stats_card_grp_well tap_card_grp" style={{ justifyContent: 'space-between', width: '-webkit-fill-available' }}>
                <div className="stats_card_avatar">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stats_card_text_name_well">
                  Players (Direct / Total)
                </div>{" "}
                <div className="stats_card_text_number_well" style={{ width: '-webkit-fill-available' }}>
                  <div>Coming Soon no (referral Program is not yet available)</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="panel_back_tab">
        <div className="container" style={{ marginTop: "30px" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className="flex">
                <div className="stats_text_title gradient-text1">
                  {
                    account ? "MANAGE" : "PLEASE CONNECT TO YOUR WALLET!"
                  }
                </div>
              </div>
              <div className="btn_format" style={{ display: 'flex', justifyContent:'space-between' }}>
                <button
                  className="theme_button"
                  onClick={Compound}
                  style={{
                    width: "100%",
                    marginTop: "30px",
                  }}
                  disabled={isCompounding || totalDepositAmount === 0}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  &nbsp;
                  {
                    isCompounding ? "Compounding now..." : "COMPOUND"
                  }
                </button>
                <button
                  className="theme_button"
                  onClick={PreClaim}
                  style={{
                    width: "100%",
                    marginTop: "30px",
                    marginLeft: '5px',
                    marginRight: '5px'
                  }}
                  disabled={isPreClaiming || totalDepositAmount === 0}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  &nbsp;
                  {
                    isPreClaiming ? "PreClaiming now..." : "PreCLAIM"
                  }
                </button>
                <button
                  className="theme_button"
                  onClick={Claim}
                  style={{ width: "100%", marginTop: "30px" }}
                  disabled={isClaiming || totalDepositAmount === 0}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"></path>
                  </svg>
                  &nbsp;
                  {
                    isClaiming ? "Claiming now..." : "CLAIM"
                  }
                </button>
              </div>
            </Grid>
          </Grid>

          <Tabs>
            <TabList>
              <Tab>STAKE CashpTokens</Tab>
            </TabList>

            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={4} md={4}>
                  <div
                    style={{ marginTop: "20px", textAlign: 'center' }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    CashPrice : $&nbsp;
                    {
                      cashpPrice ? cashpPrice : "Fetching..."
                    }
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div
                    style={{ marginTop: "20px", textAlign: 'center' }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    You can claim :<span>
                      {
                        currentClaimAmount >= 0 ? currentClaimAmount : "Fetching..."
                      }
                      &nbsp;CASHP
                    </span>
                  </div>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                  <div
                    style={{ marginTop: "20px", textAlign: 'center' }}
                    className="well_tab_unit btn_formart_mobile"
                  >
                    Balance :<span>
                      {
                        cashpBalance >= 0 ? cashpBalance : "Fetching..."
                      }
                      &nbsp;CASHP
                    </span>
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
                        onChange={handleDeposite}
                        placeholder="Enter CashP amount"
                        className="ipt"
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <div
                    style={{ marginTop: "20px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    A minimum of 0.1 CashP required for deposits
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                {/* <Grid item xs={12} sm={5} md={4}>
                  <Switch
                    checked={state.checkedB}
                    disabled={depositAmount <= 0}
                    onChange={handleChange}
                    name="checkedB"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <span style={{ marginTop: "20px" }} className="well_tab_unit">
                    Approve CashP
                  </span>
                </Grid> */}
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <div
                    style={{ marginTop: "20px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    A 10% tax is charged on deposits
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <button
                  onClick={Deposite}
                  disabled={depositAmount <= 0 || isDepositing}
                  className="theme_button btn_formart_mobile"
                >
                  {
                    isDepositing ? "Depositing now..." : "DEPOSITE"
                  }
                </button>
              </Grid>
            </TabPanel>
          </Tabs>

          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className="flex">
                <div className="stats_text_title gradient-text1">Coming Soon</div>
              </div>
            </Grid>
          </Grid>

          <Tabs>
            <TabList>
              <Tab>Join the Casher</Tab>
            </TabList>

            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Current Casher
                  </div>
                  <div className="well_tab_price btn_formart_mobile">
                    0x0000000000000000000000000000000000000000
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Last Checkin
                  </div>
                  <div className="well_tab_price btn_formart_mobile">0</div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Update your Casher starter
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={10}>
                  <div style={{ fontSize: "22px" }} className="well_tab_price">
                    <input
                      type="text"
                      className="ipt ipt_format"
                      placeholder="Enter Address"
                      style={{ textAlign: "left", padding: "10px" }}
                    />
                    <button className="theme_button btn_format" disabled>
                      UPDATE
                    </button>
                    <button
                      className="theme_button btn_format reduce_font"
                      style={{ width: "100%", marginTop: "10px" }}
                    >
                      SUPPORT MARKETING AND DEVELKPMENT
                    </button>
                  </div>
                </Grid>
              </Grid>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Grid
        container
        justifyContent="center"
        className="stats_below_container1"
      >
        <div className="stats_below_text">
          <div>
            Cash Printer The ATM is a low-risk, high reward contract that
            operates similarly to a high yield certificate of deposit by paying
            out 2% daily return on investment up to 360% for 180 days. Players
            can compound and extend their earnings through deposits, hydrating
            (compounding) rewards as well as through team based referrals.
          </div>
        </div>
      </Grid>
      <div className="panel_back_tab_check">
        <div className="container">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className="flex">
                <div className="stats_text_title gradient-text1">
                  Check Who CashPed
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="container tap_check_card">
            <Grid container justifyContent="center">
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "0px", fontSize: "20px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Looking for Player
                  </div>
                </Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={8}>
                  <div className="ipt_grp btn_formart_mobile">
                    <div className="ipt_inpunt">
                      <input
                        type="text"
                        style={{ textAlign: "left" }}
                        placeholder="Enter Address"
                        className="ipt"
                      />
                    </div>
                    <div className="ipt_avatar">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="search"
                        width="26px"
                        height="26px"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "0px", fontSize: "20px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Play Info
                  </div>
                </Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={8}>
                  <table className="btn_formart_mobile">
                    <tbody>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Directs</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Team</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Total Deposits</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0.000 CashP</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Airdrop Received</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0.000 CashP</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Airdrop Sent</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0.000 CashP</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Last Airdrop Activity</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>Never</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className="panel_back ">
        <div className="container ">
          <Tabs>
            <TabList>
              <Tab>Team Viewer</Tab>
              <Tab>Team Airdrop</Tab>
              <Tab>Direct Airdrop</Tab>
            </TabList>

            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Player
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <div className="ipt_grp btn_formart_mobile">
                    <div className="ipt_inpunt">
                      <input
                        type="text"
                        style={{ textAlign: "left" }}
                        placeholder="Enter Address"
                        className="ipt"
                      />
                    </div>
                    <div className="ipt_avatar">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="search"
                        width="26px"
                        height="26px"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
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
                  <button className="theme_button btn_formart_mobile">
                    Use my address
                  </button>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Results :
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <div className="nodta_grp">
                    <div className="nodata_txt">Address</div>
                    <div className="nodata_box">NO DATA</div>
                  </div>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price"
                  >
                    Player
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <input
                    type="text"
                    style={{ textAlign: "left", padding: "10px" }}
                    placeholder="Enter Address"
                    className="ipt ipt_format"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10}>
                  <button className="theme_button btn_formart_mobile">
                    Use my address
                  </button>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{ marginTop: "20px" }}
                        className="well_tab_price btn_formart_mobile"
                      >
                        Minium directs
                      </div>
                      <select
                        className="tab_select btn_formart_mobile"
                        style={{ marginTop: "10px" }}
                      >
                        <option>None</option>
                        <option>1</option>
                        <option>5</option>
                        <option>15</option>
                      </select>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{ marginTop: "20px" }}
                        className="well_tab_price btn_formart_mobile"
                      >
                        Minium directs
                      </div>
                      <select
                        className="tab_select btn_formart_mobile"
                        style={{ marginTop: "10px" }}
                      >
                        <option>1+CashP</option>
                        <option>10+CashP</option>
                        <option>25+CashP</option>
                        <option>50+CashP</option>
                        <option>100+CashP</option>
                        <option>250+CashP</option>
                        <option>500+CashP</option>
                        <option>1000+CashP</option>
                      </select>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{ marginTop: "20px", fontSize: "22px" }}
                      className="well_tab_price btn_formart_mobile"
                    >
                      Minium directs
                    </div>
                    <div
                      className="well_tab_price btn_formart_mobile"
                      style={{ marginTop: "20px" }}
                    >
                      Balance :<span> 0.000 CashP</span>
                    </div>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter CashP amount"
                    className="ipt ipt_format"
                    style={{
                      textAlign: "right",
                      marginTop: "20px",
                      padding: "5px",
                    }}
                  />
                  <button
                    className="theme_button btn_formart_mobile"
                    style={{ width: "100%", marginTop: "20px" }}
                  >
                    Get participants
                  </button>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <table
                    className="btn_formart_mobile"
                    style={{ marginTop: "80px" }}
                  >
                    <tbody>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Budget</span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0.000 CashP</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Number of recipients </span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0/0</span>
                        </td>
                      </tr>
                      <tr className="ant-descriptions-row">
                        <th
                          className="ant-descriptions-item-label"
                          colSpan="1"
                          style={{ color: "rgb(218, 204, 121)" }}
                        >
                          <span>Estimated CashPer person </span>
                        </th>
                        <td
                          className="ant-descriptions-item-content"
                          colSpan="1"
                        >
                          <span>0.000 CashP</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Select Random Addresses
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <input
                    type="text"
                    style={{
                      textAlign: "right",
                      padding: "10px",
                    }}
                    placeholder="1-0"
                    className="ipt ipt_format"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10}>
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <span style={{ marginTop: "20px" }} className="well_tab_unit">
                    Approve CashP
                  </span>
                  <button
                    className="theme_button btn_formart_mobile"
                    style={{ width: "100%" }}
                  >
                    Send
                  </button>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Results :
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div className="tab_sort_grp btn_formart_mobile">
                    <div className="tab_sort_text">Sorted By:</div>
                    <button className="tab_sort_btn">Date</button>
                    <button className="tab_sort_btn">Deposits</button>
                    <button className="tab_sort_btn">Directs</button>
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}></Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div className="tab_sort_grp_select">
                    <button className="theme_button">Select All</button>
                    <button
                      className="theme_button"
                      style={{ backgroundColor: "grey" }}
                    >
                      Unselect All
                    </button>
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <div className="nodta_grp">
                    <div className="nodata_txt">Address</div>
                    <div className="nodata_box">NO DATA</div>
                  </div>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px", fontSize: "22px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Player
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}></Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <input
                    type="text"
                    style={{ textAlign: "left", padding: "5px" }}
                    placeholder="Enter Address "
                    className="ipt ipt_format"
                  />
                </Grid>
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px" }}
                    className="well_tab_price btn_formart_mobile"
                  >
                    Amount
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>

                <Grid item xs={12} sm={5} md={4}>
                  <div
                    style={{ marginTop: "20px" }}
                    className="well_tab_unit btn_formart_mobile"
                  >
                    Balance :<span>0.000 CashP</span>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <input
                    type="number"
                    style={{ textAlign: "right", padding: "5px" }}
                    defaultValue="0"
                    className="ipt ipt_format"
                  />
                  <br />
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <span style={{ marginTop: "20px" }} className="well_tab_unit">
                    Approve CashP
                  </span>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={12} sm={10}>
                  <button
                    className="theme_button btn_formart_mobile"
                    style={{ width: "100%" }}
                  >
                    Send
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
          </Tabs>

          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className="flex">
                <div className="stats_text_title gradient-text1">ABOUT</div>
              </div>
              <div
                className="btn_formart_mobile"
                style={{ color: "white", fontSize: "17px", lineHeight: "30px" }}
              >
                <div>
                  Players can also compound their earnings through regular
                  deposits, rolling rewards as well as team based referrals.
                  Unlike many other platforms promising a consistent daily %
                  return, The ATM's contract cannot drain and will ALWAYS be
                  able to provide the CashP that has been rewarded.
                </div>
                <div>
                  CashP rewards come from a 10% tax on all CashP transactions on
                  buys and sells from The Bank page.
                </div>
                <div>
                  If there is ever a situation where the tax pool is not enough
                  to pay CashP rewards new CashP will be minted to ensure
                  rewards are paid out.
                </div>
                <div>
                  Given the game theory behind the Cash Printer network, the
                  probability that the system will need to mint new CashP to pay
                  rewards is extremely low. CashP is the only deflationary daily
                  ROI platform.
                </div>
                <div>
                  The best strategy for CashP is to focus on real world adoption
                  by building out your team through direct referrals, as you
                  will receive bonus rewards from referrals on their deposits
                  and downline bonuses from players they refer based on the
                  amount ofCashier Tokens held in your wallet: 1-2, 2-3, 3-5,
                  4-8, 5-13, 6-21, 7-34, 8-55, 9-89, 10-144, 11-233, 12-377,
                  13-610, 14-987, 15-1597
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="img_wave_grp">
        <img src={img_Casher2} alt="img_wave2" className="img_wave2" />
      </div>
    </div>
  );
};

export default Tap;
