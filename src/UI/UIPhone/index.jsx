import { Box, InputBase, MenuItem, Select, styled, TextField, FormHelperText } from "@mui/material";

const countryCodes = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+91", label: "IN" },
  { code: "+374", label: "AM" },
];

const BootstrapInput = styled(InputBase)(() => ({}));

export const UIPhone = ({ error, setPhone, setPhoneCode, phoneCode, phone }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
      }}
    >
      {error && (
        <FormHelperText
          sx={{
            position: "absolute",
            top: "-8px",
            left: "8px",
            zIndex: 9999,
            backgroundColor: "white",
            color: "#d32f2f",
            fontSize: "10px",
            margin: 0,
            padding: "0 5px"
          }}
        >
          {error}
        </FormHelperText>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: `0.5px solid ${error ? "#d32f2f" : "rgba(25, 72, 102, 0.5)"}`,
          borderRadius: "4px",
          overflow: "hidden",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Select
          value={phoneCode}
          onChange={(e) => setPhoneCode(e.target.value)}
          input={<BootstrapInput />}
          sx={{
            textAlign: 'left',
            color: 'rgb(25, 72, 102)',
            borderRight: `0.5px solid ${error ? "red" : "rgba(25, 72, 102, 0.5)"}`,
            '& .MuiInputBase-input': {
              fontSize: 14,
              padding: '8px',
              '&:hover': {
                borderColor: 'rgb(0, 123, 255)',
              },
            },
          }}
        >
          {countryCodes.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              {country.label} {country.code}
            </MenuItem>
          ))}
        </Select>

        <TextField
          value={phone}
          onChange={(e) => {
            const input = e.target.value;
            if (input.length < 9) {
              setPhone(input);
            }
          }}
          placeholder="99999999"
          variant="standard"
          type="number"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            flex: 1,
            "& input": {
              padding: "9px",
            },
          }}
        />

      </Box>
    </Box>
  );
};
