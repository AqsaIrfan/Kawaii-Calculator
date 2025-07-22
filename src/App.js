import React, { useState, useEffect } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import Bow from "./Bow";
import { evaluate } from "mathjs";
import useSound from "use-sound";
import clickSound from "./sounds/click.mp3";
import { Snackbar, Alert } from "@mui/material";

import "@fontsource/fredoka"; // defaults to weight 400
import Display from "./Display";
import FaceAndControls from "./FaceAndControls";
import ButtonGrid from "./ButtonGrid";
import Sparkles from "./Sparkles";
import CustomSnackbar from "./CustomSnackbar";
// import { GiBowTie } from "react-icons/gi";

export default function App() {
  const [input, setInput] = useState("0");
  const [isBlinking, setIsBlinking] = useState(false);
  const [playClick] = useSound(clickSound);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const sparkleKeyframes = `
      @keyframes floatSparkle {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        50% { opacity: 0.7; }
        100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
      }
    `;
    try {
      styleSheet.insertRule(sparkleKeyframes, styleSheet.cssRules.length);
    } catch (err) {
      console.warn("Could not insert sparkle animation rule:", err);
    }
  }, []);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "=") {
      try {
        let result = evaluate(input);
        if (typeof result === "number" && result.toString().length > 10) {
          result = parseFloat(result.toPrecision(10));
        }
        setInput(result.toString());
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 300);
      } catch {
        setInput("Error");
      }
    } else {
      const currentDigits = input.replace(/\D/g, "").length;
      const isAddingDigit = /\d/.test(value);

      if (isAddingDigit && currentDigits >= 10) {
        setSnackMessage("🥺💛 Limit is 10 digits only!");
        setOpenSnackbar(true);
        return;
      }

      setInput((prev) =>
        prev === "0" || prev === "Error" ? value : prev + value
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <CustomSnackbar
        snackMessage={snackMessage}
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
      <Container
        sx={{
          width: {
            xs: "100%",
            sm: "400vw",
            md: "500vw",
          },
        }}
        maxWidth="xs"
      >
        <Sparkles />

        {/* Calculator Container */}
        <Box
          sx={{
            width: "500px",
            mt: 13,
            border: "6px solid black",
            backgroundColor: "#ebaf17",
            borderRadius: "60px",
            boxShadow: 6,
            px: 2,
            py: 2,
            position: "relative",
          }}
        >
          <Bow />

          <Display input={input} isBlinking={isBlinking} />
          <FaceAndControls
            isBlinking={isBlinking}
            playClick={playClick}
            handleClick={handleClick}
          />
          <ButtonGrid playClick={playClick} handleClick={handleClick} />
        </Box>
      </Container>
    </>
  );
}
