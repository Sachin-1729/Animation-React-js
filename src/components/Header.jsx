import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//img
import headerImg from "../assets/pexels-binyamin-mellish-186078.png";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "orange",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section">
        <motion.div
          initial={{ y: -100, opacity: 0 }} // Start off-screen (above) and hidden
          animate={{ y: 0, opacity: 1 }} // Move to the initial position and become visible
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1,
            repeat: Infinity
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#fff",
            }}
          >
            We'll build the house of your dream
          </Typography>
        </motion.div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ duration: 2,
            repeat: Infinity
           }}
          className="box"
        >
          <Typography
            variant="p"
            component="p"
            sx={{
              py: 3,
              lineHeight: 1.6,
              color: "#fff",
            }}
          >
            We have 9000 more review and our customers trust on out property and
            quality products.
          </Typography>
        </motion.div>

        <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with the buttons slightly lower and invisible
      animate={{ opacity: 1, y: 0 }}  // Animate to fully visible and at the original position
      transition={{ delay: 0.5, duration: 0.8 }} // Delay of 0.5 seconds, animation duration of 0.8 seconds
    >
      <Box>
        <Button
          variant="contained"
          sx={{
            mr: 2,
            px: 4,
            py: 1,
            fontSize: "0.9rem",
            textTransform: "capitalize",
            borderRadius: 0,
            borderColor: "#14192d",
            color: "#fff",
            backgroundColor: "#14192d",
            "&&:hover": {
              backgroundColor: "#343a55",
            },
            "&&:focus": {
              backgroundColor: "#343a55",
            },
          }}
        >
          buy now
        </Button>
        <Button
          component={Link}
          to={"/about"}
          variant="outlined"
          sx={{
            px: 4,
            py: 1,
            fontSize: "0.9rem",
            textTransform: "capitalize",
            borderRadius: 0,
            color: "#fff",
            backgroundColor: "transparent",
            borderColor: "#fff",
            "&&:hover": {
              color: "#343a55",
              borderColor: "#343a55",
            },
            "&&:focus": {
              color: "#343a55",
              borderColor: "#343a55",
            },
          }}
        >
          explore
        </Button>
      </Box>
    </motion.div>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
            alignSelf: "flex-end",
          },
        })}
      >
        <motion.img
      src={headerImg}
      alt="headerImg"
      initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the left and invisible
      animate={{ x: 0, opacity: 3 }}      // Animate to original position and fully visible
      transition={{ type: 'spring', stiffness: 5, damping: 2, duration: 20 ,  repeat: Infinity }} // Spring animation
      style={{
        width: "100%",
        marginBottom: -15,
      }}
    />
      </Box>
    </CustomBox>
  );
};

export default Header;

