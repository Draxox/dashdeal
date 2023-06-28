import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const SignIn = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  // const isSmallScreen_sm = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen_xsm = useMediaQuery(theme.breakpoints.down(356));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: isSmallScreen ? "20px" : "40px",
            marginBottom: isSmallScreen ? "20px" : "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="signup_container"
        >
          <Card
            variant="outlined"
            sx={{
              // display: "flex",
              // flexDirection: "column",
              // // marginTop: "10px",
              // alignItems: "center",
              // justifyContent: "center",
              // gap: "50px",
              maxWidth: "400px",
              maxHeight: "auto",
              // maxHeight: "60vh",
              width: "100%",
              //  height: isSmallScreen_sm ? "auto" : "70vh",
              height: "auto",
              padding: "2.2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Typography variant="h3">Login</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email ID"
                  variant="outlined"
                  type="email"
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </Box>
              <CardActions
                sx={{
                  padding: "0",
                  width: "100%",
                  // height: "100%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontSize: isSmallScreen ? "0.75rem" : "1rem",
                    background: "#43a047",
                    padding: "1rem",
                    fontWeight: "700",
                  }}
                  // onClick={handleAddToCart}
                >
                  Sign in
                </Button>
              </CardActions>
              {/* divider component */}
              <Divider
                flexItem
                sx={{ fontSize: isSmallScreen_xsm ? "10px" : "" }}
              >
                or continue with
              </Divider>
              {/* sign in logos option */}
              <Box>
                <IconButton>
                  <img src="google30.png" />
                </IconButton>
                <IconButton>
                  <img src="facebook30.png" />
                </IconButton>
                <IconButton>
                  <img src="apple30.png" />
                </IconButton>
              </Box>
              {/* sigup up prompt */}
              <Box
                sx={{
                  fontSize: isSmallScreen_xsm ? "10px" : "",
                  flexDirection: "flex-end",
                }}
              >
                <span style={{ color: "grey" }}>
                  don't have an account?
                  <a
                    style={{
                      textDecoration: "none",
                      color: "rgb(67, 160, 71)",
                    }}
                    href="/SignUp"
                  >
                    {" "}
                    Signup now
                  </a>
                </span>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
