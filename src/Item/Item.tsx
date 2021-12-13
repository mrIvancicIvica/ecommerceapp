import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

import { WorkshopTypes } from "../context/CartContext";

type Props = {
  item: WorkshopTypes;
  handleAddToCart: (clickedItem: WorkshopTypes) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.imageUrl}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
          <hr />
          <Typography>Price: €{item.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleAddToCart(item)}
          size="small"
          color="primary"
        >
          Add to basket
        </Button>

        <Button>
          <Link
            component={RouterLink}
            to={`/workshops/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
