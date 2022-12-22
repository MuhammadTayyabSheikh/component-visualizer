import { Button } from '@material-ui/core';
import { useState } from 'react';
import colors from '../config/colors';

function CustomRadioButton({ value1, value2, selectedValue, setSelectedValue }) {

  const handleChange = (val) => {
    setSelectedValue(val);
  };

  return (
    <div style={{display: 'flex', gap: '0.5rem', height: '1rem'}}>
      <Button
        variant="contained"
        value={value1}
        onClick={() => handleChange(value1)}
        style={{ backgroundColor: `${selectedValue === value1 ? colors.primary : colors.secondary}`, color: `${selectedValue === value1 ? colors.secondary : colors.primary}` }}
      >
        {value1}
      </Button>
      <Button
        variant="contained"
        value={value2}
        onClick={() => handleChange(value2)}
        style={{ backgroundColor: `${selectedValue === value2 ? colors.primary : colors.secondary}`, color: `${selectedValue === value1 ? colors.primary : colors.secondary}` }}
      >
        {value2}
      </Button>
    </div>
  );
}

export default CustomRadioButton;