import React from "react";
import { Box } from "@mui/material";

export default function Bow() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "350px",
        height: "150px",
        zIndex: 10,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="#ffcc33"
        stroke="black"
        strokeWidth="1"
      >
        <path d="M32 30c6 0 12-10 20-10s4 18-2 20c-4 1-10-4-18-4s-14 5-18 4c-6-2-10-20-2-20s14 10 20 10z" />
        <circle cx="32" cy="30" r="6" fill="#ffcc33" stroke="black" />
        <path
          d="M20,45 Q40,40 30,30"
          stroke="#ffcc33"
          strokeWidth="3"
          fill="none"
          // opacity="0.7"
        />
        <path
          d="M42,45 Q44,40 30,30"
          stroke="#ffcc33"
          strokeWidth="3"
          fill="none"
          // opacity="0.7"
        />
      </svg>
    </Box>
  );
}
