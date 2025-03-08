import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css';
import { InputBase, styled } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
}));


export const UISelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Box>
      <FormControl fullWidth variant="outlined">
        <InputLabel
          sx={{
            color: 'rgb(25, 72, 102)',
            lineHeight: !age ? 0.5 : 1,
            overflow: 'visible',
            backgroundColor: age && "white",
            padding: age && "0 10px",
            margin: age && "0 -5px",
            '&.Mui-focused': {
              color: 'rgb(25, 72, 102)',
              backgroundColor: "white",
              padding: "0 10px",
              margin: "0 -5px",
              lineHeight: 1,
            },
          }}
          id={"age-select-label"}>Age</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={age}
          label="Age"
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{
            textAlign: 'left',
            color: "rgb(25, 72, 102)",

            "& .MuiInputBase-input": {
              position: 'relative',
              border: '0.5px solid rgba(25,72,102,0.5)',
              fontSize: 14,
              padding: "8px",
              '&:hover': {
                borderColor: 'rgb(0, 123, 255)', // Change the color on hover
              },
            },

            '& .MuiFormLabel-root-MuiInputLabel-root': {
              lineHeight: 1,
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
