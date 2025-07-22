import React from "react";
import { Box } from "@mui/material";
import bowImage from "./imgs/bow.png";

export default function Bow() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-98px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        height: "230px",
        zIndex: 10,
      }}
    >
      <img
        src={bowImage}
        alt="Cute Bow"
        style={{
          width: "100%",
          height: "100%",
          transform: "rotate(-15deg)",
        }}
      />
    </Box>
  );
}
