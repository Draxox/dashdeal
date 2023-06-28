import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import { CheckCircle, DeleteOutline } from "@mui/icons-material";
import EmptyCart from "../../assets/images/undraw_empty_cart_co35.png";
const ShoppingCart = ({ cartItems, deleteItem, setCartItems }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  // const updateQuantity = (itemId, newQuantity) => {
  //   const parsedQuantity = parseInt(newQuantity);
  //   if (isNaN(parsedQuantity) || parsedQuantity < 1) {
  //     return; // Ignore invalid quantity
  //   }
  //   updateQuantity(itemId, parsedQuantity);
  // };
  // const [itemQuantity, setItemQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const qty = [
    { value: 0, label: "0 (Delete)" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10+" },
  ];
  // var PriceNumber = 103000.58367; // floating point example
  // PriceNumber.toLocaleString(undefined, { maximumFractionDigits: 2 }); // "1,234.57"
  // var nf = new Intl.NumberFormat();
  // nf.format(103000);

  // function CommaFormatted(amount) {
  //   var delimiter = ","; // replace comma if desired
  //   var a = amount
  //     // .toString(undefined, { maximumFractionDigits: 2 })
  //     .toString()
  //     .split(".", 2);
  //   var d = a[1];
  //   var i = parseInt(a[0]);
  //   if (isNaN(i)) {
  //     return "";
  //   }
  //   var minus = "";
  //   if (i < 0) {
  //     minus = "-";
  //   }
  //   i = Math.abs(i);
  //   var n = new String(i);
  //   var a = [];
  //   while (n.length > 3) {
  //     var nn = n.substr(n.length - 3);
  //     a.unshift(nn);
  //     n = n.substr(0, n.length - 3);
  //   }
  //   if (n.length > 0) {
  //     a.unshift(n);
  //   }
  //   n = a.join(delimiter);
  //   if (d.length < 1) {
  //     amount = n;
  //   } else {
  //     amount = n + "." + d;
  //   }
  //   amount = minus + amount;
  //   return amount;
  // }
  console.log(cartItems);
  const handleQuantityUpdate = (qtyValue, index) => {
    console.log("wowoowoowowwwowo");
    const prevItems = cartItems;
    if (qtyValue === 0) {
      deleteItem(prevItems[index].id);
    } else {
      prevItems[index].quantity = qtyValue;
      setCartItems([...prevItems]);
    }
  };

  return (
    <>
      <Container
        className="cart_container"
        maxWidth={isSmallScreen ? "false" : "xl"}
        disableGutters={isSmallScreen ? "true" : ""}
      >
        <Box
          className="cart_showPanel"
          sx={{
            marginTop: isSmallScreen ? "0" : "1.5rem",
            display: "flex",
            flexDirection: isSmallScreen ? "column-reverse" : "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            className="cart_left"
            sx={{
              width: isSmallScreen ? "100%" : "78%",
              background: "white",
              padding: isSmallScreen ? "1rem 0.5rem" : "1rem",
            }}
          >
            <h1
              className="cart_title_left"
              style={{ display: isSmallScreen ? "none" : "block" }}
            >
              Shopping Cart
            </h1>
            <div
              className="price"
              style={{ visibility: isSmallScreen ? "hidden" : "visible" }}
            >
              Price
            </div>
            <Divider />
            {/* products cards */}
            {cartItems.length === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant={isSmallScreen ? "h5" : "h4"}
                  color="secondary"
                >
                  Your Shopping Cart Seems Empty
                </Typography>
                <img
                  style={{ width: "50%", height: "50%" }}
                  src={EmptyCart}
                  alt="Emptyyyyyyyyyyyyyy"
                />
              </Box>
            )}
            {cartItems.map((item, index) => (
              <div key={index}>
                <Card
                  sx={{
                    padding: "1rem 0 1rem 0",
                    display: "flex",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      minWidth: isSmallScreen ? "145px" : "180px",
                      objectFit: "contain",
                      flex: "1",
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                  <CardContent
                    sx={{
                      width: "100%",
                      paddingRight: "0",
                      paddingBottom: "0",
                      columnGap: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: isSmallScreen ? "block" : "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography
                        className="title"
                        variant="body2"
                        sx={{
                          color: "black",
                          fontSize: isSmallScreen ? "0.90rem" : "1rem",
                          width: isSmallScreen ? "100%" : "70%",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: isSmallScreen ? "20px" : "18px",
                        }}
                      >
                        <small style={{ fontSize: "0.95rem" }}>₹</small>
                        {item.price}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "15ch",
                        alignItems: "center",
                      }}
                    >
                      <FormControl>
                        <InputLabel id="outlined-select">Qty</InputLabel>
                        <Select
                          id="outlined-select"
                          label="Qty"
                          defaultValue={1}
                          value={item.quantity}
                          sx={{ height: "40px", width: "70px" }}
                          onChange={(e) =>
                            handleQuantityUpdate(e.target.value, index)
                          }
                        >
                          {qty.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                              {/* for deleting the item if qty is chosen 0 */}
                              {}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <Divider orientation="vertical" />
                      <Fab
                        size="small"
                        style={{
                          boxShadow: "none",
                        }}
                        onClick={() => deleteItem(item.id)}
                      >
                        <DeleteOutline />
                      </Fab>
                    </Box>
                  </CardContent>
                </Card>
                <Divider />
              </div>
            ))}
          </Box>
          <Box
            className="cart_right"
            sx={{
              width: isSmallScreen ? "100%" : "20%",
              background: "white",
              padding: "1rem",
              height: "auto",
              maxHeight: isSmallScreen ? "auto" : "30vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                rowGap: "2rem",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column-reverse" : "column",
                  flexWrap: "wrap",
                  rowGap: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    fontSize: isSmallScreen ? "16px" : "12px",
                    wordSpacing: "0.5px",
                    textAlign: "left",
                  }}
                >
                  <CheckCircle
                    color="success"
                    fontSize={isSmallScreen ? "medium" : "small"}
                  />
                  <Box>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: isSmallScreen ? "row" : "column",
                        flexWrap: "wrap",
                        color: "green",
                      }}
                    >
                      Your order is eligible for FREE Delivery.
                      <span style={{ color: "black" }}>
                        Select this option at checkout.
                        <Link
                          target="_blank"
                          to="/details"
                          style={{ textDecoration: "none", color: "blue" }}
                        >
                          Details
                        </Link>
                      </span>
                    </span>
                  </Box>
                </Box>

                <Typography variant="h5">
                  Subtotal (
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                  items):
                  <span style={{ fontWeight: "700" }}>
                    {" "}
                    <small style={{ fontSize: "1rem" }}>
                      <sup>₹</sup>
                    </small>
                    {/* 123456.00 */}
                    {/* subtotal(item.price); */}
                    {/* {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )} */}
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </span>
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "10px 16px" }}
              >
                Proceed to buy
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ShoppingCart;
