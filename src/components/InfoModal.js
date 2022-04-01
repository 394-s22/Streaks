import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function InfoModal({ handleClose, open, group }) {
	return (
		<div>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box sx={{ ...style }}>
					<h2 id="child-modal-title">Info</h2>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableBody>
								<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										Description
									</TableCell>
									<TableCell align="right">{group.description}</TableCell>
								</TableRow>
								<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										Habit
									</TableCell>
									<TableCell align="right">{group.habit}</TableCell>
								</TableRow>
								<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										Pay-in amount
									</TableCell>
									<TableCell align="right">{group.pay_in_amt}</TableCell>
								</TableRow>
								<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										Start Date
									</TableCell>
									<TableCell align="right">{group.start_date}</TableCell>
								</TableRow>
								<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
}

export default InfoModal;
