/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Grid from "@material-ui/core/Grid";
import ChartCompnent from "./Chart";
import img_logo from "../assests/images/logo.png";
import img_Casher from "../assests/images/Casher.png";
import img_Casher2 from "../assests/images/Casher2.png";
import { Link } from "react-router-dom";
export default function MainFlex() {
  return (
    <div>
      <div className="container">
        <Grid container justifyContent="center" className="home_container">
          <Grid item xs={12} sm={8} md={6}>
            <div className="flex">
              <div>
                <img src={img_logo} className="img_home_logo" alt="home_logo" />
              </div>

              <div className="grid">
                <p className="stroke halftone halftone-color">CashP</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <div className="home_f_text">
              The next big passive income printer on the{" "}
              <span style={{ fontWeight: "bold" }}>FANTOM</span> network
            </div>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <div className="flex">
              <a className="theme_button"
                target="_blank"
                href={`https://spookyswap.finance/`}
              >
                BUY
              </a>
              <Link className="theme_button" to="/nftbank">
                NFTBANK
              </Link>
              <Link className="theme_button" to="/theatm">
                STAKE
              </Link>
              <Link className="theme_button" to="/splash">
                CashPAD
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent="center" className="stats_container">
        <img src={img_Casher} className="img_wave" alt="img_wave" />
        <Grid item xs={12} sm={8} md={6}>
          <div className="flex">
            <div className="stats_text_title gradient-text">STATS</div>
          </div>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={6} sm={4} md={2}>
            <div className="stats_card_grp">
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
              <div className="stats_card_text_name">Players</div>{" "}
              <div className="stats_card_text_number"> Coming Soon (no referral Program yet) </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <div className="stats_card_grp">
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
              <div className="stats_card_text_name">Daily return</div>{" "}
              <div className="stats_card_text_number">2 %</div>
            </div>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <div className="stats_card_grp">
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
              <div className="stats_card_text_name">Max Supply</div>{" "}
              <div className="stats_card_text_number">1,000,000</div>
            </div>
          </Grid>
         
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className="stats_below_container">
        <div className="stats_below_text">
          Cash Printer Network is the latest project developed by CashP Team.
          Cash Printer is a De-Fi Yield Staking/Farming Protocol that provides a
          decentralized financial asset which rewards users with a sustainable
          fixed compound interest model through the use of it’s unique
          ecosystem. The official token of the Cash Printer Network is on the
          Fantom Chain (FTM) that captures value by being scarce, deflationary,
          censorship resistant, and by being built on a robust, truly
          decentralized blockchain. The recommended exchange for trading CashP
          is The Bank exchange which can be found directly on the platform's
          website under. The Bank tab provides the lowest prices and highest
          liquidity, resulting in less slippage for larger trades.
        </div>
      </Grid>
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <div className="flex">
              <div className="stats_text_title gradient-text1">CHART</div>
            </div>
            <ChartCompnent />
          </Grid>
        </Grid>
      </div>
      <div className="img_wave_grp">
        <img src={img_Casher2} alt="img_wave2" className="img_wave2" />
      </div>
    </div>
  );
}
