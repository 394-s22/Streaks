import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { uploadImage } from "../utilities/firebaseStorage";
import { FireExtinguisher } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface InfoModalProps {
  handleClose: () => void;
  isOpen: boolean;
  currentDate: string;
  currentUser: string;
  handleCheckIn: () => void;
  currentGroup: string;
}

const AddProofModal: React.FunctionComponent<InfoModalProps> = ({
  handleClose,
  isOpen,
  currentDate,
  currentUser,
  handleCheckIn,
  currentGroup,
}) => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [image, setImage] = useState("");

  // SOURCE: https://stackoverflow.com/questions/43992427/how-to-display-a-image-selected-from-input-type-file-in-reactjs
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageUploaded(true);
      uploadImage(
        event.target.files[0],
        currentUser,
        currentDate,
        currentGroup
      );
    }
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={{ width: "100%" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box
            sx={{ backgroundColor: "#FFF" }}
            display="flex"
            flex-direction="column"
            justifyContent="center"
            padding={2}
            maxWidth="400px"
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography variant="h3">Upload your proof</Typography>
              {image ? (
                <img height={200} src={image} />
              ) : (
                <Box
                  height="200px"
                  marginTop={2}
                  marginBottom={2}
                  sx={{ backgroundColor: "#aaa" }}
                  borderRadius={3}
                ></Box>
              )}

              <Button variant="contained" component="label">
                Upload Image
                <input
                  type="file"
                  hidden
                  accept=".png,.jpeg,.jpg"
                  onChange={onImageChange}
                />
              </Button>
              <Button
                variant="contained"
                disabled={!imageUploaded}
                onClick={() => {
                  handleClose();
                  handleCheckIn();
                }}
              >
                Check In
              </Button>
              <hr />
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProofModal;
