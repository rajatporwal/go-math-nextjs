import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Router from "next/router";

const SearchComponent = ({ searchData }) => {
  const defaultProps = {
    options: searchData,
    getOptionLabel: (option) => option.title,
  };

  return (
        <Autocomplete
        {...defaultProps}
          disablePortal
          id="combo-box-demo"
          sx={{ width: {xs: '100%', sm: 300}, height: 45, borderRadius: '30px', backgroundColor: 'white', mr: {xs: 0, sm: 5} }}
          onChange={(event, newValue) => {
            if (newValue) Router.push(newValue.path);
          }}
          renderInput={(params) => <TextField {...params} placeholder="Type to Search"  />}
    /> 
  );
};

export default SearchComponent;
