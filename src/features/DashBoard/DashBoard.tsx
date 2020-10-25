import React, { useState, FormEvent , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useAtcoderDataReducer, Data } from "../atcoderData/useAtcoderDataReducer";
import { fetchData } from "../atcoderData/fetchData";
import rateJson from "../atcoderData/rate.json";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const DashBoard = () => {
  const [mainUser, setMainUser] = useState("");
  const [inputName, setInputName] = useState("");
  const [data, dispatch] = useAtcoderDataReducer();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setMainUser(inputName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  useEffect(() => {
    const effectData = async () => {
      const rateData: typeof rateJson = await fetchData({userName: mainUser});
      const mainData: Data = {
        mainUser: mainUser,
        usersData: [
          {
            userName: mainUser,
            rateData: rateData,
            entryTimes: rateData.length,
            highest: 10,
            rating: 10,
          },
        ],
      };
      dispatch({type: 'fetch', payload: mainData});
    }
    effectData();
  }, [mainUser]);

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
              <Chart></Chart>
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
