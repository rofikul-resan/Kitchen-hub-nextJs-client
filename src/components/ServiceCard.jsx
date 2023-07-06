import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <Image
        src={"/menu.jpg"}
        alt="service image"
        height={200}
        width={400}
        className="w-full"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" size="small">
          Share
        </Button>
        <Button size="small" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
