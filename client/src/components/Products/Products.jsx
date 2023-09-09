import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";
import productList from "../../ProductList";
import "./Products.css";
import Background from "./../../assets/bg.jpg";

const Products = ({ onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content} sx={{ mt: 100 }}>
      <div className={classes.toolbar} />
      {/* <img className="background-wrapper" src={"https://im3.ezgif.com/tmp/ezgif-3-5fddc2d829.gif"}></img> */}

      <Grid container justify="center" spacing={4}>
        {productList.data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
