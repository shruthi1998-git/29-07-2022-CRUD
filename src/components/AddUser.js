import React from "react";
import { useState } from "react";
import { addUser } from "../services/api";
// import { useHistory } from 'react-router-dom';

import {
  Button,
  Input,
  InputLabel,
  Typography,
  FormControl,
  FormGroup,
  Box,
  Container,
} from "@material-ui/core";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setuser] = useState(initialValue);
  const { name, username, email, phone } = user;
  // const history = useHistory();

  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    //    history.push('/all');
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Add User Details
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Email address</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Phone Number</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => addUserDetails()}
              color="primary"
              align="center"
            >
              Add User
            </Button>
            {/* <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button> */}
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default AddUser;
