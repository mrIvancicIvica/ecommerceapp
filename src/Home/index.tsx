import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useQuery } from "react-query";
import Item from "../Item/Item";
import { CircularProgress, Grid, TextField } from "@mui/material";
import Error from "../404";
import { WorkshopTypes } from "../context/CartContext";

const getWorkshops = async (): Promise<WorkshopTypes[]> => {
  return await (await fetch("http://localhost:3004/workshops")).json();
};

const Home = () => {
  const cartContext = useContext(CartContext);

  const [filterData, setFilterData] = useState("");

  const { data, isLoading, error } = useQuery<WorkshopTypes[]>(
    "workshopproducts",
    getWorkshops
  );

  console.log(data);

  if (isLoading) return <CircularProgress />;
  if (error) return <Error />;

  return (
    <div>
      <TextField
        onChange={(e) => {
          setFilterData(e.target.value);
        }}
        id="outlined-basic"
        label="Search by category"
        variant="outlined"
      />

      <Grid container spacing={3}>
        {data
          ?.filter((val) => {
            if (filterData === "") {
              return val;
            } else if (
              val.category
                .toLocaleLowerCase()
                .includes(filterData.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
                <Item
                  item={item}
                  handleAddToCart={cartContext?.handleAddToCart}
                />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
