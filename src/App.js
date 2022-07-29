import Navbar from "./components/navbar";
import Home from "./components/Home";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/edituser";
import NotFound from "./components/notfound";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all" component={AllUsers} exact />
        <Route path="/add" component={AddUser} exact />
        <Route path="/edit/:id" component={EditUser} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
