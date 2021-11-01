import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Tweet from "./pages/Tweet";
import AboutUs from "./pages/AboutUs";
import SearchUser from "./pages/SearchUser";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/profile" component={Profile} />
        <Route path="/tweet" component={Tweet} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/search" component={SearchUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
