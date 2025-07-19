import React from "react";

import { Box, Typography, Paper } from "@mui/material";

export default function Display({ input, isBlinking }) {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderRadius: "16px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        p: 2,
        fontFamily: "'Fredoka', sans-serif",
        fontSize: "4rem",
        mb: 4,
        height: "170px",
        paddingTop: "60px",
        textAlign: "right",
        fontWeight: "bold",
        color: "#ffcc33",
        border: "3px solid black",
        // paddingBottom: "30px",
      }}
    >
      {input}
    </Box>
  );
}
