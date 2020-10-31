import React, { useState, FormEvent, useEffect } from "react";
import {
  Grid,
  Container,
  Toolbar,
  Typography,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Chart from "../graph/Chart";
import UserTable from "../table/UserTable";
import {
  useAtcoderDataReducer,
} from "../atcoderData/useAtcoderDataReducer";
import { fetchData } from "../atcoderData/fetchData";
import rateJson from "../atcoderData/rate.json";

const DashBoard = () => {
  const [mainUser, setMainUser] = useState("");
  const [inputName, setInputName] = useState("");
  const [data, dispatch] = useAtcoderDataReducer();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMainUser(inputName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  useEffect(() => {
    const effectData = async () => {
      if (mainUser === "") {
        return false;
      }
      const rateData: typeof rateJson = await fetchData({ userName: mainUser });
      
      dispatch({ type: "set", payload: rateData , userName: mainUser});
    };
    effectData();
  }, [mainUser, dispatch]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Atcoder Rate Chart
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            id="filled-secondary"
            label="Your AtCoderId"
            variant="filled"
            name="name"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            SEND
          </Button>
        </form>
        {data && (
          <Grid container justify="center">
            <Grid item xs={9}>
              <Chart atcoderData={data}></Chart>
            </Grid>
            <Grid item xs={12}>
              <UserTable atcoderData={data}></UserTable>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default DashBoard;
