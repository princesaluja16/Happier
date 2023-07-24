import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


const Rating1 = ({values}) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating name="rating" value={values} readOnly />
    </Box>
  )
}

export default Rating1
