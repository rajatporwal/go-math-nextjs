import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HomeComponent from '/src/components/Home'

export default function Index() {
  return (
      <Box sx={{ my: {xs: 0, md: 4} }}>
        <HomeComponent />
      </Box>
  );
}
