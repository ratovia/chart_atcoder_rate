import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import AtcoderUserDataType from "../atcoderData/atcoderUserDataType";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserTable = (props: any) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>user名</TableCell>
            <TableCell align="right">現在のrate</TableCell>
            <TableCell align="right">最高値</TableCell>
            <TableCell align="right">参加回数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.atcoderData.usersData.map((row: AtcoderUserDataType) => {
            return (
              <TableRow key={row.userName}>
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.highest}</TableCell>
                <TableCell align="right">{row.entryTimes}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
