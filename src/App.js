import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AuthProvider from "./components/Context/AuthProvider";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Registar from "./components/Registar/Registar";


function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/registar">
            <Registar></Registar>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
     
    
    </div>
  );
}

export default App;
