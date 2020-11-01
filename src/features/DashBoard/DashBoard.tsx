import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Grid,
  Container,
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
import Chart from "../graph/Chart";
import UserTable from "../table/UserTable";
import { useAtcoderDataReducer } from "../atcoderData/useAtcoderDataReducer";
import { fetchData } from "../atcoderData/fetchData";
import rateJson from "../atcoderData/rate.json";
import UserForm from "../userForm/UserForm";

// eslint-disable-next-line
export const MainUserContext: any = React.createContext([
  "",
  {} as Dispatch<SetStateAction<string>>,
]);

const DashBoard = () => {
  const [mainUser, setMainUser] = useState("");
  const [data, dispatch] = useAtcoderDataReducer();
  
  useEffect(() => {
    const effectData = async () => {
      if (mainUser === "") {
        return false;
      }
      const rateData: typeof rateJson = await fetchData({ userName: mainUser });

      dispatch({ type: "set", payload: rateData, userName: mainUser });
    };
    effectData();
  }, [mainUser, dispatch]);

  return (
    <MainUserContext.Provider value={[mainUser, setMainUser]}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Atcoder Rate Chart
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <UserForm></UserForm>
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
    </MainUserContext.Provider>
  );
};

export default DashBoard;
