import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomDialog from "./dialog";

export default function CustomCard({ img, title, desc, rarity }) {
  const [color, setColor] = useState("white");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    switch (rarity) {
      case 1:
        setColor("gold");
        break;
      case 2:
        setColor("red");
        break;
      default:
        setColor("white");
        break;
    }
  }, [rarity]);

  return (
    <>
      <Card
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent white
          position: "relative",
          border: 4,
          borderColor: color,
          borderRadius: 5,
          maxWidth: 300,
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <CardActionArea onClick={handleOpen}>
          {img ? (
            <CardMedia
              sx={{ height: 400, width: 300 }}
              component="img"
              image={img}
              alt={title || "Card image"}
            />
          ) : (
            <Typography sx={{ padding: 2 }} align="center">
              No Image Available
            </Typography>
          )}
          <Typography
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontWeight: "bold",
              WebkitTextStroke: "1px black",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "5px 100%",
              borderRadius: "5px",
            }}
            align="center"
            variant="h5"
          >
            {title}
          </Typography>
        </CardActionArea>
      </Card>
      <CustomDialog
        open={open}
        setOpen={setOpen}
        title={title}
        desc={desc}
        img={img}
        color={color}
      />
    </>
  );
}
