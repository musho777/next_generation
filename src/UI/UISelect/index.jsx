import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputBase, styled } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
}));

export const UISelect = ({ option = [], value, setValue, label, error }) => {
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
          id="ui-select-label"
          shrink={value || error}
        >
          {label}
        </InputLabel>

        <Select
          labelId="ui-select-label"
          id="ui-select"
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
          {option.map((elm, i) => {
            return <MenuItem key={i} value={elm.value}>{elm.label}</MenuItem>
          })

          }
        </Select>
      </FormControl>
    </Box>
  );
};
