import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function FaceAndControls({
  isBlinking,
  playClick,
  handleClick,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        mb: 3,
      }}
    >
      {/* Face */}
      <Box
        sx={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ff7f7f",
            marginRight: "-10px",
          }}
        />
        <Typography fontSize="2.5rem">◕</Typography>
        <Typography fontSize="2.5rem">‿</Typography>
        <Typography fontSize="2.5rem">{isBlinking ? "-" : "◕"}</Typography>
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ff7f7f",
            marginLeft: "-10px",
          }}
        />
      </Box>

      {/* C and = Buttons */}
      <Box sx={{ display: "flex", gap: 2, marginLeft: "35px" }}>
        {["C", "="].map((btn, i) => (
          <Paper
            key={i}
            elevation={4}
            onClick={() => {
              playClick();
              handleClick(btn);
            }}
            sx={{
              color: "#ffcc33",
              textAlign: "center",
              borderRadius: "16px",
              fontFamily: "'Fredoka', sans-serif",
              fontSize: "3rem",
              cursor: "pointer",
              backgroundColor: "black",
              border: "2px solid black",
              height: "70px",
              width: "70px",
              fontWeight: "bold",
              "&:hover": {
                color: "black",
                backgroundColor: "#ffcc33",
              },
            }}
          >
            {btn}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
