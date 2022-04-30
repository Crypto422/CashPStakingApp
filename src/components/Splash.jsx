import React from 'react'
import Grid from "@material-ui/core/Grid";
import img_Casher2 from "../assests/images/Casher2.png";

const Splash = () => {
    return (
        <div>
               <div className="container" style={{height:"70vh"}}>
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
      </div>
      <div className="img_wave_grp">
        <img src={img_Casher2} alt="img_wave2" className="img_wave2" />
      </div>
        </div>
    )
}

export default Splash
