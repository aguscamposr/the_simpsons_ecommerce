import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import userImg from '../NavBar/logo_superman.jpg'



const CharacterCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="440"
        image={data.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.character}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.quote}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.characterDirection}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;