import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "30px",
  },
});

const CashP = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container_nav">
      <Grid container>
        <Grid item xs={12} md={8}>
          <div className="seed_f_text">
            Enter the gateway of Blockchain Gaming
          </div>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6} md={3} className="seed_a_tag_grp">
          <a
            className="gen_btn new_btns join_banner_btn"
            href="https://Spookyswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&amp;outputCurrency=0x477bc8d23c634c154061869478bce96be6045d12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Spookyswap 
          </a>
        </Grid>
        <Grid item xs={10} sm={6} md={3} className="seed_a_tag_grp">
          <a
            className="gen_btn new_btns join_banner_btn"
            href="https://Spookyswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&amp;outputCurrency=0x477bc8d23c634c154061869478bce96be6045d12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Spookyswap 
          </a>
        </Grid>
        <Grid item xs={10} sm={6} md={3} className="seed_a_tag_grp">
          <a
            className="gen_btn new_btns join_banner_btn"
            href="https://Spookyswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&amp;outputCurrency=0x477bc8d23c634c154061869478bce96be6045d12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Spookyswap 
          </a>
        </Grid>
        <Grid item xs={10} sm={6} md={3} className="seed_a_tag_grp">
          <a
            className="gen_btn new_btns join_banner_btn"
            href="https://Spookyswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&amp;outputCurrency=0x477bc8d23c634c154061869478bce96be6045d12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Spookyswap 
          </a>
        </Grid>
      </Grid>

      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={10} md={4}>
          <div className="seed_s_grp">
            <div className="inner_grp">
              <div className="seed_s_title">
                <h2>What is CashP.live</h2>
              </div>
              <div className="seed_s_content">
                <p>
                  Before getting started, let's dig into CashP and what it
                  stands for
                </p>
              </div>
              <div className="seed_s_learn_more">
                <a
                  href="https://medium.com/seedify/what-is-seedify-e4e99a7a255a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={4}>
          <div className="seed_s_grp">
            <div className="inner_grp">
              <div className="seed_s_title">
                <h2>What is CashP.live</h2>
              </div>
              <div className="seed_s_content">
                <p>
                  Before getting started, let's dig into CashP and what it
                  stands for
                </p>
              </div>
              <div className="seed_s_learn_more">
                <a
                  href="https://medium.com/seedify/what-is-seedify-e4e99a7a255a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={4}>
          <div className="seed_s_grp">
            <div className="inner_grp">
              <div className="seed_s_title">
                <h2>What is CashP.live</h2>
              </div>
              <div className="seed_s_content">
                <p>
                  Before getting started, let's dig into CashP and what it
                  stands for
                </p>
              </div>
              <div className="seed_s_learn_more">
                <a
                  href="https://medium.com/seedify/what-is-seedify-e4e99a7a255a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={8}>
          <div className="seed_f_text_up">Upcoming Pools</div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
          <Grid item xs={12}>
            <div className="flex">
              <div
                className="stats_text_title gradient-text1"
                style={{ marginTop: "30px" }}
              >
               COMING SOON
              </div>
            </div>
          </Grid>
        </Grid>
      {/* <Grid container justifyContent="center">
        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                  <div className="phase">
                    <p>1ST PHASE</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">RIO-X</div>
                <div className="rio_top_content">
                  First survival FPS game on Polygon network, with P2E system,
                  NFT market and metaverse.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">IN 19 DAYS</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01</div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid> */}
      <Grid container>
        <Grid item xs={12} md={8}>
          <div className="seed_f_text_up">Completed Pools</div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={10} md={5} className="pool_grp_grid">
          <div className="pool_card">
            <Grid container>
              <Grid item xs={3}>
                <div className="pool_top_left">
                  <img
                    className="image_circle"
                    src="https://idologo.s3.ap-southeast-1.amazonaws.com/1649062502024photo_2022-03-03_19-51-02.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={10} md={8}>
                <div className="rio_top_title">Realms of Ethernity</div>
                <div className="rio_top_content">
                  Realms of Ethernity first decentralized MMORPG game, lays the
                  groundwork for a revolutionary system of true ownership and a
                  play-to-earn. Players can explore dungeons, fight monsters and
                  complete quests.
                </div>
              </Grid>
            </Grid>

            <div className="top_days">1BUSD=3RETH</div>
            <div className="top_day">Total Raise</div>

            <Grid container>
              <Grid item xs={4}>
                <div className="bottom_title">.</div>
                <div className="bottom_content">324 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">0.01 BUSD</div>
              </Grid>

              <Grid item xs={4}>
                <div className="bottom_title">Min Allocation</div>
                <div className="bottom_content">public</div>
              </Grid>
            </Grid>
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
            </div>

            <div className="bottom_progress_grp">
              <div className="progress_amount">99.90%</div>
              <div className="progress_text">1054488.10/1055555.56 TOYO</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CashP;
