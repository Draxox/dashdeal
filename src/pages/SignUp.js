import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
const SignUp = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallScreen_sm = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen_xsm = useMediaQuery(theme.breakpoints.down(356));
  return (
    <>
      <Box
      // sx={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      >
        <Container
          sx={{
            marginTop: isSmallScreen ? "20px" : "40px",
            marginBottom: isSmallScreen ? "20px" : "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              padding: "2.2rem",
              maxWidth: "400px",
              width: "100%",
              //   height: isSmallScreen_sm ? "" : "80vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <Typography variant={isSmallScreen_xsm ? "h5" : "h4"}>
                Create Account
              </Typography>
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
                  // helperText="Please enter your name"
                  label="Your Name"
                  type="input"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Mobile No"
                  type="number"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  helperText="Passwords must be atleast 6 characters"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Box>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  padding: "0",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    color: "white",
                    fontSize: isSmallScreen ? "0.75rem" : "1rem",
                    background: "#43a047",
                    padding: "1rem",
                    fontWeight: "700",
                  }}
                  // onClick={handleAddToCart}
                >
                  Sign up
                </Button>
              </CardActions>

              <Box
                sx={{
                  fontSize: isSmallScreen_xsm ? "10px" : "",
                  flexDirection: "flex-end",
                }}
              >
                <span style={{ color: "grey" }}>
                  Already have an account?
                  <a
                    style={{
                      textDecoration: "none",
                      color: "rgb(67, 160, 71)",
                    }}
                    href="/SignIn"
                  >
                    {" "}
                    Sign in
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

export default SignUp;
