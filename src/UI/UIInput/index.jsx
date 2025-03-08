import './styles.css'
import React, { useState, useRef, useEffect } from "react";

export const UIInput = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      if (isFocused || value) {
        labelRef.current.style.transform = "translateY(-17px)";
        labelRef.current.style.fontSize = "12px";
        labelRef.current.style.color = "#6200ee";
        labelRef.current.style.backgroundColor = "white";
        labelRef.current.style.padding = "0 5px";

      } else {
        console.log(value)
        if (value != "") {
          labelRef.current.style.transform = "translateY(0)";
          labelRef.current.style.fontSize = "16px";
          labelRef.current.style.color = "#aaa";
        }
      }
    }
  }, [isFocused, value]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <label
        ref={labelRef}
        style={{
          position: "absolute",
          left: "10px",
          top: "10px",
          transition: "all 0.2s ease",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        className="input"
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "-webkit-fill-available",
          padding: "10px",
          border: "1px solid #aaa",
          fontSize: "16px",
        }}
      />
    </div>
  );
};
