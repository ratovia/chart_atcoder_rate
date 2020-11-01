import { Button, TextField } from "@material-ui/core";
import React, { FormEvent, useContext, useState } from "react";
import {MainUserContext} from "../DashBoard/DashBoard"


const UserForm = () => {
  // eslint-disable-next-line
  const [mainUser, setMainUser] = useContext(MainUserContext);
  const [inputName, setInputName] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMainUser(inputName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: "20px 0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <TextField
          id="filled-secondary"
          label="Your AtCoderId"
          variant="filled"
          name="name"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" style={{margin: "0px 20px", verticalAlign: "center"}}>
          SEND
        </Button>
      </form>
    </>
  );
};

export default UserForm;
