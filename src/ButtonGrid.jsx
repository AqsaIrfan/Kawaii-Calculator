import React from "react";
import { Grid, Paper } from "@mui/material";
export default function ButtonGrid({ playClick, handleClick }) {
  const buttons = [
    [],
    ["7", "8", "9", "/"],
    ["*", "4", "5", "6"],
    ["+", "-", "1", "2"],
    ["3", ".", "0", ""],
  ];
  return (
    <Grid container spacing={3}>
      {buttons.flat().map((btn, index) => {
        if (btn === "") {
          return <Grid item xs={3} key={index} />;
        }

        return (
          <Grid item xs={3} key={index}>
            <Paper
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
          </Grid>
        );
      })}
    </Grid>
  );
}
