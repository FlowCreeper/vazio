import MiniDrawer from "./components/sidebar";
import CustomAppBar from "./components/appbar";
import { useState, useEffect } from "react";
import CustomCard from "./components/card";
import { Box, createTheme, CssBaseline, Grid2 as Grid, ThemeProvider } from "@mui/material";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

function App() {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const drawerWidth = 180;

  // Initialize cards only once using useEffect
  useEffect(() => {
    setCards([
      {
        img: "https://th.bing.com/th/id/R.3fbd1815bbb1888f98308164ebce841c?rik=TVBTrr8QbCH%2f%2bQ&pid=ImgRaw&r=0",
        title: "Luffy",
        desc: "Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda.",
        rarity: "common"
      },
      {
        img: "https://th.bing.com/th/id/R.b5ad79db46e5e32c0d682091715458c0?rik=NkDOXw2OjxOS7g&riu=http%3a%2f%2fexpresionotaku.com%2fwp-content%2fuploads%2f2015%2f02%2fUzumaki-Naruto-Shippuden.png&ehk=Cznd6JUyorQSkyf32DwqA50wbKYxJIn0Slp%2f07pvujM%3d&risl=&pid=ImgRaw&r=0",
        title: "Naruto",
        desc: "Naruto Uzumaki é um personagem fictício da franquia de mangá e anime Naruto, criada por Masashi Kishimoto.",
        rarity: "rare"
      },
      {
        img: "https://pre00.deviantart.net/66c6/th/pre/i/2016/341/8/a/goku_by_supergoku37-daqwtnx.png",
        title: "Goku",
        desc: "Son Goku, cujo nome de nascimento é Kakarotto, é o protagonista da franquia Dragon Ball, criada por Akira Toriyama.",
        rarity: "legendary"
      }
    ]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <MiniDrawer open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
        <CustomAppBar open={open} drawerWidth={drawerWidth} />
        <Box sx={{ display: "grid", flexGrow: 1, mt: 15, ml: 15}}>
          <Grid container spacing={5} justifyContent="flex-start">
            {cards.map((obj, i) => (
              <Grid key={i} size={{ xs: 12, sm: 8, md: 6, lg: 3 }}> 
                <CustomCard img={obj.img} title={obj.title} desc={obj.desc} rarity={obj.rarity} />
              </Grid>
            ))}
          </Grid>
        </Box>
    </ThemeProvider>
  );
}

export default App;
