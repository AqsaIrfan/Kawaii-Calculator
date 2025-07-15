import React from "react";
import { Snackbar, Alert } from "@mui/material";

export default function CustomSnackbar({
  snackMessage,
  openSnackbar,
  setOpenSnackbar,
}) {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={2000}
      onClose={() => setOpenSnackbar(false)}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Alert
        severity="warning"
        sx={{
          backgroundColor: "#fffbe6",
          color: "#c27c00",
          fontWeight: "bold",
          borderRadius: "12px",
          fontFamily: "'Fredoka', sans-serif",
          fontSize: "1.1rem",
          ml: 2, // Add a little margin from left edge
        }}
        icon={false}
      >
        {snackMessage}
      </Alert>
    </Snackbar>
  );
}
