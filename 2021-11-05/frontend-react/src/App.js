import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader"
import Posts from "./pages/Posts";
import ViewPosts from "./pages/ViewPosts";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";

function App() {
  return (
    
    <BrowserRouter>
      <Route path="/" component={MainHeader}/>
      <Switch>
        <Route exact path="/login" component={LoginUser} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/viewposts" component={ViewPosts} />
        <Route exact path="/register" component={RegisterUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
