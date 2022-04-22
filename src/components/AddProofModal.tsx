import { Box, Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { uploadImage } from "../utilities/firebaseStorage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
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
  const [image, setImage] = useState(null);
  const [imgCaption, setCaption] = useState("");

  // SOURCE: https://stackoverflow.com/questions/43992427/how-to-display-a-image-selected-from-input-type-file-in-reactjs
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setImageUploaded(true);
    }
  };

  const onCaptionChange = (e: any) => {
    if (e.target.value) {
      setCaption(e.target.value);
    }
  };

  const completeCheckInPhase = () => {
    if (image != null) {
      uploadImage(image, currentUser, currentDate, currentGroup, imgCaption);
      handleClose();
      handleCheckIn();
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
              <Typography variant="h3">Upload Your Proof</Typography>

              {image != null ? (
                <Box
                  height="250px"
                  marginTop={2}
                  marginBottom={2}
                  sx={{ backgroundColor: "#ffffff" }}
                  borderRadius={3}
                >
                  <img
                    style={{
                      height: "100%",
                      margin: "auto",
                      display: "block",
                      borderRadius: "10px",
                    }}
                    alt=""
                    src={URL.createObjectURL(image)}
                  />
                </Box>
              ) : (
                <Box
                  height="250px"
                  marginTop={2}
                  marginBottom={2}
                  sx={{ backgroundColor: "#aaa" }}
                  borderRadius={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography fontSize="1.25rem" color="#444">No image has been uploaded yet...</Typography>
                </Box>
              )}
              <TextField
                id="standard-multiline-static"
                label="Enter Proof Caption"
                defaultValue=""
                variant="standard"
                onChange={onCaptionChange}
                sx={{ mb: "1rem" }}
              />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
              <Button variant="contained" component="label" style={{minWidth:"49%"}}>
                Upload Image
                <input
                  id="pictureInput"
                  type="file"
                  hidden
                  accept=".png,.jpeg,.jpg"
                  onChange={onImageChange}

                />
              </Button>

              <Button
                variant="contained"
                disabled={!imageUploaded}
                sx={{ minWidth: "49%"}}
                onClick={completeCheckInPhase}
                color="success"
              >
                Check In
              </Button>

              </Box>
              <Button variant="outlined" onClick={handleClose} sx={{ mt: "0.5rem" }}>
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
