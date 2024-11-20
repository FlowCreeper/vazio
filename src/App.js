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
    const fetchCards = async () => {
      try {
        const resp = await fetch("https://vazio-e76540b41608.herokuapp.com/cards"); // Change for the actual link when deploying
        const data = await resp.json(); // Parse JSON
        console.log(resp)
        console.log(data)
        setCards(data); // Update state
      } catch (error) {
        console.error("Error fetching cards:", error); // Handle errors
      }
    };

    fetchCards(); // Call the async function
  }, []); // Dependency array

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box
      sx={{
        backgroundImage: `url('https://i.pinimg.com/originals/2b/74/db/2b74dbae3404bd472f384e88f7e11056.jpg')`,
        backgroundSize: 'cover',       // Ensure the image covers the entire background
        backgroundRepeat: 'no-repeat', // Prevent repeating
        backgroundPosition: 'center',  // Center the image
        height: '100vh',               // Full viewport height
        width: '100vw',                // Full viewport width
      }}
      position="fixed"
      />
        <MiniDrawer open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
        <CustomAppBar open={open} drawerWidth={drawerWidth} />
        <Box sx={{ display: "grid", flexGrow: 1, mt: 15, ml: 15 }}>
          <Grid container spacing={5} justifyContent="flex-start">
            {cards.map((obj, i) => (
              <CustomCard key={i} img={obj.img} title={obj.title} desc={obj.desc} rarity={obj.rarity} />
            ))}
          </Grid>
        </Box>
      
    </ThemeProvider>
  );
}

export default App;
