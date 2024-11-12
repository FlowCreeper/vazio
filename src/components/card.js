import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function CustomCard({ img, title, desc, rarity }) {
  const [color, setColor] = useState("white")

  useEffect(() => {
    switch (rarity){
      case "rare":
        setColor("gold")
        break
      case "legendary":
        setColor("red")
        break
      default:
        setColor("white")
        break
    }
  }, [rarity])
  

  return (
    <Card 
      sx={{
        position: "relative",
        border: 4,
        borderColor: color,
        borderRadius: 6,
        maxWidth: 300,
      }}
    >
      <CardActionArea>
        {img && (
          <CardMedia
            sx={{ height: 400, width: 300 }}
            component="img"
            image={img}
            alt={title}
          />
        )}

        <Typography
          sx={{
            position: "absolute",
            bottom: desc ? 80 : 40, // Adjust bottom if desc is present
            left: 10,
            color: "white",
            WebkitTextStroke: "1px black", // More visible stroke
            textShadow: "0px 0px 3px rgba(0,0,0,0.7)", // Alternative to stroke
          }}
          variant="h5"
        >
          {title}
        </Typography>

        {desc && (
          <Typography
            sx={{
              position: "absolute",
              bottom: 10,
              left: 10,
              color: "white",
              WebkitTextStroke: "0.5px black",
              textShadow: "0px 0px 2px rgba(0,0,0,0.7)", // Subtle shadow
            }}
            variant="body2"
          >
            {desc}
          </Typography>
        )}
      </CardActionArea>
    </Card>
  );
}
