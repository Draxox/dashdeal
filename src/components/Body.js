import React from "react";

import "./Body.css";
import Carousel from "../features/Carousel";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Product from "./Product";

const Body = ({ products, addToCart }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Container
        maxWidth={isSmallScreen ? "false" : "xl"}
        disableGutters="true"
        className="container"
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Carousel />
        </Box>
        <Box sx={{ padding: isSmallScreen ? "4px" : "1rem" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "700", marginTop: "1rem" }}
          >
            Featured Products
          </Typography>
          <div
            className="body_row"
            style={{
              display: isSmallScreen ? "block" : "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
                quantity={product.quantity}
                addToCart={addToCart}
              />
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Body;
