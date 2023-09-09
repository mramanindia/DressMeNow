import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import image1 from "./../../assets/1.jpg";
import { CardActionArea } from "@material-ui/core";
import UploadImage from "./image-upload/UploadImage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ productImage, allCollections }) {
  const [open, setOpen] = React.useState(false);
  const [openeningImage, setOpeneningImage] = React.useState(
    allCollections?.[0]
  );

  function changePhotoClicked(imageSrc) {
    setOpeneningImage(imageSrc);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function changeImage(image) {
    setOpeneningImage(image);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Try the Item
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#383a3c" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, color: "white" }}
              variant="h6"
              component="div"
            >
              Try the Item
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid
              container
              xs={6}
              style={{ height: "80vh" }}
              spacing={1}
              sx={{ pl: 3 }}
            >
              {allCollections?.map((singleImageSrcObj, index) => {
                return (
                  <Item>
                    <CardActionArea
                      onClick={() =>
                        changePhotoClicked(singleImageSrcObj.outputImage)
                      }
                    >
                      <CardMedia
                        component="img"
                        height="200px"
                        image={singleImageSrcObj.itemImage}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Item>
                );
              })}
            </Grid>
            <Grid
              container
              xs={4}
              style={{ height: "80vh" }}
              spacing={1}
              sx={{ pl: 3 }}

              // container
              // xs={5}
              // style={{ height: "80vh", backgroundColor: "red" }}
              // spacing={1}
              // sx={{ ml: 6, pl: 3 }}
            >
              <UploadImage></UploadImage>
              <img src={openeningImage} width={"100%"} height={"90%"}></img>
            
            </Grid>
          </Grid>
        </Box>
        <List>
          {/* <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem> */}
        </List>
      </Dialog>
    </div>
  );
}
