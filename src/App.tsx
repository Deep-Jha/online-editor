import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useActions } from "./hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "./state/reducers";
////////////////////////////////////////////////////////////////////////////////
const App: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const { fetchData } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.test
  );
  const fetchOnClick = () => {
    fetchData("users");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid textAlign={"center"} container spacing={2}>
        <Grid color={"green"} item xs={6}>
          <Button onClick={fetchOnClick} variant="contained" color="success">
            FETCH
          </Button>
        </Grid>

        <Grid color={"red"} item xs={6}>
          <Button variant="contained" color="error">
            REMOVE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
