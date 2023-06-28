import React from "react";
import "./Header.css";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Paper,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  ShoppingCartSharp,
  PersonOutlineSharp,
  LocalMallOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function Header({ cartItems }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isSmallScreen_xs = useMediaQuery((theme) =>
    theme.breakpoints.down("x-small")
  );
  return (
    <>
      <AppBar
        className="header"
        position="sticky"
        // color="primary"
        sx={{ boxShadow: "none" }}
      >
        <StyledToolbar>
          <NavLink to="/" className="dashDeal" id="navlist">
            <Box
              sx={{
                display: { xs: "none", sm: "flex", alignItems: "center" },
              }}
            >
              <img
                style={{ height: "28px", width: "28px" }}
                src="fastShopping34.png"
                alt="logo"
              />
              <Typography
                variant="h6"
                sx={{
                  // display: { xs: "none", sm: "block" },
                  fontSize: isSmallScreen ? "" : "1.5rem",
                }}
              >
                DashDeal
              </Typography>
            </Box>

            <LocalMallOutlined
              sx={{
                display: { xs: "block", sm: "none" },
                fontSize: isSmallScreen ? "1.5rem" : "1.75rem",
                cursor: "pointer",
              }}
            />

            {/* <img
              src={
                isSmallScreen
                  ? "LogoMakr-8E4jqZ_(1)-transformed.png"
                  : "LogoMakr-9o6fGi.png"
              }
              alt="logo"
              className="header_logo"
              style={{
                // display: isSmallScreen_xs ? "none" : "",
                // fontSize: isSmallScreen ? "1rem" : "1.25rem",

                // height: "fit-content",
                // width: "fit-content",
                height: isSmallScreen ? "3rem" : "3rem",
                width: isSmallScreen ? "2rem" : "8rem",
                cursor: "pointer",
                fontSize: isSmallScreen ? "1rem" : "3rem",
              }}
            /> */}
            {/* <img
              src="LogoMakr-8E4jqZ_(1)-transformed.png"
              alt="logo"
              style={{
                // display: { xs: "block", sm: "none" },
                display: isSmallScreen_xs ? "none" : "",
                // fontSize: isSmallScreen ? "1.5rem" : "1.75rem",
                height: "35px",
                width: "50px",
                cursor: "pointer",
              }}
            /> */}
          </NavLink>
          <div
            className="searchbar"
            sx={{ display: isSmallScreen ? "none" : "" }}
          >
            {/* <select className="select_tag">
              <option>All</option>
              <option>Electronics</option>
              <option>Grocery</option>
              <option>Computer Accessories</option>
              <option>Books</option>
              <option>Home & Kitchen</option>
              <option>Furniture</option>
              <option>Gardern & Outdoors</option>
              <option>Toys & Games</option>
              <option>Beauty</option>
              <option>Luggage & Bags</option>
            </select> */}
            <Paper
              component="div"
              sx={{
                p: "4px 4px",
                display: "flex",
                width: isSmallScreen ? "50vw" : "60vw",
                // borderRadius: "0 4px 4px 0",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Products"
                inputProps={{ "aria-label": "search products" }}
              />
              {/* <Divider orientation="vertical" flexItem /> */}
              <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </div>
          <div className="header_nav">
            <div className="header_list">
              <NavLink to="/SignIn" id="navlist">
                <span className="Accountlist">
                  <PersonOutlineSharp
                    sx={{
                      fontSize: isSmallScreen ? "1.5rem" : "1.75rem",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </NavLink>
              <NavLink to="/ShoppingCart" id="navlist">
                <span className="Cartlist">
                  <Badge
                    badgeContent={cartItems.length}
                    color="secondary"
                    // overlap="circular"
                    // sx={{ fontSize: isSmallScreen ? "0.5rem" : "2rem" }}
                  >
                    <ShoppingCartSharp
                      sx={{
                        fontSize: isSmallScreen ? "1.5rem" : "1.75rem",
                        cursor: "pointer",
                      }}
                    />
                  </Badge>
                </span>
              </NavLink>
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Header;
