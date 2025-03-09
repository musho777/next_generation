import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputBase, styled, FormHelperText } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  // Add custom styling if necessary
}));

export const UISelect = ({ value, setValue, label, error, helperText }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth variant="outlined" error={error}>
        <InputLabel
          sx={{
            color: 'rgb(25, 72, 102)',
            fontSize: 14,
            backgroundColor: value ? 'white' : 'transparent',
            lineHeight: !value ? 0.6 : 1,
            overflow: 'visible',
            padding: value ? '0 10px' : '0',
            margin: value ? '0 -5px' : '0',
            '&.Mui-focused': {
              color: 'rgb(25, 72, 102)',
              backgroundColor: 'white',
              padding: '0 10px',
              margin: '0 -5px',
              lineHeight: 1,
            },
            '&.MuiFormLabel-root.Mui-error': {
              color: '#d32f2f',
              backgroundColor: 'white',
              padding: '0 10px',
              margin: '0 -5px',
              lineHeight: 1.5,
            },
          }}
          id="age-select-label"
          shrink={value || error} // Ensures label moves up when there is a value or an error
        >
          {label}
        </InputLabel>

        <Select
          labelId="age-select-label"
          id="age-select"
          value={value}
          onChange={handleChange}
          label={label}
          input={<BootstrapInput />}
          sx={{
            textAlign: 'left',
            color: 'rgb(25, 72, 102)',
            '& .MuiInputBase-input': {
              border: `0.5px solid ${!error ? 'rgba(25,72,102,0.5)' : '#d32f2f'}`,
              fontSize: 14,
              padding: '8px',
              '&:hover': {
                borderColor: 'rgb(0, 123, 255)',
              },
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
