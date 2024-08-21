import React, { useEffect } from "react";
import { Grid, Typography, IconButton, Card, CardContent } from "@mui/material";
// icons
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Content = () => {
 

  return (

    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text={"What we are offering?"} textAlign={"start"} />

        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: "400",
            paddingTop: 1,
          }}
        >
          Property facilities
        </Typography>

        <Paragraph
          text={
            " We have more 5000 reviews\
                    and our customers trust on out quality\
                    product and trust own our product."
          }
          maxWidth={"75%"}
          mx={0}
          textAlign={"start"}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <SportsGymnasticsIcon fontSize="large" color="secondary" />
            </IconButton>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              gym
            </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <div data-aos="flip-right">
            <CardContent>
              <IconButton>
                <LocalParkingIcon fontSize="large" color="secondary" />
              </IconButton>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
              >
                parking
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Card
          square={true}
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon fontSize="large" color="secondary" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <div data-as="flip-right">
            <CardContent>
              <IconButton>
                <FastfoodOutlinedIcon fontSize="large" color="secondary" />
              </IconButton>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
              >
                local dining
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <div data-aos="flip-right">
            <CardContent>
              <IconButton>
                <PoolOutlinedIcon fontSize="large" color="secondary" />
              </IconButton>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
              >
                swimming pool
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <WifiPasswordIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Internet
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
};

export default Content;
