import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { Group, GroupMetaData } from "../lib/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
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
  group: GroupMetaData;
}

const InfoModal: React.FunctionComponent<InfoModalProps> = ({
  handleClose,
  isOpen,
  group,
}) => {
  return (
    <div>
      <Modal
        hideBackdrop
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="child-modal-title">Info</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Description
                  </TableCell>
                  <TableCell align="right">{group.description}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Habit
                  </TableCell>
                  <TableCell align="right">{group.habit}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Pay-in amount
                  </TableCell>
                  <TableCell align="right">{group.payInAmt}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Start Date
                  </TableCell>
                  <TableCell align="right">{group.startDate}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Duration
                  </TableCell>
                  <TableCell align="right">{group.duration}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
