import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Badge,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Cart from "../Cart/Cart";
const useStyles = makeStyles({
  drawer: { with: 400 },
  drawPaper: { width: 400 },
});


const Header = () => {
  const cartContext = useContext(CartContext);
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawPaper }}
        anchor="right"
        open={cartContext?.cartOpen}
        onClose={() => cartContext?.setCartOpen(false)}
      >
        <h1>Card</h1>
        <Cart
          removeFromCart={cartContext?.handleRemoveFromCart}
          addToCart={cartContext?.handleAddToCart}
          cartItems={cartContext?.cartItems}
        ></Cart>
      </Drawer>

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              component={RouterLink}
              to="/"
            >
              Logo Firma
            </Link>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => cartContext?.setCartOpen(true)}
            >
              <Badge badgeContent={cartContext?.getTotalItems(cartContext.cartItems)} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
