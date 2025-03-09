import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { CloseEyeSvg, EyeSvg } from "../../assets/svg/svg";

export const UIInput = ({ value, setValue, error, label, type = "text" }) => {
  const [ltype, setLType] = useState(type)
  const [showPassword, setShowPassword] = useState(true);
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={error}
      type={showPassword ? ltype : "text"}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#194866",
          fontFamily: "Arial",
          fontWeight: "400",
          fontSize: "14px",
          overflow: "visible",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007bff",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#d32f2f" : "rgba(25,72,102,0.5)",
            borderWidth: "0.5px",
          },
        },
        "& .MuiInputLabel-outlined": {
          color: !error ? "#194866" : "#d32f2f",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: !value && !error ? "0.7" : "1.5",
          overflow: "visible",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
          lineHeight: "1.5",
        },
        "& .MuiOutlinedInput-input": {
          padding: "10px",
        },
      }}
      InputLabelProps={{
        shrink: value || error,
      }}
      InputProps={{
        endAdornment: (
          ltype === "password" ?
            <InputAdornment position="end">
              {ltype === "password" && <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <EyeSvg /> : <CloseEyeSvg />}
              </IconButton>}
            </InputAdornment> :
            null
        ),
      }}
    />
  );
};
