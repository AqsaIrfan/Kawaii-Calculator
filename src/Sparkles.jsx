import React from "react";
import { Box, Typography } from "@mui/material";

export default function Sparkles() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <Typography
          key={i}
          sx={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: "2rem",
            color: "#FFD700",
            animation: `floatSparkle 4s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </Typography>
      ))}
    </Box>
  );
}
