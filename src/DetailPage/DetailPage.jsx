import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import{Card,CardActionArea,CardMedia,CardContent,Typography,CardActions} from "@mui/material"

const DetailPage = () => {
  const { id } = useParams();
  const API = `http://localhost:3004/workshops/${id}`;

  const [setails, setDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(API);
      setDetails(result.data);

      console.log("ivicaaaa ovo je nesto novo" ,  result.data);
    };

    getData();
  },[]);

  return (
    <div>
      <h1>{setails.title}</h1>

      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={setails.imageUrl}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {setails.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {setails.desc}
          </Typography>
          <hr />
          <Typography>Price: €{setails.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    </div>
  );
};

export default DetailPage;
