import React, { useState } from "react";
import TextField from "@mui/material/TextField";
export const UIInput = ({ full }) => {
  const [value, setValue] = useState("")
  return (
    <TextField
      label="Outlined"
      variant="outlined"
      onChange={(e) => setValue(e.target.value)}
      fullWidth={full}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#194866",
          fontFamily: "Arial",
          fontWeight: "400",
          fontSize: "14px",
          overflow: "visible",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007bff", // Change to your desired hover border color
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(25,72,102,0.5)",
            borderWidth: "0.5px",

          },
        },
        "& .MuiInputLabel-outlined": {
          color: "#194866",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: value == "" ? "0.7" : "1.5",
          overflow: "visible",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
          lineHeight: "1.5",
        },
        "& .MuiOutlinedInput-input": {
          padding: "10px",
        },
      }}
    />
  );
}