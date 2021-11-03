import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import TweetPage from "./pages/TweetPage";
import AboutUs from "./pages/AboutUs";
import SearchUser from "./pages/SearchUser";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} component={Welcome} path="/welcome" />
        <PrivateRoute component={Home} path="/" exact />
        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute component={TweetPage} path="/tweet" />
        <PublicRoute restricted={false} component={AboutUs} path="/about-us" exact />
        <PrivateRoute component={SearchUser} path="/search" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
