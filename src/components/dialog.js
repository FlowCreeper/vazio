import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({ open, setOpen, title, desc, img, color }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="card-dialog-title"
        aria-describedby="card-dialog-description"
        maxWidth="md" // Adjust maxWidth for appropriate sizing
        fullWidth // Ensure content spans the dialog width
      >
        <DialogTitle id="card-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent style={{ display: 'flex', alignItems: 'stretch', gap: '16px', marginBottom: "3%" }}>
          <img
            src={img}
            alt={title}
            style={{
              border: `5px solid ${color}`, // Combine width, style, and color
              borderRadius: '20px',          // Keep the border rounded
              width: "50%",                // Responsive width
              objectFit: 'cover',           // Ensure image covers the given dimensions
              backgroundImage: `url('https://img.freepik.com/premium-photo/japan-anime-scenery-wallpaper-featuring-beautiful-pink-cherry-trees-mount-fuji-background_685067-1795.jpg?w=2000')`, // Correct background syntax
              backgroundSize: 'cover',      // Ensure the background image covers the container
              backgroundPosition: 'center', // Center the background image
            }}
          />
          <Paper sx={{ flex: 1, padding: '16px', display: 'flex', backgroundColor: 'gray' }}>
            <DialogContentText id="card-dialog-description">
              Description: {desc}
              
            </DialogContentText>
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
}
