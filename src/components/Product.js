import React from "react";
import "./Product.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Product = ({ id, image, title, rating, quantity, price, addToCart }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isSmall_lg = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const handleAddToCart = () => {
    const newItem = {
      id,
      image,
      title,
      rating,
      quantity,
      price,
    };
    addToCart(newItem);
    // alert("Congratulations Item Added To Cart");
    console.log(newItem);
  };

  return (
    <Card
      className="productcard"
      variant="outlined"
      sx={{
        // maxWidth: 345,
        // padding: "1rem",
        flexDirection: isSmall_lg ? "row" : "column",
        margin: isSmall_lg ? "4px 0" : "",
        justifyContent: isSmall_lg ? "" : "space-between",
        // boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        alt="ProductImage"
        loading="eager"
        // width="100%"
        sx={{
          overflow: "hidden",
          // marginTop: "1rem",
          padding: "1rem",
          // backgroundColor: "#E3E6E6",
          // maxWidth: "345px",
          maxHeight: "250px",
          maxWidth: isSmall_lg ? "250px" : "1",
          objectFit: "contain",
          minWidth: "160px",
        }}
        src={image}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent className="cardContent">
          {/* title */}
          <Typography
            variant="body2"
            color="text.primary"
            className="productTitle"
            sx={{
              fontWeight: "700",
              fontSize: isSmallScreen ? "0.75rem" : "0.95rem",
              marginBottom: "10px",
            }}
          >
            {title}
          </Typography>
          {/* Rating */}
          <Rating
            sx={{ fontSize: isSmallScreen ? "1rem" : "1.25rem" }}
            name="read-only"
            value={rating}
            readOnly
          />
          {/* price */}
          <Typography variant="h6">
            <small>
              <sup>₹</sup>
            </small>
            <span
              style={{
                fontSize: isSmallScreen ? "1.5rem" : "2rem",
                fontWeight: "400",
              }}
            >
              {price}
            </span>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: isSmall_lg ? "" : "center",
            paddingBottom: "1rem",
          }}
        >
          <Button
            className="btn"
            style={{
              color: "white",
              fontSize: isSmallScreen ? "0.65rem" : "0.75rem",
              background: "#43a047",
              padding: "8px 20px",
              fontWeight: "700",
            }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;
