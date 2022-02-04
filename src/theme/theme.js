
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import typography from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#020202',
    },
    secondary: {
      main: '#fbfbfb',
    },
    error: {
      main: red.A400,
    },
    carolinaBlue: {
      main: '#8BC7FF',
    },
    tint: {
      main: '#007aff',
    },
    green: {
      main: '#64ded6',
    },
    yellow: {
      main: '#ffca09'
    },
    transparent: {
      main: "#ffffff"
    },
    blue: {
      main: '#1987ff'
    },
    link: {
      main: '#47ACFF'
    }
  },
  typography,
  components: {
    MuiStack: {
      defaultProps:{
        // backgroundColor: 'white',
      }
    }
  }
});

export default theme;
